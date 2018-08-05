(function ($) {
    "use strict";

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function (e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
        $(".navbar").removeClass("d-none");
    })

})(jQuery);

/*

    USE WITH THIS CSS:

    @media (min-width: 992px) {
          #main-nav {
            padding-top: 25px;
            padding-bottom: 25px;
            -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
            -moz-transition: padding-top 0.3s, padding-bottom 0.3s;
            transition: padding-top 0.3s, padding-bottom 0.3s;
            border: none;
            background-color: transparent;
          }
          #main-nav .navbar-brand {
            font-size: 1.75em;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            transition: all 0.3s;
          }
          #main-nav .navbar-nav .nav-item .nav-link {
            padding: 1.1em 1em !important;
          }
          #main-nav.navbar-shrink {
            padding-top: 0;
            padding-bottom: 0;
            background-color: black;
          }
          #mainNav.navbar-shrink .navbar-brand {
            font-size: 1.25em;
            padding: 12px 0;
          }
    }


*/
