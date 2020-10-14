$(document).ready(function(){
  $(window).scroll(function(){
    var scroll=$(window).scrollTop();
    var winHeight=$(window).height();
    if (scroll > winHeight-130) {
      $("nav").css("background-color", "rgba(231,191,222,1)");}
      else{
        $("nav").css("background-color", "rgba(231,191,222,0)");}
      });

      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });

      $(function(){
        $("a").click(function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;

            $('html, body').animate({
              scrollTop: (($(gato).offset().top)-130)
            }, 900, function(){
              window.location.hash = gato-130;
            });
          }
        });
      });
