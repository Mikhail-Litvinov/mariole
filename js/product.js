productData = {};
isProductImagesLoaded = false;

function setActive(index) { $("div.product-slider-wrapper").attr("active", index); }
function getActive() { return +($("div.product-slider-wrapper").attr("active")); }

// TODO: починить сломанную карусель
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("product-slide");
    var dots = document.getElementsByClassName("demo");
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
}

// TODO: убрать этот срам
$(window).ready(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() <= 1024) {
      $("#product-page-wrapper").removeClass("nowrap").addClass("wrap")
  } else {
      $("#product-page-wrapper").removeClass("wrap").addClass("nowrap")
  }
}).resize(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() <= 1024) {
      $("#product-page-wrapper").removeClass("nowrap").addClass("wrap")
  } else {
      $("#product-page-wrapper").removeClass("wrap").addClass("nowrap")
  }
})

function loadProductData() {
	$.getJSON(`/data/database/product_info/${language.get("lang-code")}/${getProductArticle()}`, (data) => {
		$("title").html(data["name"]);
		$("#product-data-name").html(data["name"]);
		$("#product-data-description").html(data["description"]);
		
		productData = data;
		if(!isProductImagesLoaded) {
			isProductImagesLoaded = true;
			updateProductImageCarousel();
		}
		updateProductPrice();
	});
}

function getProductArticle() {
	return path[1];
}

function updateProductPrice() {
	$("#product-data-price").html(`${productData[countries.curname]} ${countries.cursign}`);
}

function updateProductImageCarousel() {
	for(let i = 0, img = productData["i0"]; img; img = productData[`i${++i}`]) {
		let slide = $(`<div class="product-slide fade"><img src="/img/products-images/${img}.jpg" width="100%"></div>`);
		$(".product-slider").append(slide);
		
		let previewSlide = $('<div class="col-1-4 flex-column overflow-hidden"></div>');
		previewSlide.append($(`<img src="/img/products-previews/${img}.jpg" width="100%" class="demo">`));
		$(".product-preview > div").append(previewSlide);
	}
	if($(".product-slider > .product-slide").length > 1) {
		$(".product-preview img.demo").each((index, element) => { $(element).click(() => { enableSlide(index); }); });
	} else {
		$("a.prev-slide").remove();
		$("a.next-slide").remove();
		$("div.product-preview").remove();
	}
	moveSlide(0);
}

$(() => {
	$("a.prev-slide").click(() => { moveSlide(-1); });
	$("a.next-slide").click(() => { moveSlide(1); });
	$(window).on("onlanguagechange", loadProductData);
	$(window).on("oncountrychange", updateProductPrice);
	
	loadProductData();
});