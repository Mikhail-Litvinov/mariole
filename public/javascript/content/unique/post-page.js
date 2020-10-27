$(window).on("onload.init_unique/post-page", () => {
	app.simpleslider = new SimpleSlider();
	
	$(window).one("onunload.content", () => {
		app.simpleslider = undefined;
	});
});