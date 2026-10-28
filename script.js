const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Reveal embedded DualSource video when the file is present.
(async function revealDemoVideo() {
  const video = document.getElementById("demo-video");
  const placeholder = document.getElementById("demo-placeholder");
  if (!video || !placeholder) return;
  try {
    const res = await fetch("assets/demo/dualsource-demo.mp4", { method: "HEAD" });
    if (res.ok) {
      video.hidden = false;
      placeholder.hidden = true;
    }
  } catch (_) {
    // keep placeholder
  }
})();
