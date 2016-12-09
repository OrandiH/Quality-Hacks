$(document).ready(function(){
      $('.slider').slider({
      	full_width: true, 
      	height: 'calc(100vh - 80px)', 
      	indicators: false
      });

      $('.left-slide-navi').click(function() {
      	$('.slider').slider('prev');
      });
      $('.right-slide-navi').click(function() {
      	$('.slider').slider('next');
      });
      var $slides = $('.home');
      var colors = ['#1E7F00','#FF5F00', '#440058'];
      var count = colors.length;
      var slideshow = function() {
            $slides
                  .css('background-color', colors[Math.floor(Math.random() * count)])
                  // .css('background','linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("' + images[Math.floor(Math.random() * count)] + '")')
                  .show(0, function() {
                        setTimeout(slideshow, 2500);
                  });
      };
       
      slideshow();
});