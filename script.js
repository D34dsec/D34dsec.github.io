const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

$(document).ready(function(){
    $('.service-carousel').slick({
      slidesToShow: 3, // Show 3 cards at once on large screens
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
      adaptiveHeight: true, // Enable adaptive height
      responsive: [
        {
          breakpoint: 1024, // Show 2 cards on medium screens
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768, // Show 1 card on small screens
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  
  
  
