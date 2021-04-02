$(document).ready(function(){
// sider js 
  $(".hero-slider").owlCarousel({
    items: 1,
    nav: true,
    loop:true,
    autoplay: true,
    dots: false,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    mouseDrag: true,
    touchDrag: false,
    autoplayTimeout:5000 
});

 
  $("#sticker").sticky(
        {
        topSpacing:0,  
        widthFromWrapper:false
        }
    );

});
