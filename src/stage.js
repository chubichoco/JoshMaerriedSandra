// One off-screen WebGL renderer shared by every small 3D view on the page (the
// Higgsfield models and the photo ring). Each view renders into a corner of the
// shared buffer and is copied into its own 2D <canvas> inside the page, so:
//   • only two WebGL contexts exist in total (this one + the backdrop world),
//   • nothing full-screen is drawn or composited for views that are small,
//   • the copies scroll natively with the page (no per-frame position tracking).
import { WebGLRenderer, PMREMGenerator } from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export class Stage {
  constructor({ dpr = 1.5 } = {}) {
    this.canvas = document.createElement("canvas");
    this.renderer = new WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true, powerPreference: "default" });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(1); // we size the buffer in device pixels ourselves
    this.renderer.autoClear = false;
    this.renderer.setScissorTest(true);
    this.dpr = dpr;
    this.bw = 0;
    this.bh = 0;
    this._env = null;
  }

  get env() {
    if (!this._env) {
      const pm = new PMREMGenerator(this.renderer);
      this._env = pm.fromScene(new RoomEnvironment(), 0.04).texture;
      pm.dispose();
    }
    return this._env;
  }

  setDpr(dpr) { this.dpr = dpr; }

  // Grow the shared buffer only when a view needs more room (never every frame).
  _ensure(w, h) {
    if (w <= this.bw && h <= this.bh) return;
    this.bw = Math.max(this.bw, Math.ceil(w / 64) * 64);
    this.bh = Math.max(this.bh, Math.ceil(h / 64) * 64);
    this.renderer.setSize(this.bw, this.bh, false);
  }

  // Render scene/camera at the target canvas' CSS size and copy it in.
  draw(target, scene, camera, cssW, cssH) {
    const w = Math.max(1, Math.round(cssW * this.dpr));
    const h = Math.max(1, Math.round(cssH * this.dpr));
    this._ensure(w, h);
    if (target.width !== w || target.height !== h) { target.width = w; target.height = h; }
    const r = this.renderer;
    r.setViewport(0, 0, w, h);
    r.setScissor(0, 0, w, h);
    r.clear();
    camera.aspect = cssW / cssH;
    camera.updateProjectionMatrix();
    r.render(scene, camera);
    const ctx = target._ctx || (target._ctx = target.getContext("2d"));
    ctx.clearRect(0, 0, w, h);
    // WebGL's origin is bottom-left: the rendered block sits at the bottom of the buffer
    ctx.drawImage(this.canvas, 0, this.bh - h, w, h, 0, 0, w, h);
  }
}

// Cache an element's CSS size and on-screen state without reading layout every frame.
export function watchBox(el, onChange) {
  const box = { w: el.clientWidth, h: el.clientHeight, visible: false };
  new ResizeObserver((entries) => {
    const r = entries[0].contentRect;
    box.w = r.width; box.h = r.height;
    onChange && onChange(box);
  }).observe(el);
  new IntersectionObserver((entries) => { box.visible = entries[0].isIntersecting; }, { rootMargin: "80px" }).observe(el);
  return box;
}
