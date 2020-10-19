$(window).on("onload.init_about", () => {
	app.about = {
		set active(index) { $(".about-gallery").attr("active", index); },
		get active() { return +($(".about-gallery").attr("active")); },
		moveSlide(delta) { this.enableSlide(this.active + delta); },
		enableSlide(index) {
			this.active = Math.cycle(index, $(".aboutSlide").length);
			$($(".aboutSlide").css("display", "none").get(this.active)).css("display", "block");
			$($(".dot").removeClass("active").get(this.active)).addClass("active");
		}
	};
	
	$(".prevImg").click(() => { app.about.moveSlide(-1); });
	$(".nextImg").click(() => { app.about.moveSlide(1); });
	$(".dot").each((index, element) => { $(element).click(() => { app.about.enableSlide(index); }); });
	
	app.about.moveSlide(0);
	
	$(window).on({
		"onresize.content": () => {
			$(".content-article img").css("width", (app.main.isMobile || app.main.isLowWidth) ? "100%" : "");
		},
		"onunload.content": () => { app.about = undefined; }
	});
});