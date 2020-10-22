$(window).on("onload.app_scrollmagic", () => {
	app.scrollmagic = {
		_instance: undefined,
		start() {
			this._instance = new ScrollMagic.Controller();
		},
		update(depth = 1) {
			this.stop();
			this.start();
			for(let level = 1; level <= depth; level++) {
				new ScrollMagic
					.Scene({ triggerElement: `#scroll-${level}` })
					.setClassToggle(`.scroll${level}`, "fade-in")
					.addTo(this._instance);
			}
		},
		stop() {
			this._instance?.destroy();
		}
	};
});