$(document).ready(function () {
	$(".grid-gallery").height($(".grid-gallery").width())
})

function openGallery() {
	document.getElementById('galleryModal').classList.add("active");
}
  
document.getElementById("closeGallery").onclick = function () {
	document.getElementById('galleryModal').classList.remove("active");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
	showSlides(slideIndex += n);
}
  

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("gallery-slide");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "grid";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
}

$(() => {
	// $(".slider-preview").overlayScrollbars({
		// overflowBehavior : {
			// x : "hidden",
			// y : "scroll"
		// },
	// });
});