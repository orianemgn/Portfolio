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
    })

}); 