$(function(){
    $('.features_main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:false,
        nextArrow:false,
        dots:true

      });
})
$(function(){
    $('.rating_main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:false,
        nextArrow:false,
        dots:true

      });

      var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '.menubar'
      })

      $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        if(scrolling>100){
          $(".menubar").addClass("jhamela")
        }
        else{
          $(".menubar").removeClass("jhamela")
        }
      });
})