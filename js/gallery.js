$(window).on("onload.init_gallery", () => {
	app.gallery = {
		set active(index) { $(".grid-gallery").attr("active", index); },
		get active() { return +($(".grid-gallery").attr("active")); },
		open() { $("#galleryModal").show().addClass("active"); },
		close() { $("#galleryModal").hide().removeClass("active"); }, // TODO: fix instant hiding
		moveSlide(delta) { this.enable(this.active + delta); },
		enable(index) {
			this.active = Math.cycle(index, $(".gallery-slide").length);
			$($(".gallery-slide").css("display", "none").get(this.active)).css("display", "grid");
			$("#caption").html($($(".demo").removeClass("active").get(this.active)).addClass("active").attr("alt"));
		}
	};
	
	app.gallery.close();
	
	$(".prev-slide").click(() => { app.gallery.moveSlide(-1); });
	$(".next-slide").click(() => { app.gallery.moveSlide(1); });
	$(".grid-gallery").height($(".grid-gallery").width())
	$(".grid-gallery").children("div").each((index, element) => {
		$(element).click(() => {
			app.gallery.enable(index);
			app.gallery.open();
		});
	});
	$(".slider-preview").find("div > div").each((index, element) => { $(element).click(() => { /*enableSlide(index);*/ }); });
	$("#closeGallery").click(() => { app.gallery.close(); });
	
	$(window).on({
		"onunload.content": () => { app.gallery = undefined; }
	});
});