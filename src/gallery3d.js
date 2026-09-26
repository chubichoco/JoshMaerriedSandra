// "Moments" — the three photos as polaroid frames on a slowly turning ring.
// Drag to spin (with inertia + snap), tap a frame to bring it forward. The
// front frame blooms from sepia into full colour; the others stay softly toned.
import { watchBox } from "./stage.js";
import {
  Scene, PerspectiveCamera, Group, Mesh, BoxGeometry, PlaneGeometry,
  MeshStandardMaterial, ShaderMaterial, HemisphereLight, DirectionalLight, TextureLoader,
  CanvasTexture, SRGBColorSpace, Raycaster, Vector2, MathUtils, LinearMipmapLinearFilter,
} from "three";

const PHOTO_VERT = /* glsl */ `
varying vec2 vUv;
uniform vec2 uRepeat; uniform vec2 uOffset;
void main() { vUv = uv * uRepeat + uOffset; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

const PHOTO_FRAG = /* glsl */ `
uniform sampler2D map; uniform float uSat; uniform float uGlow; uniform float uFade;
varying vec2 vUv;
void main() {
  vec4 c = texture2D(map, vUv);
  float g = dot(c.rgb, vec3(0.299, 0.587, 0.114));
  vec3 sepia = vec3(g) * vec3(1.06, 0.98, 0.88);
  vec3 col = mix(sepia, c.rgb, uSat);
  col += vec3(0.06, 0.035, 0.03) * uGlow;
  col = mix(vec3(0.96, 0.94, 0.91), col, uFade);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;

const TAU = Math.PI * 2;

export class Gallery3D {
  constructor(canvas, photos, stage, { reduced = false, onTap } = {}) {
    this.canvas = canvas;
    this.stage = stage;
    this.reduced = reduced;
    this.onTap = onTap;
    this.box = watchBox(canvas, () => this.resize());
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(32, 1, 0.1, 50);
    this.ring = new Group();
    this.scene.add(this.ring);

    this.scene.add(new HemisphereLight(0xfffaf2, 0xe9cfc9, 1.6));
    const key = new DirectionalLight(0xffffff, 1.4);
    key.position.set(2, 4, 6);
    this.scene.add(key);

    this.R = 1.75;
    this.step = TAU / photos.length;
    this.angle = 0;          // current ring angle
    this.target = 0;         // snap target
    this.vel = 0;
    this.idle = 0;
    this.index = 0;
    this.frames = [];

    const loader = new TextureLoader();
    const back = this._backTexture();
    const paper = new MeshStandardMaterial({ color: 0xfdfcfa, roughness: 0.85 });
    const backMat = new MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, map: back });

    photos.forEach((src, i) => {
      const fr = { group: new Group(), uni: null, sat: 0, ready: false };
      const u = {
        map: { value: null }, uSat: { value: 0 }, uGlow: { value: 0 }, uFade: { value: 0 },
        uRepeat: { value: new Vector2(1, 1) }, uOffset: { value: new Vector2(0, 0) },
      };
      fr.uni = u;
      // provisional portrait size; rebuilt when the image's aspect is known
      this._buildFrame(fr, 0.75, paper, backMat);
      loader.load(src, (tex) => {
        tex.colorSpace = SRGBColorSpace;
        tex.minFilter = LinearMipmapLinearFilter;
        tex.anisotropy = Math.min(4, this.stage.renderer.capabilities.getMaxAnisotropy());
        u.map.value = tex;
        const a = tex.image.width / tex.image.height;
        this._buildFrame(fr, a, paper, backMat);
        fr.ready = true;
      });
      const th = i * this.step;
      fr.group.position.set(Math.sin(th) * this.R, 0, Math.cos(th) * this.R);
      fr.group.rotation.y = th;
      fr.theta = th;
      fr.bob = Math.random() * TAU;
      this.ring.add(fr.group);
      this.frames.push(fr);
    });

    // soft contact shadow under the ring
    const sh = new Mesh(new PlaneGeometry(4.6, 3.2), new MeshStandardMaterial({ map: this._shadowTexture(), transparent: true, depthWrite: false, color: 0x6e2a35, opacity: 0.3 }));
    sh.rotation.x = -Math.PI / 2;
    sh.position.y = -1.32;
    this.scene.add(sh);

    this._bindInput();
    this.resize();
  }

  _buildFrame(fr, aspect, paper, backMat) {
    fr.group.clear();
    const maxW = 1.62, maxH = 1.62;
    let pw = maxH * aspect, ph = maxH;
    if (pw > maxW) { pw = maxW; ph = maxW / aspect; }
    // crop slightly toward a gentle portrait/landscape so frames feel consistent
    const side = 0.085, top = 0.085, bottom = 0.34;
    const fw = pw + side * 2, fh = ph + top + bottom;
    const box = new Mesh(new BoxGeometry(fw, fh, 0.035), [paper, paper, paper, paper, paper, backMat]);
    const photo = new Mesh(new PlaneGeometry(pw, ph), new ShaderMaterial({ uniforms: fr.uni, vertexShader: PHOTO_VERT, fragmentShader: PHOTO_FRAG }));
    photo.position.set(0, (bottom - top) / 2, 0.019);
    box.userData.frame = fr;
    photo.userData.frame = fr;
    fr.group.add(box, photo);
    fr.hit = [box, photo];
  }

  _backTexture() {
    const c = document.createElement("canvas");
    c.width = 512; c.height = 640;
    const g = c.getContext("2d");
    const draw = () => {
      g.fillStyle = "#fbf8f3"; g.fillRect(0, 0, 512, 640);
      g.strokeStyle = "rgba(184,147,90,.55)"; g.lineWidth = 3; g.strokeRect(34, 34, 444, 572);
      g.fillStyle = "#6e2a35"; g.textAlign = "center";
      g.font = '150px "Luxurious Script", cursive'; g.fillText("J & S", 256, 340);
      g.font = '500 26px "Jost", sans-serif'; g.fillStyle = "#5f6b47";
      g.fillText("1 0 · 0 4 · 2 0 2 7", 256, 430);
    };
    draw();
    const tex = new CanvasTexture(c);
    tex.colorSpace = SRGBColorSpace;
    // redraw once the webfonts are available
    if (document.fonts && document.fonts.load) {
      Promise.all([document.fonts.load('150px "Luxurious Script"'), document.fonts.load('500 26px "Jost"')])
        .then(() => { draw(); tex.needsUpdate = true; }).catch(() => {});
    }
    return tex;
  }

  _shadowTexture() {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const g = c.getContext("2d");
    const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grd.addColorStop(0, "rgba(255,255,255,.9)");
    grd.addColorStop(0.5, "rgba(255,255,255,.35)");
    grd.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
    return new CanvasTexture(c);
  }

  _bindInput() {
    const el = this.canvas;
    let down = null;
    el.addEventListener("pointerdown", (e) => {
      down = { x: e.clientX, y: e.clientY, t: performance.now(), last: e.clientX, lastT: performance.now(), drag: false, id: e.pointerId };
    });
    el.addEventListener("pointermove", (e) => {
      if (!down || e.pointerId !== down.id) return;
      const dx = e.clientX - down.last;
      if (!down.drag && Math.abs(e.clientX - down.x) > 6 && Math.abs(e.clientX - down.x) > Math.abs(e.clientY - down.y)) {
        down.drag = true;
        el.setPointerCapture(e.pointerId);
      }
      if (down.drag) {
        const now = performance.now();
        const k = 2.6 / el.clientWidth * Math.PI;
        this.angle -= dx * k;
        this.vel = (-dx * k) / Math.max(1, now - down.lastT) * 1000;
        down.last = e.clientX;
        down.lastT = now;
        this.idle = 0;
        this.dragging = true;
      }
    });
    const up = (e) => {
      if (!down) return;
      if (down.drag) {
        // project inertia, then snap to the nearest frame
        const proj = this.angle + this.vel * 0.25;
        this.target = Math.round(proj / this.step) * this.step;
      } else if (performance.now() - down.t < 450) {
        this._tap(e);
      }
      this.dragging = false;
      this.vel = 0;
      down = null;
    };
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", () => { down = null; this.dragging = false; this.target = Math.round(this.angle / this.step) * this.step; });
  }

  _tap(e) {
    const r = this.canvas.getBoundingClientRect();
    const v = new Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    const rc = new Raycaster();
    rc.setFromCamera(v, this.camera);
    const hits = rc.intersectObjects(this.frames.flatMap((f) => f.hit || []), false);
    if (!hits.length) return;
    const fr = hits[0].object.userData.frame;
    const i = this.frames.indexOf(fr);
    // shortest rotation that brings frame i to the front (ring angle == its theta)
    const desired = fr.theta;
    let d = ((desired - this.target) % TAU + TAU * 1.5) % TAU - TAU / 2;
    this.target += d;
    this.idle = 0;
    this.onTap && this.onTap(e.clientX, e.clientY, i);
  }

  go(dir) {
    this.target = Math.round(this.target / this.step) * this.step + dir * this.step;
    this.idle = 0;
  }

  resize() {
    const w = this.box ? this.box.w : this.canvas.clientWidth, h = this.box ? this.box.h : this.canvas.clientHeight;
    if (!w || !h) return;
    const aspect = w / h;
    this.camera.aspect = aspect;
    const tanH = Math.tan(MathUtils.degToRad(this.camera.fov / 2));
    // fit ~3 units wide and ~2.6 units tall at the front frame's depth
    const dW = 1.45 / (tanH * aspect), dH = 1.3 / tanH;
    this.camDist = this.R + Math.max(dW, dH);
    this.camera.position.set(0, 0.55, this.camDist);
    this.camera.lookAt(0, -0.05, 0);
    this.camera.updateProjectionMatrix();
  }

  update(_dt, f, pointer) {
    // own clock so colour fades complete on time even when frames are dropped
    const nowT = performance.now();
    const dt = Math.min(0.25, this._lastT ? (nowT - this._lastT) / 1000 : 0.016);
    this._lastT = nowT;
    this.idle += dt;
    if (!this.dragging) {
      if (!this.reduced && this.idle > 4.5) { this.go(1); }
      const k = 1 - Math.exp(-dt * (this.reduced ? 30 : 4.2));
      this.angle += (this.target - this.angle) * k;
    }
    this.ring.rotation.y = -this.angle;
    this.ring.rotation.x = 0.05 + pointer.y * 0.04;
    this.ring.rotation.z = pointer.x * -0.02;

    // which frame faces the camera?
    const front = ((Math.round(this.angle / this.step) % this.frames.length) + this.frames.length) % this.frames.length;
    this.index = front;
    const t = performance.now() / 1000;
    this.frames.forEach((fr, i) => {
      const isFront = i === front;
      const facing = Math.cos(fr.theta - this.angle); // 1 when facing camera
      fr.sat += ((isFront ? 1 : 0.12) - fr.sat) * (1 - Math.exp(-dt * 3));
      fr.uni.uSat.value = fr.sat;
      fr.uni.uGlow.value = f.beat * Math.max(0, facing);
      fr.uni.uFade.value = Math.min(1, fr.uni.uFade.value + (fr.ready ? dt * 1.5 : 0));
      const bob = this.reduced ? 0 : Math.sin(t * 0.9 + fr.bob) * 0.04;
      fr.group.position.y = bob;
      const s = 1 + Math.max(0, facing) * 0.06 + f.beat * 0.015 * Math.max(0, facing);
      fr.group.scale.setScalar(s);
      fr.group.rotation.z = Math.sin(t * 0.6 + fr.bob) * 0.02;
    });
    if (this.box.w > 1 && this.box.h > 1) this.stage.draw(this.canvas, this.scene, this.camera, this.box.w, this.box.h);
  }
}
