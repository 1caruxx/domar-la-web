$(document).ready(function() {

    if(localStorage.getItem("mostrar") !== "false") {

        particlesJS.load('particles-js', './resources/js/particles.json', function() {

            console.log('callback - particles.js config loaded');
        });
    
        $(".intro-btn").click(function() {

            var button = $(this);
            var intro = $(".intro");

            $("audio").get(0).play();
            
            button.find("div").css({
                "animation-name": "sombreado",
                "animation-duration": "0.5s"
            });
            
            button.prop("disabled", "true");

            setTimeout(() => {

                button.find("div").css({
                    "animation-name": "",
                    "animation-duration": ""
                });

                $(".content").css("display", "block");
                
            }, 510);

            intro.css("opacity", "0");

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
    }
});