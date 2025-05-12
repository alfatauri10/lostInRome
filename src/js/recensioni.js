(function ($) {
  'use strict';


  // Inizializzazione dello slider con 3 slide visibili e frecce di navigazione
  $('.featured-recensioni-slider').slick({
    dots: false,
    speed: 300,
    autoplay: true,
    arrows: true, // Abilito le frecce
    prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
    slidesToShow: 3, // Mostra 3 slide alla volta
    slidesToScroll: 1, // Scorri di 1 alla volta
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // Stile personalizzato per le frecce
  $('.slick-prev, .slick-next').css({
    'position': 'absolute',
    'top': '50%',
    'transform': 'translateY(-50%)',
    'z-index': '1',
    'background': 'rgba(255,255,255,0.3)',
    'border': 'none',
    'border-radius': '50%',
    'width': '40px',
    'height': '40px',
    'color': '#fff',
    'font-size': '20px',
    'cursor': 'pointer',
    'transition': 'all 0.3s ease'
  });

  $('.slick-prev:hover, .slick-next:hover').css({
    'background': 'rgba(255,255,255,0.7)',
    'color': '#333'
  });

  // Calcola l'altezza massima e applicala a tutte le slide
  var maxHeight = 0;
  $('.testimonial-card').each(function() {
    maxHeight = Math.max(maxHeight, $(this).outerHeight());
  }).height(maxHeight);

  // Masonry
    $(document).ready(function () {
      $('.masonry-container').masonry({
        itemSelector: '.masonry-container > div',
        columnWidth: 1
      });
    });
 // Posizionamento frecce su mobile
  function positionArrows() {
    if ($(window).width() <= 768) {
      $('.slick-prev').css('left', '-5px');
      $('.slick-next').css('right', '-5px');
    } else {
      $('.slick-prev').css('left', '-20px');
      $('.slick-next').css('right', '-20px');
    }
  }

  positionArrows();
  $(window).on('resize', positionArrows);

})(jQuery);