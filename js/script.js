$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter:'*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
})

//this code in here will execture when the page is ready
$(document).ready(function(){
    
    //code for the pictures galery 
    //https://github.com/nicinabox/superslides
    $('#slides').superslides({
        animation:'fade',
        play: 5000,
        pagination: false
    });

    //call type.min.js to change the text 
    var typed = new Typed(".typed",{
        strings:["junior web developer","web developer","fullstack web developer"],
        typeSpeed: 70, 
        loop: true, 
        startDelay: 1000, 
        showCursor: false
    });

    //for the carousel
    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:5
    //         }
    //     }
    // })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

    $("[data-fancybox]").fancybox
    
    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        let selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false; 
    });

    $("#navigation li a").click(function(e){
        e.preventDefault();

        let targetElement = $(this).attr("href");
        let targetPosition = $(targetElement).offset().top; 
        $("html, body").animate({scrollTop: targetPosition - 50}, "1500");
    });



    const nav = $("#navigation");
    const navTop = nav.offset().top;
    
    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){
        let body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() +"px")
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0)
            body.removeClass("fixedNav");
        }
    }

}); 