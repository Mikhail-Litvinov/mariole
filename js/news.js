$(window).on("onload.init_news", () => {
	app.news = {
		updateSelection() {
			console.log("Make a view that news were updated");
		}
	};
	
	$(".mobile-nav-button").click(() => { $(".blog-column-right").toggleClass("openned"); });
	
	$(window).on({
		"onunload.content": () => { app.news = undefined; }
	});
});