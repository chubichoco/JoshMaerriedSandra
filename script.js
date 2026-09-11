(() => {
  const WEDDING_DATE = new Date("2027-04-10T00:00:00");

  const envelope = document.getElementById("envelope");
  const envelopeImg = document.getElementById("envelope-img");
  const envelopeScreen = document.getElementById("page-0");
  const paper = document.getElementById("paper");
  const goBack = document.getElementById("go-back");
  const page0 = document.getElementById("page-0");
  const page1 = document.getElementById("page-1");

  const CLOSED_SRC = "assets/envelope-closed.png";
  const OPEN_SRC = "assets/envelope-open.png";
  new Image().src = OPEN_SRC;

  function showPage(hash) {
    const isPage1 = hash === "#page-1";
    page0.classList.toggle("active", !isPage1);
    page1.classList.toggle("active", isPage1);
  }

  function resetEnvelope() {
    envelope.classList.remove("opening");
    envelopeScreen.classList.remove("leaving");
    paper.classList.remove("pop", "zoom");
    envelopeImg.src = CLOSED_SRC;
  }

  envelope.addEventListener("click", () => {
    envelope.classList.add("opening");
    setTimeout(() => {
      envelopeImg.src = OPEN_SRC;
      envelope.classList.remove("opening");
    }, 350);
    setTimeout(() => {
      paper.classList.add("pop");
    }, 650);
    setTimeout(() => {
      paper.classList.add("zoom");
      envelopeScreen.classList.add("leaving");
    }, 1150);
    setTimeout(() => {
      location.hash = "#page-1";
    }, 1650);
  });

  goBack.addEventListener("click", () => {
    resetEnvelope();
    location.hash = "#page-0";
  });

  window.addEventListener("hashchange", () => showPage(location.hash));
  showPage(location.hash || "#page-0");

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
