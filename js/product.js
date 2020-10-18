$(window).on("onload.init_product", () => {
	app.product = {
		data: {},
		areImagesLoaded: false,
		set active(index) { $(".product-slider-wrapper").attr("active", index); },
		get active() { return +($(".product-slider-wrapper").attr("active")); },
		moveSlide(delta) { this.enableSlide(this.active + delta); },
		enableSlide(index) {
			this.active = Math.cycle(index, $(".product-slide").length);
			$($(".product-slide").css("display", "none").get(this.active)).css("display", "grid");
			$($(".demo").removeClass("active").get(this.active)).addClass("active");
		},
		load() {
			if(!app.templates.productParamItem) {
				$.get("/tpl/pages/product_parameter.tpl", (data) => {
					app.templates.productParamItem = data;
					this.load();
				});
				return;
			}
			$.getJSON(`/data/database/product_info/${app.translation.language.code}/${this.article}`, (data) => {
				$("title").html(data.language.name);
				$("#product-data-name").html(data.language.name);
				$("#product-data-description").html(data.language.description);
				
				this.data = data;
				if(!this.areImagesLoaded) {
					this.areImagesLoaded = true;
					this.buildImageCarousel();
				}
				this.buildParamsList();
				this.updatePrice();
			});
		},
		get article() { return app.navigation.path[1]; },
		updatePrice() {
			$("#product-data-price").html((this.data.prices[app.translation.currency.name] / 100).toFixed(2) + ` ${app.translation.currency.sign}`);
		},
		buildImageCarousel() {
			for(let img of this.data.images) {//let i = 0, img = productData["i0"]; img; img = productData[`i${++i}`]) {
				let slide = $(`<div class="product-slide fade"><img src="/img/products-images/${img}.jpg" width="100%"></div>`);
				$(".product-slider").append(slide);
				
				let previewSlide = $('<div class="col-1-4 flex-column overflow-hidden"></div>');
				$(".product-preview > div").append(previewSlide.append($(`<img src="/img/products-previews/${img}.jpg" width="100%" class="demo">`)));
			}
			if($(".product-slide").length > 1) $(".product-preview .demo").each((index, element) => { $(element).click(() => { this.enableSlide(index); }); });
			else $(".prev-slide, .next-slide, .product-preview").remove();
			this.moveSlide(0);
		},
		buildParamsList() {
			let newParamsList = $("<div>");
			this.data.params.sort((first, second) => first.priority - second.priority).forEach((data) => {
				let param = $(app.templates.productParamItem);
				param.find(".param-name > p").html(data.name);
				param.find(".params-info > p").html(data.value + (data.unit ? `&nbsp;${data.unit}` : ""));
				newParamsList.append(param);
			});
			$(".params").html(newParamsList.html());
		}
	};
	
	$(".prev-slide").click(() => { app.product.moveSlide(-1); });
	$(".next-slide").click(() => { app.product.moveSlide(1); });
	$("#add-to-cart").click(() => { cookies.addItemToCart(app.product.article, 1); });
	
	app.product.load();
	
	$(window).on({
		"onlanguagechange.content": () => { app.product.load(); },
		"oncountrychange.content": () => { app.product.updatePrice(); },
		"onresize.content": () => {
			$("#product-page-wrapper").toggleClass("wrap", app.isMobile || app.isLowWidth).toggleClass("nowrap", !(app.isMobile || app.isLowWidth));
		},
		"onunload.content": () => { app.product = undefined; }
	});
});