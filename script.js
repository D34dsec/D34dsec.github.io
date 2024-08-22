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

  $(document).ready(function(){
    $('.testimonials-carousel').slick({
      slidesToShow: 2, // Number of testimonials to show at once
      slidesToScroll: 1,
      autoplay: true, // Auto-scroll the testimonials
      autoplaySpeed: 5000, // Delay between slides
      dots: true, // Add dots for navigation
      arrows: false, // Disable arrows for cleaner look
      responsive: [
        {
          breakpoint: 768, // Mobile view, only show 1 testimonial at a time
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  
  
  
  
