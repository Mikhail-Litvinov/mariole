$(window).on("onload.app_scrollmagic", () => {
	app.scrollmagic = {
		_controller: undefined,
		_tweens: undefined,
		_scenes: undefined,
		init() {
			this._controller = new ScrollMagic.Controller({
				globalSceneOptions: { triggerHook: "onEnter" }
			});
		},
		start() {
			this._tweens = [];
			this._scenes = [];
		},
		update() {
			this.stop();
			this.start();
			for(let element of $(".scrollable")) {
				let tween = TweenMax.from($(element), 0.3, {
					autoAlpha: 0,
					scale: 0.5,
					y: "+100",
					easy: Linear.easyNone
				});
				this._tweens.push(tween);
				
				let scene = new ScrollMagic
					.Scene({ triggerElement: element })
					.setTween(tween)
					.addIndicators();
				this._scenes.push(scene);
				
				this._controller.addScene(scene);
			}
		},
		stop() {
			for(let tween of this._tweens) tween.invalidate();
			for(let scene of this._scenes) scene.remove();
		}
	};
	
	app.scrollmagic.init();
	app.scrollmagic.start();
});