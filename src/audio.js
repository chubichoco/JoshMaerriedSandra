// Audio controller: plays the original MP3 untouched and exposes rhythm features
// (level / bass / mid / high / onset) sampled from a precomputed analysis of the
// same file, indexed by playback time. That keeps every visual in sync on every
// browser, including iOS and file:// where live Web Audio analysis is unreliable.

import { SONG_FPS, SONG_CH, SONG_DATA } from "./song-data.js";

function decode(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export class AudioEngine {
  constructor(el) {
    this.el = el;
    this.data = decode(SONG_DATA);
    this.frames = this.data.length / SONG_CH;
    this.volume = 0.8;
    this.muted = false;
    this.ctx = null;
    this.gain = null;
    this.listeners = new Set();
    // Smoothed features consumed by the visuals (0..1)
    this.f = { level: 0, bass: 0, mid: 0, high: 0, onset: 0, beat: 0, playing: 0 };
    this._lastOnsetFrame = -1;

    el.volume = this.volume;
    ["play", "pause", "ended"].forEach((ev) => el.addEventListener(ev, () => this._emit()));

    // Pause while the tab is hidden; resume only if we were the ones who paused.
    let pausedByVisibility = false;
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (!el.paused) { el.pause(); pausedByVisibility = true; }
      } else if (pausedByVisibility) {
        pausedByVisibility = false;
        this.play();
      }
    });
  }

  get playing() { return !this.el.paused && !this.el.ended; }

  onChange(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
  _emit() { this.listeners.forEach((fn) => fn(this)); }

  // Route through a GainNode (inside a user gesture) so the volume slider also
  // works on iOS, where HTMLMediaElement.volume is read-only. Skipped on file://
  // because Chrome would treat the media as cross-origin and output silence.
  _ensureGraph() {
    if (this.ctx || location.protocol === "file:") return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
      const src = this.ctx.createMediaElementSource(this.el);
      this.gain = this.ctx.createGain();
      this.gain.gain.value = this._effectiveVolume();
      src.connect(this.gain).connect(this.ctx.destination);
      this.el.volume = 1;
    } catch (e) {
      this.ctx = null;
      this.gain = null;
    }
  }

  play() {
    this._ensureGraph();
    if (this.ctx && this.ctx.state === "suspended") this.ctx.resume().catch(() => {});
    const p = this.el.play();
    return p && p.catch ? p.catch(() => {}) : Promise.resolve();
  }
  pause() { this.el.pause(); }
  toggle() { return this.playing ? this.pause() : this.play(); }

  _effectiveVolume() { return this.muted ? 0 : this.volume; }
  _applyVolume() {
    const v = this._effectiveVolume();
    if (this.gain) this.gain.gain.setTargetAtTime(v, this.ctx.currentTime, 0.03);
    else this.el.volume = v;
    this._emit();
  }
  setVolume(v) {
    this.volume = Math.min(1, Math.max(0, v));
    if (this.volume > 0 && this.muted) this.muted = false;
    this._applyVolume();
  }
  toggleMute() { this.muted = !this.muted; this._applyVolume(); }

  // Raw features at an arbitrary time (linear interpolation between frames)
  sample(t, out) {
    const x = Math.max(0, t * SONG_FPS);
    const i = Math.min(this.frames - 2, Math.floor(x));
    const a = x - i;
    const d = this.data;
    const o0 = i * SONG_CH, o1 = o0 + SONG_CH;
    out.level = (d[o0] * (1 - a) + d[o1] * a) / 255;
    out.bass = (d[o0 + 1] * (1 - a) + d[o1 + 1] * a) / 255;
    out.mid = (d[o0 + 2] * (1 - a) + d[o1 + 2] * a) / 255;
    out.high = (d[o0 + 3] * (1 - a) + d[o1 + 3] * a) / 255;
    // onsets are impulses: take the max of this frame and the next so none are skipped
    out.onset = Math.max(d[o0 + 4], d[o1 + 4]) / 255;
    out.frame = i;
    return out;
  }

  // Call once per animation frame. dt in seconds.
  update(dt) {
    const f = this.f;
    const k = 1 - Math.exp(-dt * 14); // attack/release smoothing
    const target = this._tmp || (this._tmp = {});
    const on = this.playing && !this.muted ? 1 : 0;
    if (this.playing) {
      this.sample(this.el.currentTime, target);
      // vocal/instrument energy scaled by volume so muting calms the scene
      const vol = this._effectiveVolume() > 0 ? 0.55 + 0.45 * this._effectiveVolume() : 0;
      f.level += (target.level * vol - f.level) * k;
      f.bass += (target.bass * vol - f.bass) * k;
      f.mid += (target.mid * vol - f.mid) * k;
      f.high += (target.high * vol - f.high) * k;
      if (target.onset > 0.18 && target.frame !== this._lastOnsetFrame && vol > 0) {
        this._lastOnsetFrame = target.frame;
        f.beat = Math.max(f.beat, Math.min(1, 0.35 + target.onset * 0.9) * vol);
      }
    } else {
      f.level += (0 - f.level) * k * 0.4;
      f.bass += (0 - f.bass) * k * 0.4;
      f.mid += (0 - f.mid) * k * 0.4;
      f.high += (0 - f.high) * k * 0.4;
    }
    f.beat *= Math.exp(-dt * 4.2);
    f.playing += (on - f.playing) * (1 - Math.exp(-dt * 3));
    return f;
  }

  progress() {
    const d = this.el.duration;
    return d && isFinite(d) ? this.el.currentTime / d : 0;
  }
}
