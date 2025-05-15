// gallery-monuments-scroll.js
function initGallery() {
    // Inizializzazione galleria
    $('.monument-gallery').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'ease-in-out',
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>'
    });
}


function setupSmoothScrolling() {
    // Smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate(
            { scrollTop: $($(this).attr('href')).offset().top - 70 },
            500,
            'linear'
        );
    });
}



  // Posizionamento frecce su mobile
  function positionArrows() {
    if ($(window).width() <= 768) {
      $('.slick-prev').css('left', '-15px');
      $('.slick-next').css('right', '-15px');
    } else {
      $('.slick-prev').css('left', '-20px');
      $('.slick-next').css('right', '-20px');
    }



    // Stile personalizzato per le frecce
    $('.slick-prev, .slick-next').css({
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'position': 'absolute',
      'top': '50%',
      'transform': 'translateY(-50%)',
      'z-index': '1',
      'background': 'rgba(255,255,255,0.8)',
      'border': 'none',
      'border-radius': '50%',
      'width': '40px',
      'height': '40px',
      'color': '#333',
      'font-size': '20px',
      'cursor': 'pointer',
      'transition': 'all 0.3s ease'
    });

  }




// Inizializzazione quando il documento è pronto
$(document).ready(function() {
    initGallery();
    setupSmoothScrolling();
    positionArrows();
    $(window).on('resize', positionArrows);

});