export var plugins = {
    "ParticlesJS": cargarParticulas,
    "ScrollMagic": cargarScrollMagic
};


function cargarParticulas() {
    particlesJS.load('particles-js', './resources/js/particles.json', function() {

        console.log('callback - particles.js config loaded');
    });
}

function cargarScrollMagic() {

    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({

        triggerElement: '[name=first-animation]',
        offset: -150
    })
    .on("enter", () => { 

        $("[name=first-animation]").addClass("show");
    })
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '[name=second-animation]',
        offset: 200
    })
    .on("enter", () => { 

        $("[name=second-animation]").addClass("show");
    })
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '[name=third-animation]',
        offset: -150
    })
    .on("enter", () => { 

        $("[name=third-animation]").addClass("show");
    })
    .addTo(controller);
}
