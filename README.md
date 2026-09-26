# A Thousand Years with Josh — immersive edition

Drop-in replacement for the GitHub Pages site. Everything in `public/` is static: no build step is needed to deploy.

## Deploy (GitHub Pages)
1. Copy the **contents of `public/`** into the repo root (replacing `index.html`, `styles.css`, `script.js`).
   New files live under `css/`, `js/` and `assets/{img,media,fonts}/`. The old `assets/*.png` can stay or be deleted.
2. Commit and push. The site works from any sub-path (all URLs are relative).

## Setting the ceremony & reception times
In `public/index.html`, find the **THE DAY** section and fill in `data-time` (24-hour, Philippine time):
```html
<article class="event" id="ev-ceremony" ... data-time="15:00" data-duration="90">
<article class="event" id="ev-reception" ... data-time="18:00" data-duration="240">
```
No rebuild needed. The cards then show "3:00 PM" etc. (always in Iloilo time, whatever the guest's time zone),
the countdown switches to counting down to the ceremony, and both calendar buttons become timed events.
Left empty, the cards read "Time to follow" and the countdown targets midnight on 10 April 2027 (Philippine time).

## The Details (from the original page 2)
Timeline, gifts, dress code and contact live in the **THE DETAILS** section of `public/index.html` (no rebuild needed):
- **Timeline** — set `data-time="15:00"` on any `.tl-item`. Ceremony and Reception reuse the times from the event cards unless you set their own.
  With no times at all, the stops show in order with a single "Times to follow" note.
- **Gift QR** — save the image (e.g. `assets/img/gift-qr.png`) and set `data-qr="assets/img/gift-qr.png"` on `#gift`. Until then the flipped card says "QR code coming soon".
- **Dress code** — the couple's "Our Wedding Palette" guide (`assets/img/wedding-palette*.webp`) with a swatch legend by role; tap the image for full size.
  The one-line summary above it is in `#dress-note`.
- **Contact** — the email address is in `#contact-email` (link + text).
The old `#page-2` link still works: it opens the invitation and scrolls to this section.

## Higgsfield 3D models (`public/assets/models/`)
| File | Made with | From | Used as |
|---|---|---|---|
| `heart.glb` | Tripo H3.1 image-to-3D | the couple's "The Details" lace heart artwork | 3D badge on the invitation, jumps to The Day |
| `rings.glb` | GPT Image 2.5 → Tripo H3.1 | generated product shot of two wedding bands | turning centrepiece above the countdown |
| `floral.glb` | Tripo H3.1 image-to-3D | the rose & calla-lily spray from the invitation | closing centrepiece |
| `rose.glb` | SAM 3D (prompt "red rose") | same floral artwork | roses drifting through the backdrop |

Raw exports (25.9 MB) were compressed with glTF-Transform (meshopt geometry + WebP textures) to 1.05 MB total.
All models render through one shared WebGL canvas into their page slots; each slot shows the original 2D artwork
until its model loads, and keeps it on devices without WebGL2.
To re-compress a new export: `npx gltf-transform optimize in.glb public/assets/models/name.glb --compress meshopt --texture-compress webp --texture-size 1024`

## What's inside
| Area | Tech |
|---|---|
| Living backdrop: bokeh dust, tumbling petals, audio-pulsed lights | Three.js (WebGL2), instanced meshes + custom point shaders |
| Tap anywhere → 3D hearts + sparks with buoyant physics | 90-heart instanced pool, procedural extruded geometry |
| "Moments" rotating polaroid frames (drag / tap / arrows) | second Three.js canvas, lazy-loaded when scrolled near |
| Music sync (glows, waves, vinyl, countdown, key light) | `src/song-data.js`: frame-accurate rhythm map of `our-song.mp3` (30 fps: level, bass, mid, high, onsets) |
| Player: play/pause, mute, volume, progress | Web Audio GainNode so volume also works on iOS |
| No WebGL2 | Canvas2D world (same hearts/dust/petals) + swipeable polaroid strip |
| Reduced motion | no bursts/drift/zoom, instant reveals, gallery doesn't auto-turn |

The MP3 is byte-identical to the original. Images were converted to WebP (~15 MB → 0.6 MB) and the envelope video re-encoded (4 MB → 0.45 MB MP4 / 0.2 MB WebM). Fonts are self-hosted.

Test switches: `?render=2d` forces the fallback, `?reduced` forces reduced motion, `#page-1` opens straight to the invitation.
Keyboard: `k` / space = play/pause, `m` = mute.

## Performance
Built to stay smooth on everyday laptops (including integrated Intel/AMD graphics in Edge/Chrome):
- Only **two WebGL contexts**: the backdrop, plus one shared off-screen renderer that draws the 3D models and the photo ring into small canvases inside the page.
- Backdrop renders **without antialiasing at ≤1.5× resolution** (the bokeh and petals are soft anyway).
- **No live `backdrop-filter` blur** and no full-screen blend modes over the moving 3D; beat-synced glows change only opacity/transform, so nothing repaints to the music.
- Idle work is skipped: the heart/spark pools aren't drawn when empty, off-screen views don't render, the waves throttle and rest when the music stops.
- **Automatic quality tiers** (high → medium → low): the starting tier comes from the GPU (integrated laptop GPUs start at medium); if frames take longer than ~20 ms (<50 fps) the whole page steps down a tier.
  Force one for testing with `?quality=high`, `?quality=medium` or `?quality=low`.

## Editing
Source is in `src/`. Rebuild the bundle with:
```
npm install
node build.mjs      # writes public/js/app.js
```
The wedding date lives on the THE DAY section (`data-date`, `data-tz`); the RSVP link is in `public/index.html` (two places).
