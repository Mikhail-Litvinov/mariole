$(window).on("onload.init_unique/post-page", () => {
	app.simpleslider = new SimpleSlider();
	
	$(window).on("onunload.content", () => {
		app.simpleslider = undefined;
	});
});