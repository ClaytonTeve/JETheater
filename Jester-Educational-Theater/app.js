$(".musical_left").on('click', function(){
   $(".hidden-box1").show();
   $("#featured_musicals").hide();
});

$(".musical_right").on('click', function(){
   $(".hidden-box2").show();
   $("#featured_musicals").hide();
});

$('.exit-button').on('click', function(){
   $('.hidden-box1, .hidden-box2').hide();
   $("#featured_musicals").show();
});

