$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

        var typed = new Typed(".typed", 
        {strings: ["Software Engineer.", "Web Developer.", "Learner."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        nav:true,
        responsive:{ 
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });


    //because it is reloading at the top of the page but we need it to load at a certain point of the page
    var skillsTopOffset = $(".skillsSection").offset().top; //in jquery this offset method gets the value of the horizontally and vertically 
    console.log(skillsTopOffset);
    $(window).scroll(function() {       //when window is scrolled do this
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                //options
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }
    });
    ////calling countUp function from the countUp file right now its not working so come back later
    //$(".counter").countUp(200);


    ///for fancy cdn
    ///not working 
   // $("[data-fancybox]").fancybox();

    //calling isotope function
    $(".item").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

});