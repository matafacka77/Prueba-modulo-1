$(document).ready(function(){
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

    })
