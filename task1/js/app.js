/* 
lexar
Author - bootstrapdevelop
Project Version - v1.0
 */
(function ($) {
    "use strict";
    /**sticky*/
  $("#header").sticky({topSpacing:0}); 
    //auto close navbar-collapse on click a
    $('.nav-item>[data-scroll]').on('click', function () {
        $('.navbar-toggler:visible').click();
    });


// owl-carousel

$(".what_say_sldier").owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$(".pricing_slider").owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});  

$(".team_slider").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

     // Select all links with hashes
/* 
lexar - Software HTML5 Landing Page
Author - nilssatasiya
Project Version - v1.0
 */

(function ($) {
    "use strict";


//auto close navbar-collapse on click a
    $('.nav-item').on('click', function () {
        $('.navbar-toggler:visible').click();
    });



$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top 
                }, 1000, function() {
                    // Callback after animation
                   
                });
            }
        }
    });

})(jQuery);


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


$(".loader_pre").fadeTo(3000,1).fadeOut(1000);

})(jQuery);