// A Thousand Years with Josh — immersive edition
// Orchestrates the envelope reveal, invitation, 3D world, gallery, audio player
// and one shared animation loop.
import { AudioEngine } from "./audio.js";
import { World2D } from "./fallback2d.js";
import { QualityManager } from "./quality.js";

const PHOTOS = ["assets/img/wed-1.webp", "assets/img/wed-2.webp", "assets/img/wed-3.webp"];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const params = new URLSearchParams(location.search);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches || params.has("reduced");
const mobile = matchMedia("(pointer: coarse)").matches || Math.min(screen.width, screen.height) < 600;

function hasWebGL2() {
  if (params.get("render") === "2d") return false;
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGL2RenderingContext && c.getContext("webgl2"));
  } catch (e) { return false; }
}

const body = document.body;
const envelope = $("#envelope");
const video = $(".envelope-video");
const invite = $("#invite");
const letter = $("#rsvp-letter");
const disc = $("#song-disc");
const discRecord = $(".disc-record");
const player = $("#player");
const playBtn = $("#player-play");
const muteBtn = $("#player-mute");
const volume = $("#player-volume");
const progressBar = $("#player-progress-bar");
const audio = new AudioEngine($("#song"));

// ---------------------------------------------------------------- world + quality
const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
let world = null;
let webgl = hasWebGL2();
let stage = null; // shared off-screen renderer for the 3D models + photo ring
const quality = new QualityManager({
  mobile,
  onChange: (tier) => {
    world && world.setQuality && world.setQuality(tier);
    stage && stage.setDpr(Math.min(window.devicePixelRatio || 1, tier.stageDpr));
  },
});
async function getStage() {
  if (!stage) {
    const { Stage } = await import("./stage.js");
    stage = new Stage({ dpr: Math.min(window.devicePixelRatio || 1, quality.tier.stageDpr) });
  }
  return stage;
}

async function createWorld() {
  const canvas = $("#world");
  if (webgl) {
    try {
      const { World3D } = await import("./world3d.js");
      world = new World3D(canvas, { reduced, mobile, quality: quality.tier });
      document.documentElement.classList.add("webgl");
      return;
    } catch (e) {
      console.warn("WebGL world unavailable, using 2D fallback", e);
      webgl = false;
      // a failed WebGL context can't be reused for 2D: swap in a fresh canvas
      const fresh = canvas.cloneNode();
      canvas.replaceWith(fresh);
    }
  }
  world = new World2D($("#world"), { reduced, mobile });
  document.documentElement.classList.add("no-webgl");
}

function burstAt(x, y, opts) { world && world.burst(x, y, opts); }
function burstFrom(el, opts) {
  const r = el.getBoundingClientRect();
  burstAt(r.left + r.width / 2, r.top + r.height / 2, opts);
}

// ---------------------------------------------------------------- routing
let opening = false;
const timers = [];
const later = (fn, ms) => timers.push(setTimeout(fn, ms));
const clearTimers = () => { while (timers.length) clearTimeout(timers.pop()); };

function route() {
  let h = location.hash;
  if (h === "#page-2") h = "#details"; // the original site's details page
  if (h === "#page-1" || h === "#invite") showInvite();
  else if (h === "" || h === "#" || h === "#page-0") showIntro();
  else {
    // an in-page anchor (e.g. #the-day): open the invitation, then scroll to it
    const el = document.querySelector(h.replace(/[^#\w-]/g, ""));
    if (!body.classList.contains("is-open")) showInvite();
    if (el) setTimeout(() => el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" }), 60);
  }
}

function showIntro() {
  clearTimers();
  opening = false;
  body.classList.remove("is-open", "is-leaving");
  body.classList.add("is-sealed");
  envelope.classList.remove("is-opening", "is-playing", "is-zooming");
  invite.classList.remove("is-entered");
  unflipLetter();
  try { video.pause(); video.currentTime = 0; } catch (e) {}
  window.scrollTo(0, 0);
}

function showInvite() {
  clearTimers();
  opening = false;
  body.classList.remove("is-sealed", "is-leaving");
  body.classList.add("is-open");
  window.scrollTo(0, 0);
  invite.classList.remove("is-entered");
  void invite.offsetWidth; // restart entrance choreography
  invite.classList.add("is-entered");
  invite.focus({ preventScroll: true });
  player.classList.add("is-visible");
  later(() => flipLetter(), reduced ? 600 : 4200);
  initGalleryWhenNear();
  initModels();
}

function openEnvelope() {
  if (opening) return;
  opening = true;
  quality.pause(3.5);
  audio.play();
  burstFrom(envelope, { count: 34, power: 1.35, sparks: 60 });
  if (reduced) { location.hash = "page-1"; return; }
  envelope.classList.add("is-opening");
  later(() => {
    envelope.classList.add("is-playing");
    try { video.currentTime = 0; video.play().catch(() => {}); } catch (e) {}
  }, 260);
  later(() => { envelope.classList.add("is-zooming"); body.classList.add("is-leaving"); }, 1650);
  later(() => { location.hash = "page-1"; }, 2350);
}

envelope.addEventListener("click", openEnvelope);
$("#go-back").addEventListener("click", () => { location.hash = "page-0"; });
window.addEventListener("hashchange", route);

// ---------------------------------------------------------------- envelope tilt
const tilt = $(".envelope-tilt");
function tiltTo(nx, ny) {
  tilt.style.setProperty("--ry", (nx * 12).toFixed(2) + "deg");
  tilt.style.setProperty("--rx", (-ny * 10).toFixed(2) + "deg");
  tilt.style.setProperty("--mx", (50 + nx * 40).toFixed(1) + "%");
  tilt.style.setProperty("--my", (40 + ny * 40).toFixed(1) + "%");
}
if (!reduced) {
  $("#intro").addEventListener("pointermove", (e) => {
    const r = envelope.getBoundingClientRect();
    const nx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width * 0.8)));
    const ny = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height * 1.2)));
    tiltTo(nx, ny);
  });
  $("#intro").addEventListener("pointerleave", () => tiltTo(0, 0));
}

// ---------------------------------------------------------------- pointer / gyro parallax
window.addEventListener("pointermove", (e) => {
  pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
  pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
}, { passive: true });
// Android & desktop-with-sensors: device tilt drives the same parallax (no permission prompt)
window.addEventListener("deviceorientation", (e) => {
  if (e.gamma == null) return;
  pointer.tx = Math.max(-1, Math.min(1, e.gamma / 30));
  pointer.ty = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
  if (body.classList.contains("is-sealed")) tiltTo(pointer.tx * 0.6, pointer.ty * 0.6);
}, { passive: true });

const layers = $$(".c-layer[data-depth]").map((el) => ({ el, d: parseFloat(el.dataset.depth), x: 0, y: 0 }));
let heroVisible = true;
new IntersectionObserver((en) => { heroVisible = en[0].isIntersecting; }).observe($("#collage"));
function updateParallax() {
  for (const l of layers) {
    const x = pointer.x * l.d * 12, y = pointer.y * l.d * 9;
    if (Math.abs(x - l.x) < 0.05 && Math.abs(y - l.y) < 0.05) continue; // settled: no style write
    l.x = x; l.y = y;
    l.el.style.translate = `${x.toFixed(2)}px ${y.toFixed(2)}px`;
  }
}

// ---------------------------------------------------------------- RSVP letter
// The letter only becomes a real link once it has flipped to its back face,
// so an early tap flips it instead of leaving the page.
const RSVP = letter.dataset.rsvpHref;
function flipLetter() {
  letter.classList.add("is-flipped");
  letter.href = RSVP;
  letter.target = "_blank";
  letter.rel = "noopener";
  letter.removeAttribute("role");
  letter.setAttribute("aria-label", "RSVP — click here if you can make it");
}
function unflipLetter() {
  letter.classList.remove("is-flipped");
  letter.removeAttribute("href");
  letter.setAttribute("role", "button");
  letter.setAttribute("aria-label", "A date to remember. Tap to RSVP");
}
letter.addEventListener("click", (e) => {
  if (!letter.classList.contains("is-flipped")) { e.preventDefault(); flipLetter(); return; }
  burstFrom(letter, { count: 18, power: 1.1 });
});
letter.addEventListener("keydown", (e) => {
  if (e.key === " " || (e.key === "Enter" && !letter.hasAttribute("href"))) { e.preventDefault(); letter.click(); }
});
$("#rsvp-btn").addEventListener("click", (e) => burstFrom(e.currentTarget, { count: 22, power: 1.2 }));

// ---------------------------------------------------------------- audio UI
disc.addEventListener("click", () => audio.toggle());
playBtn.addEventListener("click", () => audio.toggle());
muteBtn.addEventListener("click", () => audio.toggleMute());
function setFill() { volume.style.setProperty("--fill", volume.value + "%"); }
volume.addEventListener("input", () => { audio.setVolume(volume.value / 100); setFill(); });
setFill();

function syncAudioUI() {
  const on = audio.playing;
  player.classList.toggle("is-playing", on);
  disc.classList.toggle("is-playing", on);
  playBtn.setAttribute("aria-pressed", String(on));
  playBtn.setAttribute("aria-label", on ? "Pause our song" : "Play our song");
  disc.setAttribute("aria-pressed", String(on));
  disc.setAttribute("aria-label", on ? "Pause our song" : "Play our song");
  muteBtn.setAttribute("aria-pressed", String(audio.muted || audio.volume === 0));
  muteBtn.setAttribute("aria-label", audio.muted ? "Unmute" : "Mute");
  volume.value = String(Math.round((audio.muted ? 0 : audio.volume) * 100));
  setFill();
}
audio.onChange(syncAudioUI);
syncAudioUI();

// keyboard: "k" or space (when not on a control) toggles playback, "m" mutes
document.addEventListener("keydown", (e) => {
  if (!body.classList.contains("is-open") || e.metaKey || e.ctrlKey || e.altKey) return;
  const onControl = e.target.closest && e.target.closest("button, a, input, [role=button]");
  if (e.key === "k" || (e.key === " " && !onControl)) { e.preventDefault(); audio.toggle(); }
  if (e.key === "m") audio.toggleMute();
});

// ---------------------------------------------------------------- tap anywhere → hearts
document.addEventListener("click", (e) => {
  if (!e.isTrusted || e.detail === 0) return; // ignore keyboard-activated clicks
  if (e.target.closest("#envelope, #gallery-canvas, #rsvp-letter, #rsvp-btn, .player, .c-details, .gift-card, .palette-thumb, .lightbox")) return;
  burstAt(e.clientX, e.clientY, { count: 10, power: 0.85, sparks: 18 });
});


// ---------------------------------------------------------------- the day: times, venues, calendar
const daySection = $("#the-day");
const DAY = daySection.dataset.date;          // "2027-04-10"
const TZ = daySection.dataset.tz || "+08:00"; // Philippine time
const events = $$(".event", daySection).map((el) => {
  const time = (el.dataset.time || "").trim(); // "15:00" or ""
  const start = time ? new Date(`${DAY}T${time.padStart(5, "0")}:00${TZ}`) : null;
  return { el, kind: el.dataset.kind, time, start, minutes: parseInt(el.dataset.duration || "120", 10) };
});
function fmtTime(d) {
  // show the time as it is in Iloilo, whatever the guest's own time zone
  return d.toLocaleTimeString("en-PH", { hour: "numeric", minute: "2-digit", timeZone: "Asia/Manila" });
}
for (const ev of events) {
  const out = $(".event-time-value", ev.el);
  if (ev.start && !isNaN(ev.start)) {
    out.textContent = fmtTime(ev.start);
    out.setAttribute("datetime", ev.start.toISOString());
  } else {
    ev.el.classList.add("is-tbc");
    out.textContent = "Time to follow";
    out.setAttribute("datetime", DAY);
  }
}
const firstTimed = events.find((e) => e.start && !isNaN(e.start));
// Count down to the ceremony when its time is known, otherwise to the start of the day in Iloilo.
const WEDDING_DATE = firstTimed ? firstTimed.start : new Date(`${DAY}T00:00:00${TZ}`);

function icsStamp(d) { return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""); }
(function buildCalendarLinks() {
  const ceremony = events.find((e) => e.kind === "ceremony");
  const reception = events.find((e) => e.kind === "reception");
  const title = "Josh & Sandra's Wedding";
  const place = "St Clements Church, Iloilo City";
  const details = [
    "Ceremony: St Clements Church, Iloilo City" + (ceremony && ceremony.start ? " at " + fmtTime(ceremony.start) : ""),
    "Reception: Sam's 21 Hotel, Benigno Aquino Avenue (Diversion Road), Mandurriao, Iloilo City" + (reception && reception.start ? " at " + fmtTime(reception.start) : ""),
    "RSVP: " + letter.dataset.rsvpHref,
  ].join("\n");
  let dates, icsTimes;
  if (firstTimed) {
    const last = [...events].filter((e) => e.start).sort((a, b) => b.start - a.start)[0];
    const end = new Date(last.start.getTime() + last.minutes * 60000);
    dates = `${icsStamp(firstTimed.start)}/${icsStamp(end)}`;
    icsTimes = [`DTSTART:${icsStamp(firstTimed.start)}`, `DTEND:${icsStamp(end)}`];
  } else {
    const d0 = DAY.replace(/-/g, "");
    const next = new Date(`${DAY}T12:00:00Z`); next.setUTCDate(next.getUTCDate() + 1);
    const d1 = next.toISOString().slice(0, 10).replace(/-/g, "");
    dates = `${d0}/${d1}`;
    icsTimes = [`DTSTART;VALUE=DATE:${d0}`, `DTEND;VALUE=DATE:${d1}`];
  }
  const g = new URL("https://calendar.google.com/calendar/render");
  g.searchParams.set("action", "TEMPLATE");
  g.searchParams.set("text", title);
  g.searchParams.set("dates", dates);
  g.searchParams.set("location", place);
  g.searchParams.set("details", details);
  $("#cal-google").href = g.toString();
  const esc = (x) => x.replace(/([,;\\])/g, "\\$1").replace(/\n/g, "\\n");
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Josh & Sandra//Wedding//EN", "BEGIN:VEVENT",
    `UID:josh-sandra-${DAY}@athousandyears`, `DTSTAMP:${icsStamp(new Date())}`, ...icsTimes,
    `SUMMARY:${esc(title)}`, `LOCATION:${esc(place)}`, `DESCRIPTION:${esc(details)}`,
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
  $("#cal-ics").href = "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
})();


// ---------------------------------------------------------------- the details: timeline, gifts, dress code, contact
const timelineWrap = $("#timeline");
const tlItems = $$(".tl-item", timelineWrap).map((el) => ({ el, top: 0, h: 0 }));
const tlFill = $(".tl-fill", timelineWrap);
(function fillTimeline() {
  let anyTime = false;
  for (const { el } of tlItems) {
    let start = null;
    const own = (el.dataset.time || "").trim();
    if (own) start = new Date(`${DAY}T${own.padStart(5, "0")}:00${TZ}`);
    else if (el.dataset.from) { const ev = events.find((e) => e.kind === el.dataset.from); start = ev && ev.start; }
    const out = $(".tl-time", el);
    if (start && !isNaN(start)) {
      anyTime = true;
      out.textContent = fmtTime(start);
      out.setAttribute("datetime", start.toISOString());
    } else {
      out.textContent = "To follow";
    }
  }
  // with no times set yet, one "Times to follow" note replaces six repeated labels
  if (!anyTime) $$(".tl-time", timelineWrap).forEach((el) => { el.hidden = true; });
  timelineWrap.classList.toggle("has-times", anyTime);
  $("#tl-note").hidden = anyTime;
})();
// cache item positions (read once per resize, never per frame)
function measureTimeline() {
  for (const it of tlItems) { it.top = it.el.offsetTop; it.h = it.el.offsetHeight; }
}
new ResizeObserver(measureTimeline).observe(timelineWrap);
let timelineVisible = false, tlLast = -1;
new IntersectionObserver((en) => { timelineVisible = en[0].isIntersecting; }, { rootMargin: "100px" }).observe(timelineWrap);
function updateTimeline() {
  // the gold line draws down to the middle of the screen as the guest scrolls
  const r = timelineWrap.getBoundingClientRect();
  const reach = reduced ? r.height : Math.min(r.height, Math.max(0, window.innerHeight * 0.62 - r.top));
  const k = r.height ? reach / r.height : 0;
  if (Math.abs(k - tlLast) < 0.002) return;
  tlLast = k;
  tlFill.style.transform = `scaleY(${k.toFixed(4)})`;
  let current = -1;
  tlItems.forEach((it, i) => {
    const lit = it.top + it.h / 2 <= reach + 4;
    if (lit) current = i;
    it.el.classList.toggle("is-lit", lit);
  });
  tlItems.forEach((it, i) => it.el.classList.toggle("is-current", i === current && !reduced));
}

// dress code: palette guide opens full size in a dialog (Esc / backdrop / × closes it)
const dressNote = $("#dress-note");
if (!dressNote.textContent.trim()) { dressNote.textContent = "Details to follow"; dressNote.classList.add("is-tbc"); }
const paletteDialog = $("#palette-dialog"), paletteOpen = $("#palette-open");
if (paletteDialog && paletteOpen) {
  paletteOpen.addEventListener("click", () => {
    if (typeof paletteDialog.showModal === "function") paletteDialog.showModal();
    else window.open(paletteDialog.querySelector("img").src, "_blank", "noopener");
  });
  $("#palette-close").addEventListener("click", () => paletteDialog.close());
  paletteDialog.addEventListener("click", (e) => { if (e.target === paletteDialog) paletteDialog.close(); });
  paletteDialog.addEventListener("close", () => paletteOpen.focus({ preventScroll: true }));
}

// gifts: flip to reveal the QR code
const gift = $("#gift"), giftCard = $("#gift-card"), qrImg = $("#gift-qr-img"), qrEmpty = $("#gift-qr-empty");
if (gift.dataset.qr) {
  qrImg.onload = () => { qrImg.hidden = false; qrEmpty.hidden = true; };
  qrImg.src = gift.dataset.qr;
}
giftCard.addEventListener("click", () => {
  const open = giftCard.getAttribute("aria-pressed") !== "true";
  giftCard.setAttribute("aria-pressed", String(open));
  giftCard.setAttribute("aria-label", open ? "Gifts: QR code shown, tap to flip back" : "Gifts: tap to show the QR code");
  if (open) burstFrom(giftCard, { count: 14, power: 0.9 });
});

// contact: copy the email address
const email = $("#contact-email"), copyStatus = $("#copy-status");
$("#copy-email").addEventListener("click", async () => {
  const text = email.textContent.trim();
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Email copied";
  } catch (e) {
    const range = document.createRange();
    range.selectNodeContents(email);
    const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range);
    copyStatus.textContent = "Selected — press Ctrl+C (⌘C on Mac) to copy";
  }
  clearTimeout(copyStatus._t);
  copyStatus._t = setTimeout(() => { copyStatus.textContent = ""; }, 3000);
});

// ---------------------------------------------------------------- countdown
const cd = { days: $("#cd-days"), hours: $("#cd-hours"), mins: $("#cd-mins"), secs: $("#cd-secs") };
const cdSR = $("#cd-sr");
let lastMinute = -1;
function timeParts(target, now) {
  const diff = Math.max(0, target.getTime() - now.getTime());
  const s = Math.floor(diff / 1000);
  return { days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), mins: Math.floor((s % 3600) / 60), secs: s % 60 };
}
const pad = (n, l = 2) => String(n).padStart(l, "0");
function renderCountdown() {
  const p = timeParts(WEDDING_DATE, new Date());
  const vals = { days: pad(p.days, p.days >= 100 ? 3 : 2), hours: pad(p.hours), mins: pad(p.mins), secs: pad(p.secs) };
  for (const k in vals) {
    const el = cd[k];
    if (el.textContent !== vals[k]) {
      el.textContent = vals[k];
      if (!reduced) { el.classList.remove("tick"); void el.offsetWidth; el.classList.add("tick"); }
    }
  }
  if (p.mins !== lastMinute) {
    lastMinute = p.mins;
    cdSR.textContent = `${p.days} days, ${p.hours} hours and ${p.mins} minutes to go.`;
  }
}
renderCountdown();
setInterval(renderCountdown, 1000);

// ---------------------------------------------------------------- scroll reveal
const io = new IntersectionObserver((entries) => {
  for (const en of entries) if (en.isIntersecting) { en.target.classList.add("in-view"); io.unobserve(en.target); }
}, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
$$("[data-reveal]").forEach((el) => io.observe(el));

// ---------------------------------------------------------------- gallery
let gallery = null, galleryVisible = false, galleryInit = false;
const galleryWrap = $("#gallery");
function initGalleryWhenNear() {
  if (galleryInit) return;
  galleryInit = true;
  const near = new IntersectionObserver(async (entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    near.disconnect();
    if (webgl) {
      try {
        const { Gallery3D } = await import("./gallery3d.js");
        gallery = new Gallery3D($("#gallery-canvas"), PHOTOS, await getStage(), {
          reduced,
          onTap: (x, y) => burstAt(x, y, { count: 12, power: 0.9 }),
        });
        galleryWrap.classList.add("is-webgl");
        gallery.resize();
      } catch (e) { console.warn("3D gallery unavailable, using fallback", e); }
    }
  }, { rootMargin: "600px 0px" });
  near.observe(galleryWrap);
  new IntersectionObserver((entries) => { galleryVisible = entries[0].isIntersecting; if (gallery && !galleryVisible) gallery._lastT = 0; }).observe(galleryWrap);
}
const fallbackList = $("#gallery-fallback");
function stepFallback(dir) {
  const card = fallbackList.querySelector("li");
  if (card) fallbackList.scrollBy({ left: dir * (card.offsetWidth + 22), behavior: reduced ? "auto" : "smooth" });
}
$("#g-prev").addEventListener("click", () => (gallery ? gallery.go(-1) : stepFallback(-1)));
$("#g-next").addEventListener("click", () => (gallery ? gallery.go(1) : stepFallback(1)));


// ---------------------------------------------------------------- Higgsfield 3D models
// GLBs generated with Higgsfield (Tripo H3.1 / SAM 3D) from the couple's own artwork.
// (window.MODEL_EXT lets a host that can't serve .glb use self-contained .json glTF instead)
const MODEL_EXT = window.MODEL_EXT || ".glb";
const MODEL_FILES = Object.fromEntries(["heart", "rings", "floral", "rose"].map((n) => [n, `assets/models/${n}${MODEL_EXT}`]));
let modelViews = null, modelsInit = false;
async function initModels() {
  if (modelsInit || !webgl) return;
  modelsInit = true;
  try {
    const { ModelViews, loadModel } = await import("./models.js");
    modelViews = new ModelViews(await getStage(), { reduced });
    $$("[data-model]").forEach((slot) => {
      const name = slot.dataset.model;
      if (MODEL_FILES[name]) modelViews.add(slot, MODEL_FILES[name], name);
    });
    if (world && world.addRoses && !reduced) {
      if (quality.tier.roses > 0) loadModel(MODEL_FILES.rose, 0.9).then((rose) => rose && world.addRoses(rose));
    }
  } catch (e) { console.warn("3D models unavailable", e); }
}
$(".c-details").addEventListener("click", (e) => {
  e.preventDefault();
  burstFrom(e.currentTarget, { count: 16, power: 1 });
  daySection.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
});

// ---------------------------------------------------------------- audio-reactive waves (2D canvas)
// Wave canvases: size cached via ResizeObserver so drawing never reads layout.
const waveBoxes = new Map();
function waveCanvas(c) {
  let w = waveBoxes.get(c);
  if (!w) {
    w = { g: c.getContext("2d"), w: c.clientWidth, h: c.clientHeight, dirty: true };
    new ResizeObserver((en) => { const r = en[0].contentRect; w.w = r.width; w.h = r.height; w.dirty = true; }).observe(c);
    waveBoxes.set(c, w);
  }
  if (w.dirty) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = Math.max(1, Math.round(w.w * dpr)); c.height = Math.max(1, Math.round(w.h * dpr));
    w.g.setTransform(dpr, 0, 0, dpr, 0, 0);
    w.dirty = false;
  }
  return w;
}
const WAVE_LINES = [
  { color: "rgba(184,147,90,.85)", freq: 1.6, speed: 1.1, band: "mid", amp: 1, width: 1.3 },
  { color: "rgba(183,110,121,.7)", freq: 2.4, speed: -1.6, band: "high", amp: 0.7, width: 1.1 },
  { color: "rgba(110,42,53,.55)", freq: 1.1, speed: 0.7, band: "bass", amp: 0.85, width: 1 },
];
function drawWaves(canvas, f, t, { quiet = 0.12, lines = WAVE_LINES } = {}) {
  const { g, w, h } = waveCanvas(canvas);
  g.clearRect(0, 0, w, h);
  const mid = h / 2;
  const steps = Math.max(24, Math.floor(w / 4));
  for (const L of lines) {
    const energy = quiet + (f[L.band] * 0.7 + f.beat * 0.5) * f.playing;
    const A = (h * 0.42) * Math.min(1, energy) * L.amp;
    g.beginPath();
    for (let i = 0; i <= steps; i++) {
      const u = i / steps;
      const env = Math.sin(Math.PI * u);
      const y = mid + Math.sin(u * Math.PI * 2 * L.freq + t * L.speed) * A * env * (0.75 + 0.25 * Math.sin(u * 9 + t * 2));
      i ? g.lineTo(u * w, y) : g.moveTo(u * w, y);
    }
    g.strokeStyle = L.color;
    g.lineWidth = L.width;
    g.stroke();
  }
}
const ribbon = $("#ribbon");
const playerWave = $("#player-wave");
let ribbonVisible = false;
new IntersectionObserver((en) => { ribbonVisible = en[0].isIntersecting; }).observe(ribbon);

// ---------------------------------------------------------------- beat → glow layers
// Only opacity/transform change per frame, so the browser never repaints for the beat.
const aura = $(".aura"), discGlow = $(".disc-glow"), cdGlow = $(".cd-glow"), playRing = $(".play-ring");
let lastBeatVar = -1;
function pushBeat(f) {
  const v = Math.min(1, f.beat * 0.85 + f.level * 0.3 * f.playing);
  if (Math.abs(v - lastBeatVar) < 0.01) return;
  lastBeatVar = v;
  aura.style.opacity = (0.45 + v * 0.45).toFixed(3);
  aura.style.transform = `scale(${(0.92 + v * 0.14).toFixed(3)})`;
  if (body.classList.contains("is-open")) {
    if (heroVisible) {
      discGlow.style.opacity = (0.25 + v * 0.75).toFixed(3);
      discGlow.style.transform = `scale(${(1 + v * 0.05).toFixed(3)})`;
    }
    cdGlow.style.opacity = v.toFixed(3);
  }
  playRing.style.opacity = v.toFixed(3);
  playRing.style.transform = `scale(${(0.85 + v * 0.25).toFixed(3)})`;
}

// ---------------------------------------------------------------- main loop
let last = performance.now();
let discAngle = 0, discSpeed = 0, waveClock = 0, lastProgress = -1, playerWaveIdle = false;
function frame(now) {
  requestAnimationFrame(frame);
  const rawDt = (now - last) / 1000;
  const dt = Math.min(0.05, rawDt);
  last = now;
  const t = now / 1000;
  quality.frame(rawDt);
  const f = audio.update(dt);

  pointer.x += (pointer.tx - pointer.x) * (1 - Math.exp(-dt * 4));
  pointer.y += (pointer.ty - pointer.y) * (1 - Math.exp(-dt * 4));

  const open = body.classList.contains("is-open");
  if (open && timelineVisible) updateTimeline(); // layout read happens before this frame's writes
  if (world) world.update(dt, f, pointer, window.scrollY);
  if (open && !reduced && heroVisible) updateParallax();
  pushBeat(f);

  // vinyl: spins up / coasts down with inertia; untouched while off screen or at rest
  const targetSpeed = audio.playing ? (Math.PI * 2) / 3.6 : 0;
  discSpeed += (targetSpeed - discSpeed) * (1 - Math.exp(-dt * (audio.playing ? 2.2 : 0.9)));
  if (discSpeed > 0.001 && (!reduced || audio.playing)) {
    discAngle = (discAngle + discSpeed * dt) % (Math.PI * 2);
    if (open && heroVisible) discRecord.style.transform = `rotate(${discAngle.toFixed(4)}rad)`;
  }

  // waves redraw at the tier's rate; the player's line rests once the music stops
  waveClock += rawDt;
  if (waveClock >= 1 / quality.tier.waveFps) {
    waveClock = 0;
    const active = f.playing > 0.02 || f.beat > 0.01;
    if (open && ribbonVisible) drawWaves(ribbon, f, t, { quiet: 0.14 });
    if (player.classList.contains("is-visible") && (active || !playerWaveIdle)) {
      drawWaves(playerWave, f, t, { quiet: 0.08 });
      playerWaveIdle = !active;
    }
  }
  const prog = Math.round(audio.progress() * 1000);
  if (prog !== lastProgress && player.classList.contains("is-visible")) {
    lastProgress = prog;
    progressBar.style.transform = `scaleX(${(prog / 1000).toFixed(3)})`;
  }
  if (gallery && galleryVisible && open) gallery.update(dt, f, pointer);
  if (modelViews && open) modelViews.update(dt, f, pointer);
}

// ---------------------------------------------------------------- boot
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { world && world.resize(); gallery && gallery.resize(); }, 120);
});

createWorld().then(() => {
  route();
  requestAnimationFrame((n) => { last = n; frame(n); });
});

// exposed for QA only
window.__jsInvite = { audio, quality, get world() { return world; }, get gallery() { return gallery; }, get stage() { return stage; }, timeParts };
