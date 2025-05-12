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
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>'
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

// Inizializzazione quando il documento è pronto
$(document).ready(function() {
    initGallery();
    setupSmoothScrolling();
});