const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('pointermove', (event) => {
  if (cursorGlow) {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
  revealObserver.observe(element);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});