// نمایش بخش بالای صفحه
window.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width = scrolled + "%";
};
// TYPING EFFECT
const typingEl = document.querySelector("#typing");
const texts = [
  "برنامه نویس وب",
];

let textIndex = 0;
let charIndex = 0;

function type() {

  if (!typingEl) return;

  const currentText = texts[textIndex];

  typingEl.textContent = currentText.slice(0, charIndex);

  charIndex++;

  if (charIndex > currentText.length) {

    charIndex = 0;
    textIndex = (textIndex + 1) % texts.length;

    setTimeout(type, 1200);
    return;
  }

  setTimeout(type, 80);
}

type();
// skills animatiom
const fills = document.querySelectorAll(".level");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const value = el.getAttribute("data-percent");
      el.style.width = value + "%";
    }
  });
}, {
  threshold: 0.5
});

fills.forEach((el) => {
  el.style.width = "0%"; // شروع از صفر
  skillObserver.observe(el);
});

// hambergery

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

function closeMenu(){
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.classList.remove("active");
  document.body.style.overflow = "auto";
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); 
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  document.body.style.overflow =
    mobileMenu.classList.contains("active") ? "hidden" : "auto";
});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".mobile-menu a").forEach(a=>{
  a.addEventListener("click", closeMenu);
});
