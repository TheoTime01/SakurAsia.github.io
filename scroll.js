// scrolltop.js
const scrollTopBtn = document.getElementById('scrollTopBtn');

function toggleScrollButton() {
  if (window.scrollY > window.innerHeight * 0.5) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
}

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide button when scrolling
window.addEventListener('scroll', toggleScrollButton);
