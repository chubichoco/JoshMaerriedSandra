// Higgsfield-generated 3D models (GLB), each drawn into a small canvas inside its
// page "slot" via the shared off-screen Stage. Until a model has loaded (or if it
// fails), the slot keeps its original 2D artwork.
import { Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, Group, Box3, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { watchBox } from "./stage.js";

let sharedLoader = null;
export function gltfLoader() {
  if (!sharedLoader) {
    sharedLoader = new GLTFLoader();
    sharedLoader.setMeshoptDecoder(MeshoptDecoder);
  }
  return sharedLoader;
}

// Centre a model on the origin and scale its largest dimension to `size`.
export function normalize(obj, size = 1) {
  const box = new Box3().setFromObject(obj);
  const dim = box.getSize(new Vector3());
  const c = box.getCenter(new Vector3());
  const s = size / Math.max(dim.x, dim.y, dim.z || 1e-6);
  obj.position.sub(c.multiplyScalar(s));
  obj.scale.setScalar(s);
  const g = new Group();
  g.add(obj);
  return g;
}

// Per-model staging. Tripo exports these facing +X, so `yaw` turns the front to the camera.
const PRESETS = {
  heart: { fit: 1.0, dist: 2.05, fov: 30, yaw: -Math.PI / 2, spin: 0, sway: 0.38, swaySpeed: 0.9, tilt: 0.12, float: 0.03, pulse: 0.07, rotX: 0.05, env: 0.55 },
  rings: { fit: 1.0, dist: 2.3, fov: 30, yaw: -Math.PI / 2, spin: 0.45, sway: 0, tilt: 0.18, float: 0.04, pulse: 0.03, rotX: 0.12, env: 1 },
  floral: { fit: 1.0, dist: 2.0, fov: 30, yaw: -Math.PI / 2, spin: 0, sway: 0.42, swaySpeed: 0.35, tilt: 0.1, float: 0.025, pulse: 0.02, rotX: 0.18, env: 0.8 },
};

export class ModelViews {
  constructor(stage, { reduced = false } = {}) {
    this.stage = stage;
    this.reduced = reduced;
    this.views = [];
    this.time = 0;
  }

  add(slot, url, name) {
    const p = PRESETS[name] || PRESETS.heart;
    const scene = new Scene();
    scene.environment = this.stage.env;
    scene.environmentIntensity = p.env ?? 0.9;
    scene.add(new HemisphereLight(0xfff6ee, 0xe6c3be, 0.9));
    const key = new DirectionalLight(0xfff1e0, 1.8);
    key.position.set(2, 3, 4);
    scene.add(key);
    const camera = new PerspectiveCamera(p.fov, 1, 0.05, 50);
    camera.position.set(0, 0, p.dist);
    const canvas = document.createElement("canvas");
    canvas.className = "model-canvas";
    canvas.setAttribute("aria-hidden", "true");
    slot.appendChild(canvas);
    const view = { slot, canvas, scene, camera, key, p, model: null, phase: Math.random() * 6.28, spin: 0, hover: 0, box: watchBox(slot) };
    this.views.push(view);
    slot.addEventListener("pointerenter", () => { view.hover = 1; });
    slot.addEventListener("pointerleave", () => { view.hover = 0; });

    return new Promise((resolve) => {
      gltfLoader().load(url, (gltf) => {
        const obj = normalize(gltf.scene, p.fit);
        view.model = obj;
        scene.add(obj);
        slot.classList.add("has-model");
        resolve(true);
      }, undefined, () => resolve(false)); // missing/failed → keep the 2D artwork
    });
  }

  update(dt, f, pointer) {
    this.time += dt;
    const t = this.time;
    for (const v of this.views) {
      if (!v.model || !v.box.visible || v.box.w < 2 || v.box.h < 2) continue;
      const p = v.p, m = v.model;
      if (!this.reduced) {
        v.spin += dt * (p.spin + (p.spin ? v.hover * 0.8 : 0));
        const sway = Math.sin(t * (p.swaySpeed || 0.6) + v.phase) * p.sway;
        m.rotation.set(p.rotX + pointer.y * p.tilt, (p.yaw || 0) + v.spin + sway + pointer.x * p.tilt * 2, Math.sin(t * 0.5 + v.phase) * 0.04);
        m.position.y = Math.sin(t * 1.1 + v.phase) * p.float;
        m.scale.setScalar(1 + f.beat * p.pulse + v.hover * 0.05);
      } else {
        m.rotation.set(p.rotX, p.yaw || 0, 0);
      }
      v.key.intensity = 1.6 + f.beat * 1.4 + f.level * 0.4;
      this.stage.draw(v.canvas, v.scene, v.camera, v.box.w, v.box.h);
    }
  }
}

export function loadModel(url, size = 1) {
  return new Promise((resolve) => {
    gltfLoader().load(url, (g) => resolve(normalize(g.scene, size)), undefined, () => resolve(null));
  });
}
