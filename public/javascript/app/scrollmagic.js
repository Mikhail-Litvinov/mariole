$(document).ready(function () {
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});

    $(".scrollable").each(function () {
        var tween = TweenMax.from($(this), 0.3, {autoAlpha:0, scale:0.5, y:'+100', easy:Linear.easyNone})

        var scene = new ScrollMagic.Scene({
			triggerElement: this,
        })
        .setTween(tween)
        .addTo(controller)
        .addIndicators()
    })
});