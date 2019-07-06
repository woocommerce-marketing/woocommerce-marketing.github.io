/*
Template Name: SeoKit
	Author: ithemeslab
    Author URI: https://themeforest.net/user/ithemeslab
    
    Table of content
    0. Preloader
    1. Menu dropdown on hover
    2. Fixed Nav on scroll
    3. Owl Carousel
        3.1 Slideshow
        3.2 Case studies
        3.3 Team
        3.4 Testimonial A
        3.5 Testimonial B
    4. Animated counter
    5. search and off-canvas
    6. Fixed navigation on scroll top
    7. Venobox lightbox
*/

(function ($) {
    "use strict";
    //0. preloader
    function preloader() {
        $(window).on('load', function () {
            $('#preloader').fadeOut('slow', function () {
                $(this).remove();
            });
    });
    //when dom is ready
    $(document).ready(function () {

            //1. Menu dropdown on hover
            if ($(window).width() > 768) {
                $('body').on('mouseenter mouseleave', '.dropdown', function (e) {
                    var _d = $(e.target).closest('.dropdown'); _d.addClass('show');
                    setTimeout(function () {
                        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                    }, 300);
                });
            }

            //2. Fixed Nav on scroll
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 1) {
                    $('#header').addClass('dark-header');
                }
                else {
                    $('#header').removeClass('dark-header');
                }
            });

            //3. Owl Carousel
            //3.1 Slidesho
            $(".seokit-slideshow").owlCarousel({
                items: 1,
                autoplay: true,
                nav: true,
                loop: true,
                smartSpeed: 1100,
                autoplayTimeout: 8000,
                navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
            });
            //3.2. Case studies
            $(".jsCaseStudies").owlCarousel({
                autoplay: true,
                nav: true,
                loop: true,
                smartSpeed: 1100,
                autoplayTimeout: 8000,
                margin: 15,
                navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    768: {
                        items: 2,
                        nav: false
                    },
                    769: {
                        items: 3,
                        nav: true,
                        loop: true
                    }
                }
            });
            //3.3. Team
            $(".jsTeamCarousel").owlCarousel({
                autoplay: true,
                nav: true,
                loop: true,
                smartSpeed: 1100,
                autoplayTimeout: 8000,
                margin: 30,
                navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    768: {
                        items: 2,
                        nav: false
                    },
                    769: {
                        items: 4,
                        nav: true,
                        loop: true
                    }
                }
            });
            //3.4 Testimonial A
            $(".jsTestimonialA").owlCarousel({
                items: 1,
                autoplay: true,
                nav: false,
                dots: true,
                loop: true,
                smartSpeed: 1100,
                autoplayTimeout: 8000,
                navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
            });
            //3.5 Testimonial B
            $(".jsTestimonialB").owlCarousel({
                autoplay: true,
                nav: false,
                dots: true,
                loop: true,
                margin: 20,
                smartSpeed: 1100,
                autoplayTimeout: 8000,
                navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        loop: true
                    },
                    768: {
                        items: 1,
                        nav: false,
                        loop: true
                    },
                    769: {
                        items: 2,
                        nav: true,
                        loop: true
                    }
                }
            });

            //4. Animated counter
            $(".jsCounter").each(function () {
                $(".jsCounter").appear(function () {
                    $(".jsCounter").countTo();
                })
            })

            //5. search and off-canvas
            $('.jsSearchActivate').on('click', function () {
                $('.itl-search').addClass('active');
            })
            $('.jsSearchDeactivate i').on('click', function () {
                $('.itl-search').removeClass('active');
            })
            $('.jsOffcanvasActivate').on('click', function () {
                $('.itl-off-canvas').addClass('active');
            })
            $('.jsOffcanvasDeactivate i').on('click', function () {
                $('.itl-off-canvas').removeClass('active');
            })
        });
    }

    //6. Fixed navigation on scroll top
    function scrollNavigation() {
        var previousScroll = 0;
        $(window).scroll(function () {
            var currentScroll = $(this).scrollTop();

            if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
                if (currentScroll > previousScroll) {
                    window.setTimeout(hideNav, 300);
                } else {
                    window.setTimeout(showNav, 300);
                }
                previousScroll = currentScroll;
            }

        });

        function hideNav() {
            $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
        }
        function showNav() {
            $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
        }
    }

    //7. Venobox lightbox
    $('.venobox').venobox();

    //8. Back To Top
    function backToTopWithHeaderChange() {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 100) {
                $('.itl-header--fixed').addClass('bg-dark-nav');
                $('.itl-header--inherit').addClass('fixed-top');
                $('#back-to-top').addClass('reveal');
            } else {
                $('.itl-header--fixed').removeClass('bg-dark-nav');
                $('.itl-header--inherit').removeClass('fixed-top');
                $('#back-to-top').removeClass('reveal');
            }
        });
    }

    preloader();
    scrollNavigation();
    backToTopWithHeaderChange();

})(jQuery);