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

// Video-Erfahrungen: YouTube erst nach Klick laden (Datenschutz)
document.querySelectorAll(".video-frame[data-yt]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.yt;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    iframe.title = btn.getAttribute("aria-label") || "Video";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    btn.replaceChildren(iframe);
    btn.removeAttribute("data-yt");
    btn.style.cursor = "default";
  }, { once: true });
});

// Bildergalerie: Großansicht mit Weiter/Zurück
document.querySelectorAll(".gallery").forEach((gal) => {
  const items = [...gal.querySelectorAll(".gallery-item img")];
  const dlg = gal.querySelector(".lightbox");
  if (!items.length || !dlg || typeof dlg.showModal !== "function") return;
  const big = dlg.querySelector("img");
  let i = 0;
  const show = (n) => { i = (n + items.length) % items.length; big.src = items[i].src; big.alt = items[i].alt; };
  items.forEach((img, n) => img.parentElement.addEventListener("click", () => { show(n); dlg.showModal(); }));
  dlg.querySelector(".lb-close").addEventListener("click", () => dlg.close());
  dlg.querySelector(".lb-prev").addEventListener("click", () => show(i - 1));
  dlg.querySelector(".lb-next").addEventListener("click", () => show(i + 1));
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(i - 1);
    if (e.key === "ArrowRight") show(i + 1);
  });
});
