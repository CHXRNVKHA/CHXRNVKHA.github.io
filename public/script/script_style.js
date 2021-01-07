$(document).ready(function() {

    // focus for search
    $(".input-search").focusin(function() {
        $(".search").css("border-color","#f9c823");
      });
      $(".input-search").focusout(function() {
        $(".search").css("border-color","#000000");
      });






      var top_value = document.querySelector('.navigation-row').offsetTop;
      var bottom_value = document.querySelector('.footer').offsetTop;

      $(window).scroll(function(){
        
        if ($('body').width() <= 730){

          $('.button-move-top').css('display','none');

        } else {
          top_value = document.querySelector('.navigation-row').offsetTop;
          bottom_value = document.querySelector('.footer').offsetTop;
          var heightDisplay = document.documentElement.clientHeight;


          //buttom-top-script------------//
          if($(this).scrollTop() < bottom_value - heightDisplay){
            $('.button-move-top').css('position','fixed');
            if ($(this).scrollTop() > top_value) {
              $('.button-move-top').fadeIn();
              } else {
              $('.button-move-top').fadeOut();
              }
          }

          if ($(this).scrollTop() >= bottom_value - heightDisplay){
            $('.button-move-top').css('position','absolute');
            $('.button-move-top').fadeIn();
          }
          //----------------------------//

        }

        });
         
        $('.button-move-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
        });


})
