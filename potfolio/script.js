window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hide'), 900);
});

const phrases = [
  "Web Developer",
  "Graphic Designer",
  "Coding Enthusiast",
  "Creative Problem Solver"
];

const typingEl = document.getElementById("typing");
let pIndex = 0;
let cIndex = 0;
let deleting = false;

function typeLoop() {
  const current = phrases[pIndex];
  typingEl.textContent = current.slice(0, cIndex);

  if (!deleting) {
    cIndex++;
    if (cIndex > current.length) {
      deleting = true;
      setTimeout(typeLoop, 1100);
      return;
    }
  } else {
    cIndex--;
    if (cIndex === 0) {
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeLoop, deleting ? 55 : 90);
}

typeLoop();

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('show'));
});

const navbar = document.getElementById('navbar');
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  topBtn.classList.toggle('show', window.scrollY > 500);
  revealOnScroll();
  updateActiveNav();
  animateBars();
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const particleBox = document.getElementById('particles');

for (let i = 0; i < 34; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (6 + Math.random() * 10) + 's';
  p.style.animationDelay = (Math.random() * 8) + 's';
  p.style.opacity = (0.2 + Math.random() * 0.8).toFixed(2);
  p.style.transform = `scale(${0.6 + Math.random() * 1.6})`;
  particleBox.appendChild(p);
}

const revealEls = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;

  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('show');
  });
}

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = "";

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top <= 120) current = sec.id;
  });

  navItems.forEach(a => {
    a.classList.toggle(
      'active',
      a.getAttribute('href') === '#' + current
    );
  });
}

let barsAnimated = false;

function animateBars() {
  const skillsSection = document.getElementById('skills');
  const rect = skillsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.8 && !barsAnimated) {
    document.querySelectorAll('.bar > span').forEach(span => {
      span.style.width = span.dataset.width;
    });

    barsAnimated = true;
  }
}

revealOnScroll();
updateActiveNav();
animateBars();


// Project 3D Hover Effect

const cards = document.querySelectorAll(".project");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 6;
    const centerY = rect.height / 6;

    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 12;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;

    card.style.boxShadow =
      "0 28px 50px rgba(0, 0, 0, 0.38)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";

    card.style.boxShadow =
      "0 12px 28px rgba(0, 0, 0, 0.22)";
  });
});