// Mobiles Menü
const toggle = document.querySelector(".nav-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".main-nav a").forEach((a) =>
    a.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Erfahrungsberichte: Punkte-Navigation
const track = document.querySelector(".quotes");
const dotsBox = document.querySelector(".dots");
if (track && dotsBox) {
  const build = () => {
    const pages = Math.max(1, Math.round(track.scrollWidth / track.clientWidth));
    dotsBox.innerHTML = "";
    if (pages < 2) return;
    for (let i = 0; i < pages; i++) {
      const b = document.createElement("button");
      b.setAttribute("aria-label", `Seite ${i + 1}`);
      b.addEventListener("click", () => track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" }));
      dotsBox.appendChild(b);
    }
    sync();
  };
  const sync = () => {
    const i = Math.round(track.scrollLeft / track.clientWidth);
    [...dotsBox.children].forEach((d, n) => d.classList.toggle("is-active", n === i));
  };
  track.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", build);
  build();
}

// Feedback-Formular: ohne Seitenwechsel absenden
const fbForm = document.querySelector("[data-feedback]");
if (fbForm) {
  const btn = fbForm.querySelector("button[type=submit]");
  const err = fbForm.querySelector(".form-error");
  const ok = document.querySelector(".feedback-success");
  fbForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    err.hidden = true;
    btn.disabled = true;
    try {
      const res = await fetch(fbForm.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(fbForm),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) throw new Error(data.message || res.status);
      fbForm.hidden = true;
      ok.hidden = false;
      ok.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (_) {
      err.hidden = false;
      btn.disabled = false;
    }
  });
}
