$(document).ready(function() {
    
    particlesJS.load('particles-js', './particles.json', function() {

        console.log('callback - particles.js config loaded');
    });
var foo = true;
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '.scroll-animation', // starting scene, when reaching this element
        offset: -400

      })
    //   .setClassToggle(".scroll-animation", "show")
      .on("enter", () => { 
          $(".scroll-animation").addClass("show");

        })
      .addTo(controller);




});

