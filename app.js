$(".musical_left").on('click', function(){
   $(".hidden-box1").show('slow');
   $("#featured_musicals").hide('slow');
});

$(".musical_right").on('click', function(){
   $(".hidden-box2").show('slow');
   $("#featured_musicals").hide('slow');
});

$('.exit-button').on('click', function(){
   $('.hidden-box1, .hidden-box2').hide('slow');
   $("#featured_musicals").show('slow');
});

