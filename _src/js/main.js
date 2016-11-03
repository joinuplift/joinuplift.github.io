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

$(function() {
  $('button.submit.submit-mail').on('click', function(){
        $.ajax({
            url: "https://formspree.io/contact@joinuplift.org", 
            method: "POST",
            data: {message: "This person would like to learn more about https://joinuplift.org"},
            dataType: "json"
        }).done(function(){
            $('.contact-form').html('<p style="text-align: center; padding: 5px;background: #CCFFCC;">Message sent!</p>');
        }).fail(function(){
            $('.contact-form').html('<p style="text-align: center; padding: 5px;background: #FF9999;">Oops, something is wrong, your message was not sent!</p>');
        });
    });
});
