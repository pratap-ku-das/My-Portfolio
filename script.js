// Scroll-reveal logic for sections
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal-section');
  const windowHeight = window.innerHeight;
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 80) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); 