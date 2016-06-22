$(document).ready(function(){
  $('.carousel').slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: "unslick" // unslicks at a given breakpoint (disables the slideshow)
        }
      ]
  });
});

  // activates tabs if the window is wider than 768px
  $(function() {
    if ($(window).width() > 768) {
      $( "#tabs" ).tabs();
    }
  });


  // on window resize check if it's wider than 768px, if it's the case, activate tabs, if not disable them
  $( window ).resize(function() {
  if ($(window).width() > 768) {
      $( "#tabs" ).tabs();
    } else {
      $( "#tabs" ).tabs("option","disabled", [0,1,2,3]);
    }
});