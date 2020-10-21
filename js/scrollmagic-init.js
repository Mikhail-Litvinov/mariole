$(document).ready(function () {
    //Init scrollmagic
    var controller = new ScrollMagic.Controller();

    //scene
    new ScrollMagic.Scene({
        triggerElement: '#scroll-1'
    })
    .setClassToggle('.scroll1', 'fade-in')
    .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: '#scroll-2'
    })
    .setClassToggle('.scroll2', 'fade-in')
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#scroll-3'
    })
    .setClassToggle('.scroll3', 'fade-in')
    .addTo(controller);
});