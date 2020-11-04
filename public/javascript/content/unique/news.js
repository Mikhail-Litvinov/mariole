$(window).on("onload.init_unique/news", () => {
	app.news = {
		updateSelection() {
			console.log("Make a view that news were updated");
		}
	};
	
	$(".mobile-nav-button").click(() => { $(".blog-column-right").toggleClass("openned"); });
	$(".js-read-more-btn").click((evt) => {
		let button = $(evt.currentTarget);
		let content = button.parent().siblings(".news-card-content");
		let [lastX, lastY] = [window.scrollX, window.scrollY];
		
		content.children(".news-card-content-article").height("auto");
		content.height(content[0].scrollHeight);
		
		window.scrollTo(lastX, lastY);
		
		button.siblings(".js-hide-btn").show();
		button.hide();
	});
	$(".js-hide-btn").click((evt) => {
		let button = $(evt.currentTarget);
		let content = button.parent().siblings(".news-card-content");
		
		content.height("");
		content.children(".news-card-content-article").height("");
		
		button.siblings(".js-read-more-btn").show();
		button.hide();
	});
	
	$(window).on({
		"onunload.content": () => { app.news = undefined; }
	});
	
	app.scrollmagic.update();
});