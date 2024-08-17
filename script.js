const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

