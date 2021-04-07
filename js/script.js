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
    })

}); 