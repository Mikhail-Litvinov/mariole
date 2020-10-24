$(window).on("onload.init_unique/home", () => {
	app.carousel = new OJCarousel();
	app.carousel.start();
	
	app.scrollmagic.update();
	
	$(window).on({
		"onresize.content": () => {
			app.carousel.height = $(window).height() - $("#headerContainer").height();
		},
		"onunload.content": () => {
			$(window).off(".ojcarousel");
			app.carousel.kill({ clearEvents: false });
			app.carousel = undefined;
		}
	});
});