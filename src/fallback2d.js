// Canvas2D stand-in for devices without WebGL2: same API as World3D, drawn with
// pre-rendered sprites so it stays cheap on old phones.
const DUST = ["#c9a15f", "#d8bf8f", "#e2b4ae", "#c98a93", "#b76e79"];
const HEARTS = ["#8d0f2c", "#6e2a35", "#b76e79", "#d9a9a4", "#c9a15f"];
const PETALS = ["#e8c3be", "#d9a9a4", "#f3e3dc", "#c98a93"];
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (a) => a[(Math.random() * a.length) | 0];

function dotSprite(color) {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, "#fffaf0");
  grd.addColorStop(0.18, color);
  grd.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  return c;
}

function heartPath(g, s) {
  g.beginPath();
  g.moveTo(0, s * 0.35);
  g.bezierCurveTo(-s * 0.1, s * 0.25, -s * 0.5, 0, -s * 0.5, -s * 0.22);
  g.bezierCurveTo(-s * 0.5, -s * 0.48, -s * 0.12, -s * 0.55, 0, -s * 0.28);
  g.bezierCurveTo(s * 0.12, -s * 0.55, s * 0.5, -s * 0.48, s * 0.5, -s * 0.22);
  g.bezierCurveTo(s * 0.5, 0, s * 0.1, s * 0.25, 0, s * 0.35);
  g.closePath();
}

export class World2D {
  constructor(canvas, { reduced = false, mobile = false } = {}) {
    this.canvas = canvas;
    this.g = canvas.getContext("2d");
    this.reduced = reduced;
    this.sprites = DUST.map(dotSprite);
    this.dust = Array.from({ length: mobile ? 70 : 120 }, () => ({
      x: Math.random(), y: Math.random(), z: rand(0.3, 1), s: rand(4, 16), sp: rand(0.008, 0.03), ph: rand(0, 6.28), i: (Math.random() * DUST.length) | 0,
    }));
    this.petals = Array.from({ length: mobile ? 10 : 16 }, () => ({
      x: Math.random(), y: Math.random(), s: rand(8, 16), sp: rand(0.02, 0.05), rot: rand(0, 6.28), w: rand(-1, 1), ph: rand(0, 6.28), c: pick(PETALS),
    }));
    this.hearts = [];
    this.sparks = [];
    this.time = 0;
    this.scrollY = 0;
    this.resize();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w * dpr;
    this.canvas.height = this.h * dpr;
    this.g.setTransform(dpr, 0, 0, dpr, 0, 0);
    this._drawn = false;
  }

  burst(x, y, { count = 14, power = 1, sparks = 20 } = {}) {
    if (this.reduced) return;
    for (let i = 0; i < count; i++) {
      const a = rand(0, Math.PI * 2), sp = rand(120, 320) * power;
      this.hearts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.8 - 120 * power, s: rand(14, 30), rot: rand(-0.5, 0.5), w: rand(-3, 3), age: 0, life: rand(2, 3.2), c: pick(HEARTS), ph: rand(0, 6.28) });
    }
    for (let i = 0; i < sparks; i++) {
      const a = rand(0, Math.PI * 2), sp = rand(80, 380) * power;
      this.sparks.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, age: 0, life: rand(0.6, 1.3), s: rand(6, 14), i: (Math.random() * 2) | 0 });
    }
    if (this.hearts.length > 120) this.hearts.splice(0, this.hearts.length - 120);
    if (this.sparks.length > 200) this.sparks.splice(0, this.sparks.length - 200);
  }

  update(dt, f, pointer, scrollY) {
    if (this.reduced && this._drawn) return;
    this.time += dt;
    const g = this.g, w = this.w, h = this.h, t = this.time;
    const dScroll = (scrollY - this.scrollY) / h;
    this.scrollY = scrollY;
    g.clearRect(0, 0, w, h);

    for (const d of this.dust) {
      d.y -= (d.sp * dt + dScroll * 0.35) * d.z;
      if (d.y < -0.05) d.y += 1.1;
      if (d.y > 1.05) d.y -= 1.1;
      const tw = 0.5 + 0.5 * Math.sin(t * 1.4 + d.ph);
      const s = d.s * d.z * (1 + f.bass * 0.8 + f.beat * 0.6);
      g.globalAlpha = (0.35 + tw * 0.4) * (0.7 + f.level * 0.3);
      g.drawImage(this.sprites[d.i], (d.x + pointer.x * 0.02 * d.z) * w - s / 2, d.y * h - s / 2, s, s);
    }

    for (const p of this.petals) {
      p.y += p.sp * dt;
      if (p.y > 1.05) { p.y = -0.05; p.x = Math.random(); }
      p.rot += p.w * dt;
      const x = (p.x + Math.sin(t * 0.6 + p.ph) * 0.03) * w, y = p.y * h;
      g.save();
      g.translate(x, y);
      g.rotate(p.rot);
      g.scale(1, Math.abs(Math.sin(t * 0.8 + p.ph)) * 0.6 + 0.4);
      g.globalAlpha = 0.75;
      g.fillStyle = p.c;
      g.beginPath();
      g.ellipse(0, 0, p.s * 0.45, p.s, 0, 0, Math.PI * 2);
      g.fill();
      g.restore();
    }

    g.globalAlpha = 1;
    this.hearts = this.hearts.filter((hh) => (hh.age += dt) < hh.life);
    for (const hh of this.hearts) {
      const k = hh.age / hh.life;
      const damp = Math.exp(-dt * 2.4);
      hh.vx = hh.vx * damp + Math.sin(t * 2 + hh.ph) * 40 * dt;
      hh.vy = hh.vy * damp - 90 * dt;
      hh.x += hh.vx * dt;
      hh.y += hh.vy * dt;
      hh.rot += hh.w * dt * 0.3;
      const grow = Math.min(1, k / 0.12);
      const fade = k > 0.7 ? 1 - (k - 0.7) / 0.3 : 1;
      g.save();
      g.translate(hh.x, hh.y);
      g.rotate(hh.rot);
      g.globalAlpha = fade;
      const s = hh.s * grow * (1 + f.beat * 0.1);
      heartPath(g, s);
      const grd = g.createLinearGradient(-s / 2, -s / 2, s / 2, s / 2);
      grd.addColorStop(0, "#ffffff");
      grd.addColorStop(0.25, hh.c);
      grd.addColorStop(1, hh.c);
      g.fillStyle = grd;
      g.fill();
      g.restore();
    }

    this.sparks = this.sparks.filter((s) => (s.age += dt) < s.life);
    for (const s of this.sparks) {
      const k = s.age / s.life;
      s.vx *= Math.exp(-dt * 3); s.vy = s.vy * Math.exp(-dt * 3) + 40 * dt;
      s.x += s.vx * dt; s.y += s.vy * dt;
      g.globalAlpha = 1 - k;
      const sz = s.s * (1 - k * 0.5);
      g.drawImage(this.sprites[s.i], s.x - sz / 2, s.y - sz / 2, sz, sz);
    }
    g.globalAlpha = 1;
    this._drawn = true;
  }
}
