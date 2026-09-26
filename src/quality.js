// App-wide quality tiers. One manager watches real frame times and steps every
// layer (backdrop, 3D models, gallery, waves) down together if the device can't
// hold a smooth frame rate. It only ever steps down, so it never oscillates.

export const TIERS = [
  { name: "high", worldDpr: 1.5, stageDpr: 1.5, dust: 1, petals: 1, roses: 4, waveFps: 60 },
  { name: "medium", worldDpr: 1.0, stageDpr: 1.25, dust: 0.7, petals: 0.7, roses: 2, waveFps: 30 },
  { name: "low", worldDpr: 0.75, stageDpr: 1.0, dust: 0.45, petals: 0.45, roses: 0, waveFps: 20 },
];

function gpuName() {
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl2") || c.getContext("webgl");
    if (!gl) return "";
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    const name = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    const lose = gl.getExtension("WEBGL_lose_context");
    lose && lose.loseContext();
    return String(name || "");
  } catch (e) { return ""; }
}

// Pick a sensible starting tier before any frames are measured.
export function initialTier({ mobile }) {
  const forced = new URLSearchParams(location.search).get("quality");
  const idx = TIERS.findIndex((t) => t.name === forced);
  if (idx >= 0) return { index: idx, forced: true, gpu: "" };
  const gpu = gpuName();
  const g = gpu.toLowerCase();
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 8;
  let index = 0;
  // integrated laptop GPUs and modest machines start one step down
  if (/intel|uhd|iris|hd graphics|radeon\(tm\) graphics|vega|mali|adreno|powervr|apple gpu/.test(g) || cores <= 4 || mem <= 4 || mobile) index = 1;
  // software rendering: go straight to the lightest tier
  if (/swiftshader|llvmpipe|software|basic render/.test(g)) index = 2;
  return { index, forced: false, gpu };
}

export class QualityManager {
  constructor({ mobile, onChange }) {
    const start = initialTier({ mobile });
    this.index = start.index;
    this.forced = start.forced;
    this.gpu = start.gpu;
    this.onChange = onChange;
    this.samples = [];
    this.windowTime = 0;
    this.grace = 2.5; // ignore start-up frames (shader compiles, texture uploads)
    document.addEventListener("visibilitychange", () => { this.samples = []; this.windowTime = 0; this.grace = 1.5; });
  }

  get tier() { return TIERS[this.index]; }

  // Ignore frames around heavy one-off moments (envelope video, first model upload).
  pause(seconds) { this.grace = Math.max(this.grace, seconds); this.samples = []; this.windowTime = 0; }

  frame(rawDt) {
    if (this.forced || this.index >= TIERS.length - 1) return;
    if (this.grace > 0) { this.grace -= rawDt; return; }
    if (rawDt > 0.25) return; // tab switch or breakpoint, not a real frame
    this.samples.push(rawDt);
    this.windowTime += rawDt;
    if (this.windowTime < 1.5) return;
    // average frame time over the window, ignoring the single worst hitch
    const sorted = this.samples.slice().sort((a, b) => a - b);
    sorted.pop();
    const avg = sorted.reduce((a, b) => a + b, 0) / Math.max(1, sorted.length);
    this.samples = [];
    this.windowTime = 0;
    if (avg > 1 / 50) {
      this.index++;
      this.grace = 1.2;
      this.onChange && this.onChange(this.tier, this.index);
    }
  }
}
