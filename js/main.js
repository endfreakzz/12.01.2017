 $(function(){
    var stt_is_shown = false;
    $(window).scroll(function(){
       var win_height = 300;
       var scroll_top = $(document).scrollTop(); 
       if (scroll_top > win_height && !stt_is_shown) {
          stt_is_shown = true;
          $(".back-link").fadeIn();
       } else if (scroll_top < win_height && stt_is_shown) {
          stt_is_shown = false;
          $(".back-link").fadeOut();
       }
   });
   $(".back-link").click(function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 1500);
    });
 });