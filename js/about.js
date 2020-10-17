function setActive(index) { $(".about-gallery").attr("active", index); }
function getActive() { return +($(".about-gallery").attr("active")); }

function moveSlide(delta) { enableSlide(getActive() + delta); }

function enableSlide(index) {
	setActive(Math.cycle(index, $(".aboutSlide").length));
	
	$($(".aboutSlide").css("display", "none").get(getActive())).css("display", "block");
	$($(".dot").removeClass("active").get(getActive())).addClass("active");
}

$(window).on("onresize.content", () => {
	$(".content-article img").css("width", (isMobile || isLowWidth) ? "100%" : "");
});

$(window).on("onload.about", () => {
	$(".prevImg").click(() => { moveSlide(-1); });
	$(".nextImg").click(() => { moveSlide(1); });
	$(".dot").each((index, element) => { $(element).click(() => { enableSlide(index); }); });
	moveSlide(0);
});