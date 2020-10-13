function openGallery() { $("#galleryModal").addClass("active"); }
function closeGallery() { $("#galleryModal").removeClass("active"); }

function setActive(index) { $(".grid-gallery").attr("active", index); }
function getActive() { return +($(".grid-gallery").attr("active")); }

function moveSlide(delta) { enableGallery(getActive() + delta); }

function enableGallery(index) {
	setActive(Math.cycle(index, $(".gallery-slide").length));
	
	$($(".gallery-slide").css("display", "none").get(getActive())).css("display", "grid");
	$("#caption").html($($(".demo").removeClass("active").get(getActive())).addClass("active").attr("alt"));
}

$(() => {
	$(".prev-slide").click(() => { moveSlide(-1); });
	$(".next-slide").click(() => { moveSlide(1); });
	$(".grid-gallery").height($(".grid-gallery").width())
	$(".grid-gallery > div").each((index, element) => { $(element).click(() => { enableGallery(index); }); }).click(openGallery);
	$(".slider-preview > div > div").each((index, element) => { $(element).click(() => { /*enableSlide(index);*/ }); });
	$("#closeGallery").click(closeGallery);
});