$(document).ready(function(){
    $('.headphones__slider').slick({
        arrows:true,
        dots:true,
        infinite: false,
        responsive: [
            {
                breakpoint: 400,
            settings: { 
                arrows:false,
            }
            }]
    });
}); 

$(document).ready(function(){
    $(".products__slider .owl-carousel").owlCarousel({
        items: 4,
        nav:true,
        slideBy: 4,
        nav:["",""],
        responsive: {
            0: {
                items:1.5,
                nav:false,
                margin:50,
            },
            400: {
                items:4,
                nav:true,
            }
        }
    });
});

$(document).ready(function(){
    $('.icon__b').click(function(event){
        $('icon__b, .menu-header').toggleClass('show');
    });
});