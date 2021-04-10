$(document).ready(function(){
// sider js 
  $(".carosel").owlCarousel({
    items: 3,
    loop:true,
    autoplay: true,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    autoplayTimeout:5000,
    smartSpeed:1000,
    margin: 40,
    center: true,
});

  $(".testimonial-carosel").owlCarousel({
    items: 1,
    loop:true,
    autoplay: false,
    dots: false,
    nav:true,
    mouseDrag: true,
    touchDrag: true,
    autoplayTimeout:5000,
    margin: 40,
    center: true,
    smartSpeed:1000,
    navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
      responsive:{
        0:{
            dots: true,
            nav:false,
        },
        767:{
            dots: true,
            nav:false,
        },
        1000:{
            dots:false, 
            nav:true,
        }
    }
});

 
  $("#sticker").sticky(
        {
        topSpacing:0,  
        widthFromWrapper:false
        }
    );

});
