$(document).ready(function() {

    particlesJS.load('particles-js', './scripts/particles.json', function() {

        console.log('callback - particles.js config loaded');
    });

    $("button").click(function() {

        var button = $(this);

        console.log($(this));

        button.find("div").css({
            "animation-name": "sombreado",
            "animation-duration": "0.5s"
        });

        setTimeout(function() {

            button.find("div").css({
                "animation-name": "",
                "animation-duration": ""
            });
        }, 510);
    });
});