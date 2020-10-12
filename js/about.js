var images = document.getElementsByClassName("aboutSlide");
var dots = document.getElementsByClassName("dot");
var imagesIndex = 1;
pageGallery(imagesIndex);

// Next/previous controls
function changeSlide(n) {
    pageGallery(imagesIndex += n);
}

// Thumbnail image controls
function aboutGallery(n) {
    pageGallery(imagesIndex = n);
}

function pageGallery(n) {
  var i;
  if (n > images.length) {imagesIndex = 1}
  if (n < 1) {imagesIndex = images.length}
  for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  images[imagesIndex-1].style.display = "block";
  dots[imagesIndex-1].className += " active";
}

$(window).on("onresize.content", () => {
	$(".content-article img").css("width", (isMobile || isLowWidth) ? "100%" : "");
});