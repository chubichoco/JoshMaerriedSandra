(() => {
  const WEDDING_DATE = new Date("2027-04-10T00:00:00");

  const envelope = document.getElementById("envelope");
  const envelopeImg = document.getElementById("envelope-img");
  const envelopeVideo = document.getElementById("envelope-video");
  const envelopeScreen = document.getElementById("page-0");
  const goBack = document.getElementById("go-back");
  const songDisc = document.getElementById("song-disc");
  const songAudio = document.getElementById("song-audio");
  const rsvpLetter = document.getElementById("rsvp-letter");
  const rsvpFlip = document.querySelector(".rsvp-letter-flip");
  const pages = {
    "#page-0": document.getElementById("page-0"),
    "#page-1": document.getElementById("page-1"),
    "#page-2": document.getElementById("page-2"),
  };

  function showPage(hash) {
    const target = pages[hash] ? hash : "#page-0";
    for (const [key, el] of Object.entries(pages)) {
      el.classList.toggle("active", key === target);
    }
  }

  function resetEnvelope() {
    envelope.classList.remove("opening", "video-active", "zooming");
    envelopeScreen.classList.remove("leaving");
    envelopeVideo.pause();
    envelopeVideo.currentTime = 0;
  }

  envelope.addEventListener("click", () => {
    songAudio?.play().catch(() => {});
    envelope.classList.add("opening");
    setTimeout(() => {
      envelope.classList.add("video-active");
      envelopeVideo.currentTime = 0;
      envelopeVideo.play();
    }, 300);
    setTimeout(() => {
      envelope.classList.add("zooming");
    }, 1100);
    setTimeout(() => {
      envelopeScreen.classList.add("leaving");
    }, 1700);
    setTimeout(() => {
      location.hash = "#page-1";
    }, 2000);
  });

  goBack.addEventListener("click", () => {
    resetEnvelope();
    location.hash = "#page-0";
  });

  window.addEventListener("hashchange", () => showPage(location.hash));
  showPage(location.hash || "#page-0");

  // song disc
  if (songDisc && songAudio) {
    // best-effort true autoplay; browsers block this without a prior user
    // gesture, so the envelope tap above is the reliable fallback trigger
    songAudio.play().catch(() => {});
    songDisc.addEventListener("click", () => {
      if (songAudio.paused) {
        songAudio.play().catch(() => {});
      } else {
        songAudio.pause();
      }
    });
    songAudio.addEventListener("play", () => songDisc.classList.add("playing"));
    songAudio.addEventListener("pause", () => songDisc.classList.remove("playing"));
    songAudio.addEventListener("ended", () => songDisc.classList.remove("playing"));

    // Pause while the tab isn't visible, and only resume on return if it
    // was us who paused it — a song the user paused manually stays paused.
    let pausedByVisibility = false;
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (!songAudio.paused) {
          songAudio.pause();
          pausedByVisibility = true;
        }
      } else if (pausedByVisibility) {
        pausedByVisibility = false;
        songAudio.play().catch(() => {});
      }
    });
  }

  // RSVP card only becomes a real link once it's finished flipping to its
  // back face, so a tap mid-flip (or on the front) can't fire it early.
  if (rsvpLetter && rsvpFlip) {
    rsvpFlip.addEventListener("animationend", (e) => {
      if (e.animationName === "letter-flip") {
        rsvpLetter.href = rsvpLetter.dataset.rsvpHref;
        rsvpLetter.target = "_blank";
        rsvpLetter.rel = "noopener";
      }
    });
  }

  // countdown
  function timeParts(target, now) {
    const diff = Math.max(0, target.getTime() - now.getTime());
    const seconds = Math.floor(diff / 1000);
    return {
      days: Math.floor(seconds / 86400),
      hours: Math.floor((seconds % 86400) / 3600),
      mins: Math.floor((seconds % 3600) / 60),
      secs: seconds % 60,
    };
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function renderCountdown() {
    const parts = timeParts(WEDDING_DATE, new Date());
    document.getElementById("cd-days").textContent = pad(parts.days);
    document.getElementById("cd-hours").textContent = pad(parts.hours);
    document.getElementById("cd-mins").textContent = pad(parts.mins);
    document.getElementById("cd-secs").textContent = pad(parts.secs);
  }

  renderCountdown();
  setInterval(renderCountdown, 1000);

  // ponytail: smallest runnable check for the pure countdown math, no test framework
  if (new URLSearchParams(location.search).has("selftest")) {
    const t = timeParts(new Date("2027-01-02T01:01:30"), new Date("2027-01-01T00:00:00"));
    console.assert(t.days === 1 && t.hours === 1 && t.mins === 1 && t.secs === 30, "timeParts failed", t);
    const zero = timeParts(new Date("2020-01-01"), new Date("2025-01-01"));
    console.assert(zero.days === 0 && zero.hours === 0, "timeParts should clamp to zero for past dates", zero);
    console.log("selftest passed");
  }
})();
