$(document).ready(function(){
// sider js 
  $(".gellery-carousel").owlCarousel({
    items: 5,
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

 
  $("#sticker").sticky(
        {
        topSpacing:0,  
        widthFromWrapper:false
        }
    );

});
