productData = {};
isProductImagesLoaded = false;

function setActive(index) { $(".product-slider-wrapper").attr("active", index); }
function getActive() { return +($(".product-slider-wrapper").attr("active")); }

function moveSlide(delta) { enableSlide(getActive() + delta); }

function enableSlide(index) {
	setActive(Math.cycle(index, $(".product-slide").length));
	
	$($(".product-slide").css("display", "none").get(getActive())).css("display", "grid");
	$($(".demo").removeClass("active").get(getActive())).addClass("active");
}

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

function getProductArticle() { return path[1]; }

function updateProductPrice() { $("#product-data-price").html(`${productData[countries.curname]} ${countries.cursign}`); }

function updateProductImageCarousel() {
	for(let i = 0, img = productData["i0"]; img; img = productData[`i${++i}`]) {
		let slide = $(`<div class="product-slide fade"><img src="/img/products-images/${img}.jpg" width="100%"></div>`);
		$(".product-slider").append(slide);
		
		let previewSlide = $('<div class="col-1-4 flex-column overflow-hidden"></div>');
		$(".product-preview > div").append(previewSlide.append($(`<img src="/img/products-previews/${img}.jpg" width="100%" class="demo">`)));
	}
	if($(".product-slide").length > 1) $(".product-preview .demo").each((index, element) => { $(element).click(() => { enableSlide(index); }); });
	else $(".prev-slide, .next-slide, .product-preview").remove();
	moveSlide(0);
}

$(window).on("onresize.content", () => {
	$("#product-page-wrapper").toggleClass("wrap", isMobile || isLowWidth).toggleClass("nowrap", !(isMobile || isLowWidth));
});

$(() => {
	$(window).on("onlanguagechange", loadProductData);
	$(window).on("oncountrychange", updateProductPrice);
	$(".prev-slide").click(() => { moveSlide(-1); });
	$(".next-slide").click(() => { moveSlide(1); });
	
	loadProductData();
});