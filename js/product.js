productParamTemplate = window["productParamTemplate"];
productData = undefined;
areProductImagesLoaded = undefined;

function setActive(index) { $(".product-slider-wrapper").attr("active", index); }
function getActive() { return +($(".product-slider-wrapper").attr("active")); }

function moveSlide(delta) { enableSlide(getActive() + delta); }

function enableSlide(index) {
	setActive(Math.cycle(index, $(".product-slide").length));
	
	$($(".product-slide").css("display", "none").get(getActive())).css("display", "grid");
	$($(".demo").removeClass("active").get(getActive())).addClass("active");
}

function loadProductData() {
	if(!productParamTemplate) {
		$.get("/tpl/pages/product_parameter.tpl", (data) => {
			productParamTemplate = data;
			loadProductData();
		});
		return;
	}
	$.getJSON(`/data/database/product_info/${language.code}/${getProductArticle()}`, (data) => {
		$("title").html(data.language.name);
		$("#product-data-name").html(data.language.name);
		$("#product-data-description").html(data.language.description);
		
		productData = data;
		if(!areProductImagesLoaded) {
			areProductImagesLoaded = true;
			updateProductImageCarousel();
		}
		updateProductParamsList();
		updateProductPrice();
	});
}

function getProductArticle() { return path[1]; }
function updateProductPrice() { $("#product-data-price").html((productData.prices[currency.name] / 100).toFixed(2) + ` ${currency.sign}`); }

function updateProductImageCarousel() {
	for(let img of productData.images) {//let i = 0, img = productData["i0"]; img; img = productData[`i${++i}`]) {
		let slide = $(`<div class="product-slide fade"><img src="/img/products-images/${img}.jpg" width="100%"></div>`);
		$(".product-slider").append(slide);
		
		let previewSlide = $('<div class="col-1-4 flex-column overflow-hidden"></div>');
		$(".product-preview > div").append(previewSlide.append($(`<img src="/img/products-previews/${img}.jpg" width="100%" class="demo">`)));
	}
	if($(".product-slide").length > 1) $(".product-preview .demo").each((index, element) => { $(element).click(() => { enableSlide(index); }); });
	else $(".prev-slide, .next-slide, .product-preview").remove();
	moveSlide(0);
}

function updateProductParamsList() {
	let newParamsList = $("<div>");
	productData.params.sort((first, second) => first.priority - second.priority).forEach((data) => {
		let param = $(productParamTemplate);
		param.find(".param-name > p").html(data.name);
		param.find(".params-info > p").html(data.value + (data.unit ? `&nbsp;${data.unit}` : ""));
		newParamsList.append(param);
	});
	$(".params").html(newParamsList.html());
}

$(window).on("onresize.content", () => {
	$("#product-page-wrapper").toggleClass("wrap", isMobile || isLowWidth).toggleClass("nowrap", !(isMobile || isLowWidth));
});

$(window).on("onunload.content", () => {
	areProductImagesLoaded = undefined;
	productData = undefined;
});

$(window).on("onload.product", () => {
	$(".prev-slide").click(() => { moveSlide(-1); });
	$(".next-slide").click(() => { moveSlide(1); });
	$("#add-to-cart").click(() => { cookies.addItemToCart(productData.data.article, 1); });
	
	loadProductData();
	$(window).on({
		"onlanguagechange.content": loadProductData,
		"oncountrychange.content": updateProductPrice
	});
});