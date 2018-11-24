$('.carousel').carousel({
    interval: false
});

$(document).ready(function() {
   $("#carouselExample1").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#carouselExample1").swipeleft(function() {
      $(this).carousel('next');
   });
});
