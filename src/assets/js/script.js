$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        // stagePadding: 50,
        loop:true,
        // margin:10,
        nav:true,
        navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
      ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:6,
                loop:false,
            }
        }
    })

});