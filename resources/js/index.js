import { plugins } from "./plugins.js";

$(document).ready(function() {

    if(localStorage.getItem("mostrar") !== "false") {

        plugins.ParticlesJS();

        $(".intro-btn").click(function() {

            var button = $(this);
            var intro = $(".intro");

            $("audio").get(0).play();
            
            button.find("div").css({
                "animation-name": "sombreado",
                "animation-duration": "0.5s"
            });
            
            button.css("cursor", "not-allowed");
            button.prop("disabled", "true");

            setTimeout(() => {

                button.find("div").css({
                    "animation-name": "",
                    "animation-duration": ""
                });

                $(".content").css("display", "block");

                plugins.ScrollMagic();
            }, 510);

            intro.css("opacity", "0");
            $(".content").css("opacity", "1");

            setTimeout(() => {

                intro.css("display", "none");
                $("body").css("overflow", "visible");
            }, 4100);

            localStorage.setItem("mostrar", "false");
        });
    } else {

        $("body").css("overflow", "visible");
        $(".intro").css("display", "none");
        $(".content").css("display", "block");

        plugins.ScrollMagic();
    }


    $("#easter-egg").click(function() {

        var header = $(this);
        header.attr("class", "animated hinge");

        var animationEnd = (function(el) {
            var animations = {
              animation: 'animationend',
              OAnimation: 'oAnimationEnd',
              MozAnimation: 'mozAnimationEnd',
              WebkitAnimation: 'webkitAnimationEnd',
            };
          
            for (var t in animations) {
              if (el.style[t] !== undefined) {
                return animations[t];
              }
            }
          })(document.createElement('div'));
          
          header.one(animationEnd, function() { header.css("visibility", "hidden"); });
    });
});