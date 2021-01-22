"use strict";

(function($) {
    $('.navbar__catalog_link').on('click scroll', (e) => {
        e.preventDefault();
        $('#nav').toggleClass('menu-open');
    });
    ///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});
    // $('.navbar__basket_link').on('click scroll', (e) => {
    //     e.preventDefault();
    //     $('#nav').toggleClass('basket-open');
    // });
    
    // slider
    $('.js-slider').slick({
        dots: true,
        dotsClass: 'js-dots js-dots--mt50',
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.js-discount-items').slick({
        dots: true,
        dotsClass: 'js-dots',
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.js-special-offers').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'js-dots',
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})(jQuery);