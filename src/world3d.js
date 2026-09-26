// WebGL backdrop: drifting gold-dust bokeh, tumbling petals, and a pool of glossy
// 3D hearts + sparks that burst from wherever the guest taps. Everything is
// procedural and instanced: a handful of draw calls, no model downloads.
import {
  WebGLRenderer, Scene, PerspectiveCamera, BufferGeometry, BufferAttribute,
  Points, ShaderMaterial, InstancedMesh, MeshStandardMaterial,
  HemisphereLight, DirectionalLight, PointLight, Color, Object3D, Vector3, Raycaster,
  Vector2, Plane, DoubleSide, DynamicDrawUsage, NormalBlending, PMREMGenerator,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { heartGeometry, petalGeometry } from "./shapes.js";

const DUST_COLORS = ["#c9a15f", "#d8bf8f", "#e2b4ae", "#c98a93", "#fff6e6", "#b76e79", "#9b4a58"];
const HEART_COLORS = ["#8d0f2c", "#6e2a35", "#b76e79", "#d9a9a4", "#e8c3be", "#c9a15f"];
const PETAL_COLORS = ["#e8c3be", "#d9a9a4", "#f3e3dc", "#c98a93", "#fbf3ea", "#8d0f2c"];

const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[(Math.random() * arr.length) | 0];

const DUST_VERT = /* glsl */ `
attribute float aSize; attribute float aPhase; attribute float aSpeed; attribute vec3 aColor;
uniform float uTime; uniform float uPixel; uniform float uBeat; uniform float uLevel; uniform float uBass;
uniform float uHeight; uniform float uCamY;
varying vec3 vColor; varying float vAlpha;
void main() {
  vec3 p = position;
  float h = uHeight;
  p.y = mod(p.y + uTime * aSpeed - uCamY + h * 0.5, h) - h * 0.5 + uCamY;
  p.x += sin(uTime * 0.25 + aPhase * 6.2831) * 0.35;
  p.z += cos(uTime * 0.2 + aPhase * 4.0) * 0.25;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float tw = 0.55 + 0.45 * sin(uTime * (1.2 + aPhase) + aPhase * 6.2831);
  float s = aSize * (1.0 + uBass * 0.9 + uBeat * 0.7);
  gl_PointSize = s * uPixel * (20.0 / -mv.z);
  vColor = aColor;
  float edge = smoothstep(h * 0.5, h * 0.38, abs(p.y - uCamY));
  vAlpha = tw * (0.5 + uLevel * 0.35 + uBeat * 0.35) * edge;
}`;

const DUST_FRAG = /* glsl */ `
varying vec3 vColor; varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = pow(smoothstep(0.5, 0.0, d), 1.7);
  float core = smoothstep(0.16, 0.0, d);
  vec3 c = vColor + core * 0.35;
  float alpha = a * vAlpha;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(c, alpha);
}`;

const SPARK_VERT = /* glsl */ `
attribute float aSize; attribute float aAlpha; attribute vec3 aColor;
uniform float uPixel;
varying vec3 vColor; varying float vAlpha;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPixel * (18.0 / -mv.z);
  vColor = aColor; vAlpha = aAlpha;
}`;

const SPARK_FRAG = /* glsl */ `
varying vec3 vColor; varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float star = max(0.0, 1.0 - abs(c.x * c.y) * 60.0) * smoothstep(0.5, 0.0, d);
  float a = max(pow(smoothstep(0.5, 0.0, d), 2.2), star * 0.8) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor + smoothstep(0.15, 0.0, d) * 0.4, a);
}`;

export class World3D {
  constructor(canvas, { reduced = false, mobile = false, quality } = {}) {
    this.canvas = canvas;
    this.reduced = reduced;
    this.mobile = mobile;
    // Soft bokeh and petals don't need antialiasing; resolution comes from the quality tier.
    this.renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "high-performance", stencil: false });
    this.renderer.setClearColor(0x000000, 0);
    this.q = quality || { worldDpr: 1, dust: 1, petals: 1, roses: 4 };
    this.dpr = Math.min(window.devicePixelRatio || 1, this.q.worldDpr);
    this.renderer.setPixelRatio(this.dpr);

    this.scene = new Scene();
    try {
      const pm = new PMREMGenerator(this.renderer);
      this.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
      this.scene.environmentIntensity = 0.55;
      pm.dispose();
    } catch (e) {}
    this.camera = new PerspectiveCamera(50, 1, 0.1, 60);
    this.camera.position.set(0, 0, 10);
    this.camY = 0;
    this.look = new Vector3();
    this.time = 0;

    // lights — the key light breathes with the music
    this.hemi = new HemisphereLight(0xfff6ee, 0xe6c3be, 0.8);
    this.key = new DirectionalLight(0xfff1e0, 1.8);
    this.key.position.set(3, 5, 7);
    this.rim = new PointLight(0xd9a9a4, 18, 30, 1.6);
    this.rim.position.set(-5, -2, 4);
    this.scene.add(this.hemi, this.key, this.rim);

    this._buildDust();
    this._buildPetals();
    this._buildHearts();
    this._buildSparks();

    this.raycaster = new Raycaster();
    this.plane = new Plane(new Vector3(0, 0, 1), 0);
    this._v2 = new Vector2();
    this._v3 = new Vector3();
    this._o = new Object3D();

    this.resize();
  }

  _buildDust() {
    const n = this.mobile ? 170 : 320;
    this.dustH = 16;
    const pos = new Float32Array(n * 3), size = new Float32Array(n), phase = new Float32Array(n),
      speed = new Float32Array(n), col = new Float32Array(n * 3);
    const c = new Color();
    for (let i = 0; i < n; i++) {
      pos[i * 3] = rand(-11, 11);
      pos[i * 3 + 1] = rand(-this.dustH / 2, this.dustH / 2);
      pos[i * 3 + 2] = rand(-8, 4.5);
      size[i] = Math.random() < 0.14 ? rand(8, 15) : rand(1.6, 5);
      phase[i] = Math.random();
      speed[i] = rand(0.05, 0.22);
      c.set(pick(DUST_COLORS));
      col.set([c.r, c.g, c.b], i * 3);
    }
    const g = new BufferGeometry();
    g.setAttribute("position", new BufferAttribute(pos, 3));
    g.setAttribute("aSize", new BufferAttribute(size, 1));
    g.setAttribute("aPhase", new BufferAttribute(phase, 1));
    g.setAttribute("aSpeed", new BufferAttribute(speed, 1));
    g.setAttribute("aColor", new BufferAttribute(col, 3));
    this.dustU = {
      uTime: { value: 0 }, uPixel: { value: this.dpr }, uBeat: { value: 0 }, uLevel: { value: 0 },
      uBass: { value: 0 }, uHeight: { value: this.dustH }, uCamY: { value: 0 },
    };
    const m = new ShaderMaterial({
      uniforms: this.dustU, vertexShader: DUST_VERT, fragmentShader: DUST_FRAG,
      transparent: true, depthWrite: false, blending: NormalBlending,
    });
    this.dust = new Points(g, m);
    this.dust.frustumCulled = false;
    this.dustCount = n;
    this.scene.add(this.dust);
  }

  _buildPetals() {
    const n = this.mobile ? 16 : 26;
    const mat = new MeshStandardMaterial({ roughness: 0.55, metalness: 0, side: DoubleSide, transparent: true, opacity: 0.92 });
    this.petals = new InstancedMesh(petalGeometry(), mat, n);
    this.petals.instanceMatrix.setUsage(DynamicDrawUsage);
    this.petals.frustumCulled = false;
    this.petalState = [];
    const c = new Color();
    for (let i = 0; i < n; i++) {
      this.petalState.push({
        x: rand(-9, 9), y: rand(-8, 8), z: rand(-6, 3),
        vy: rand(0.18, 0.45), sway: rand(0.4, 1.1), sp: rand(0.3, 0.9), ph: rand(0, 6.28),
        rx: rand(0, 6.28), ry: rand(0, 6.28), rz: rand(0, 6.28),
        wx: rand(-0.9, 0.9), wy: rand(-0.7, 0.7), wz: rand(-0.6, 0.6),
        s: rand(0.42, 0.78),
      });
      this.petals.setColorAt(i, c.set(pick(PETAL_COLORS)));
    }
    this.scene.add(this.petals);
  }

  _buildHearts() {
    const n = 90;
    // Standard (not physical/clearcoat) material + the room environment still reads as glossy
    const mat = new MeshStandardMaterial({ roughness: 0.28, metalness: 0.08, envMapIntensity: 1.3 });
    this.hearts = new InstancedMesh(heartGeometry(this.mobile ? 8 : 12), mat, n);
    this.hearts.instanceMatrix.setUsage(DynamicDrawUsage);
    this.hearts.frustumCulled = false;
    this.heartState = [];
    const zero = new Object3D();
    zero.scale.setScalar(0);
    zero.updateMatrix();
    const c = new Color();
    for (let i = 0; i < n; i++) {
      this.heartState.push({ alive: false, age: 0, life: 1, p: new Vector3(), v: new Vector3(), r: new Vector3(), w: new Vector3(), s: 1, ph: 0 });
      this.hearts.setMatrixAt(i, zero.matrix);
      this.hearts.setColorAt(i, c.set(HEART_COLORS[i % HEART_COLORS.length]));
    }
    this.heartCursor = 0;
    this.scene.add(this.hearts);
  }

  _buildSparks() {
    const n = 260;
    this.sparkN = n;
    const g = new BufferGeometry();
    this.sparkPos = new Float32Array(n * 3);
    this.sparkAlpha = new Float32Array(n);
    this.sparkSize = new Float32Array(n);
    this.sparkCol = new Float32Array(n * 3);
    this.sparkState = Array.from({ length: n }, () => ({ alive: false, age: 0, life: 1, v: new Vector3(), s: 1 }));
    g.setAttribute("position", new BufferAttribute(this.sparkPos, 3).setUsage(DynamicDrawUsage));
    g.setAttribute("aAlpha", new BufferAttribute(this.sparkAlpha, 1).setUsage(DynamicDrawUsage));
    g.setAttribute("aSize", new BufferAttribute(this.sparkSize, 1).setUsage(DynamicDrawUsage));
    g.setAttribute("aColor", new BufferAttribute(this.sparkCol, 3).setUsage(DynamicDrawUsage));
    this.sparkU = { uPixel: { value: this.dpr } };
    const m = new ShaderMaterial({ uniforms: this.sparkU, vertexShader: SPARK_VERT, fragmentShader: SPARK_FRAG, transparent: true, depthWrite: false });
    this.sparks = new Points(g, m);
    this.sparks.frustumCulled = false;
    this.sparkCursor = 0;
    this.scene.add(this.sparks);
  }

  // Scatter a few copies of the Higgsfield 3D rose through the depth of the scene.
  addRoses(template) {
    const n = Math.min(this.mobile ? 3 : 4, this.q.roses);
    this.roses = [];
    this.roseTemplate = template;
    // lift the dark velvet texture a little so the roses read on ivory
    template.traverse((o) => {
      if (o.isMesh && o.material) {
        o.material = o.material.clone();
        o.material.color.setScalar(1.45);
        o.material.roughness = 0.65;
        o.material.envMapIntensity = 1.2;
      }
    });
    const side = () => (Math.random() < 0.5 ? -1 : 1) * rand(this.mobile ? 1.9 : 3.2, this.mobile ? 3.4 : 6.5);
    for (let i = 0; i < n; i++) {
      const obj = template.clone(true);
      const st = {
        obj, x: side(), y: this.camY + (i / n) * 18 - 9, z: rand(-3.5, 0.6), side,
        vy: rand(0.12, 0.24), ph: rand(0, 6.28), sway: rand(0.2, 0.5),
        rx: rand(0, 6.28), ry: rand(0, 6.28), wx: rand(-0.3, 0.3), wy: rand(-0.45, 0.45), s: rand(1.3, 2.0),
      };
      obj.scale.setScalar(0.0001);
      this.scene.add(obj);
      this.roses.push(st);
    }
    this.roseIn = 0;
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    // keep the scene's horizontal span pleasant on tall phones
    this.camera.fov = w < h ? 58 : 48;
    this.camera.updateProjectionMatrix();
    if (this.reduced) this.render();
  }

  // Convert a screen point to a world point on the z=0 plane in front of the camera.
  screenToWorld(x, y, out) {
    this._v2.set((x / window.innerWidth) * 2 - 1, -(y / window.innerHeight) * 2 + 1);
    this.raycaster.setFromCamera(this._v2, this.camera);
    this.plane.constant = 0;
    return this.raycaster.ray.intersectPlane(this.plane, out) || out.set(0, this.camY, 0);
  }

  burst(x, y, { count = 14, power = 1, sparks = 26 } = {}) {
    if (this.reduced) return;
    const origin = this.screenToWorld(x, y, new Vector3());
    for (let k = 0; k < count; k++) {
      const h = this.heartState[this.heartCursor];
      this.heartCursor = (this.heartCursor + 1) % this.heartState.length;
      const a = rand(0, Math.PI * 2);
      const sp = rand(1.6, 4.2) * power;
      h.alive = true;
      h.age = 0;
      h.life = rand(2.2, 3.6);
      h.p.copy(origin).add(this._v3.set(rand(-0.15, 0.15), rand(-0.15, 0.15), rand(-0.3, 0.3)));
      h.v.set(Math.cos(a) * sp, Math.sin(a) * sp * 0.8 + 1.4 * power, rand(-1.2, 2.2) * power);
      h.r.set(rand(-0.4, 0.4), rand(-0.6, 0.6), rand(-0.3, 0.3));
      h.w.set(rand(-1.5, 1.5), rand(-3, 3), rand(-1.2, 1.2));
      h.s = rand(0.22, 0.46) * (0.8 + power * 0.25);
      h.ph = rand(0, 6.28);
    }
    const c = new Color();
    for (let k = 0; k < sparks; k++) {
      const i = this.sparkCursor;
      this.sparkCursor = (this.sparkCursor + 1) % this.sparkN;
      const s = this.sparkState[i];
      const a = rand(0, Math.PI * 2), sp = rand(1.5, 6) * power;
      s.alive = true;
      s.age = 0;
      s.life = rand(0.7, 1.6);
      s.s = rand(3, 9);
      s.v.set(Math.cos(a) * sp, Math.sin(a) * sp + 0.8, rand(-1, 2));
      this.sparkPos.set([origin.x, origin.y, origin.z], i * 3);
      c.set(pick(["#c9a15f", "#e6c98f", "#fff3dc", "#d9a9a4"]));
      this.sparkCol.set([c.r, c.g, c.b], i * 3);
    }
    this.sparks.geometry.attributes.aColor.needsUpdate = true;
  }

  // features: audio features; pointer: {x,y} in -1..1; scrollY in px
  update(dt, f, pointer, scrollY) {
    if (this.reduced && this._renderedOnce) return;
    this.time += dt;
    const t = this.time;

    // camera: gentle pointer parallax + travel through the dust as the page scrolls
    const targetY = -scrollY * 0.0035;
    this.camY += (targetY - this.camY) * (1 - Math.exp(-dt * 6));
    const cx = pointer.x * 0.7, cy = this.camY + pointer.y * -0.45;
    this.camera.position.x += (cx - this.camera.position.x) * (1 - Math.exp(-dt * 2.5));
    this.camera.position.y += (cy - this.camera.position.y) * (1 - Math.exp(-dt * 2.5));
    this.look.set(0, this.camY, 0);
    this.camera.lookAt(this.look);

    const beat = f.beat, level = f.level;
    const u = this.dustU;
    u.uTime.value = t;
    u.uBeat.value = beat;
    u.uLevel.value = level;
    u.uBass.value = f.bass;
    u.uCamY.value = this.camY;

    // "pulsing lights" — subtle
    this.key.intensity = 1.6 + beat * 1.1 + level * 0.4;
    this.rim.intensity = 14 + beat * 30 + f.mid * 10;

    // petals
    const o = this._o;
    const H = 18;
    for (let i = 0; i < this.petals.count; i++) {
      const p = this.petalState[i];
      p.y -= p.vy * dt * (1 + f.level * 0.6);
      if (p.y < this.camY - H / 2) { p.y += H; p.x = rand(-9, 9); }
      if (p.y > this.camY + H / 2) p.y -= H;
      p.rx += p.wx * dt; p.ry += p.wy * dt; p.rz += p.wz * dt;
      o.position.set(p.x + Math.sin(t * p.sp + p.ph) * p.sway, p.y, p.z);
      o.rotation.set(p.rx, p.ry, p.rz + Math.sin(t * p.sp + p.ph) * 0.6);
      o.scale.setScalar(p.s * (1 + beat * 0.08));
      o.updateMatrix();
      this.petals.setMatrixAt(i, o.matrix);
    }
    this.petals.instanceMatrix.needsUpdate = true;

    // Higgsfield roses — slow, heavy drift (fade/scale in once loaded)
    if (this.roses) {
      this.roseIn = Math.min(1, this.roseIn + dt * 0.5);
      for (const r of this.roses) {
        if (!r.obj.visible) continue;
        r.y -= r.vy * dt;
        if (r.y < this.camY - 9) { r.y += 18; r.x = r.side(); }
        if (r.y > this.camY + 9) r.y -= 18;
        r.rx += r.wx * dt; r.ry += r.wy * dt;
        r.obj.position.set(r.x + Math.sin(t * 0.4 + r.ph) * r.sway, r.y, r.z);
        r.obj.rotation.set(r.rx, r.ry, Math.sin(t * 0.3 + r.ph) * 0.3);
        r.obj.scale.setScalar(r.s * this.roseIn * (1 + beat * 0.05));
      }
    }

    // hearts — pop outward, then drift up on a buoyant wobble and shrink away
    let anyHeart = false;
    for (let i = 0; i < this.heartState.length; i++) {
      const h = this.heartState[i];
      if (!h.alive) continue;
      anyHeart = true;
      h.age += dt;
      const k = h.age / h.life;
      if (k >= 1) {
        h.alive = false;
        o.scale.setScalar(0);
        o.updateMatrix();
        this.hearts.setMatrixAt(i, o.matrix);
        continue;
      }
      const damp = Math.exp(-dt * 2.4);
      h.v.multiplyScalar(damp);
      h.v.y += 1.1 * dt; // buoyancy
      h.v.x += Math.sin(t * 2.2 + h.ph) * 0.9 * dt;
      h.p.addScaledVector(h.v, dt);
      h.r.addScaledVector(h.w, dt);
      h.w.multiplyScalar(Math.exp(-dt * 0.8));
      const grow = k < 0.12 ? easeOutBack(k / 0.12) : 1;
      const fade = k > 0.72 ? 1 - (k - 0.72) / 0.28 : 1;
      o.position.copy(h.p);
      o.rotation.set(h.r.x, h.r.y + Math.sin(t * 1.5 + h.ph) * 0.4, h.r.z);
      o.scale.setScalar(Math.max(0.0001, h.s * grow * fade * (1 + beat * 0.12)));
      o.updateMatrix();
      this.hearts.setMatrixAt(i, o.matrix);
    }
    if (anyHeart) this.hearts.instanceMatrix.needsUpdate = true;
    this.hearts.visible = anyHeart; // skip the whole pool when no hearts are alive

    // sparks
    let anySpark = false;
    for (let i = 0; i < this.sparkN; i++) {
      const s = this.sparkState[i];
      if (!s.alive) continue;
      anySpark = true;
      s.age += dt;
      const k = s.age / s.life;
      if (k >= 1) { s.alive = false; this.sparkAlpha[i] = 0; continue; }
      s.v.multiplyScalar(Math.exp(-dt * 3.2));
      s.v.y -= 0.6 * dt;
      this.sparkPos[i * 3] += s.v.x * dt;
      this.sparkPos[i * 3 + 1] += s.v.y * dt;
      this.sparkPos[i * 3 + 2] += s.v.z * dt;
      this.sparkAlpha[i] = (1 - k) * (0.6 + 0.4 * Math.sin(s.age * 30 + i));
      this.sparkSize[i] = s.s * (1 - k * 0.5);
    }
    this.sparks.visible = anySpark;
    if (anySpark) {
      const a = this.sparks.geometry.attributes;
      a.position.needsUpdate = a.aAlpha.needsUpdate = a.aSize.needsUpdate = true;
    }

    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
    this._renderedOnce = true;
  }

  // Applied by the app-wide quality manager (see quality.js).
  setQuality(q) {
    this.q = q;
    this.dpr = Math.min(window.devicePixelRatio || 1, q.worldDpr);
    this.renderer.setPixelRatio(this.dpr);
    this.dustU.uPixel.value = this.dpr;
    this.sparkU.uPixel.value = this.dpr;
    this.dust.geometry.setDrawRange(0, Math.floor(this.dustCount * q.dust));
    this.petals.count = Math.max(4, Math.floor(this.petalState.length * q.petals));
    if (this.roses) {
      const keep = Math.min(this.roses.length, q.roses);
      this.roses.forEach((r, i) => { r.obj.visible = i < keep; });
    }
    this.resize();
  }
}

function easeOutBack(x) {
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}
