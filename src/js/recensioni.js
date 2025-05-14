(function ($) {
  'use strict';

  // Inizializzazione dello slider con 3 slide visibili e frecce di navigazione
  $('.featured-recensioni-slider').slick({
    dots: false,
    speed: 300,
    autoplay: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 1
        }
      }
    ]
  });

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

  $('.slick-prev:hover, .slick-next:hover').css({
    'background': 'rgba(255,255,255,1)',
    'color': '#000'
  });

  // Calcola l'altezza massima e applicala a tutte le slide
  var maxHeight = 0;
  $('.testimonial-card').each(function () {
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
      $('.slick-prev').css('left', '10px');
      $('.slick-next').css('right', '10px');
    } else {
      $('.slick-prev').css('left', '-20px');
      $('.slick-next').css('right', '-20px');
    }
  }

  positionArrows();
  $(window).on('resize', positionArrows);

  // Stili responsivi aggiuntivi per le card su mobile
  /*
  if ($(window).width() <= 768) {
    $('.testimonial-card').css({
      'padding': '10px',
      'font-size': '14px',
      'margin': '10px',
      'max-width': '90%',
      'box-sizing': 'border-box'
    });
  }
  */

  // Stili responsivi aggiuntivi per le card su mobile
  if ($(window).width() <= 768) {
    $('.testimonial-card').css({
      'padding': '15px',
      'font-size': '14px',
      'margin': '10px auto', // Aggiunto auto per centrare orizzontalmente
      'width': '85%', // Riduci la larghezza al 85% invece di 90%
      'max-width': '80%', // Aggiungi una max-width per limitare la larghezza su schermi grandi
      'box-sizing': 'border-box'
    });
  }

})(jQuery);
