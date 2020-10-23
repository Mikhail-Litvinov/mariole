$(window).on("onload.init_unique/product", () => {
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
			if(!app.templates.product) {
				$.when(
					$.get("/public/templates/subtemplates/product/parameter.tpl"),
					$.get("/public/templates/subtemplates/product/slide.tpl"),
					$.get("/public/templates/subtemplates/product/slide_preview.tpl")
				).then((parameter, slide, slidePreview) => {
					app.templates.product = {
						_parameter: parameter[0],
						createParameter(name, value) {
							return this._parameter
								.replace("${name}", name)
								.replace("${value}", value);
						},
						_slide: slide[0],
						createSlide(img) {
							return this._slide
								.replace("${img}", img);
						},
						_slidePreview: slidePreview[0],
						createSlidePreview(img) {
							return this._slidePreview
								.replace("${img}", img);
						}
					};
					this.load();
				});
				return;
			}
			
			$.getJSON(`/data/database/product_info/${app.translation.language.code}/${this.article}`, (data) => {
				app.navigation.performContentTitle(data.language.name);
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
		get article() { return +app.navigation.path[1]; },
		updatePrice() {
			$("#product-data-price").html((this.data.prices[app.translation.currency.name] / 100).toFixed(2) + ` ${app.translation.currency.sign}`);
		},
		buildImageCarousel() {
			for(let img of this.data.images) {
				$(".product-slider:first").append($(app.templates.product.createSlide(img)));
				$(".product-preview:first").children("div").append($(app.templates.product.createSlidePreview(img)));
			}
			if($(".product-slide").length > 1) {
				$(".product-preview .demo").each((index, element) => { $(element).click(() => { this.enableSlide(index); }); });
			} else $(".prev-slide, .next-slide, .product-preview").remove();
			this.moveSlide(0);
		},
		buildParamsList() {
			let newParamsList = "";
			this.data.params.sort((first, second) => first.priority - second.priority).forEach((data) => {
				newParamsList += app.templates.product.createParameter(data.name, data.value + (data.unit ? `&nbsp;${data.unit}` : ""));
			});
			$(".params").html(newParamsList);
		}
	};
	
	$(".prev-slide").click(() => { app.product.moveSlide(-1); });
	$(".next-slide").click(() => { app.product.moveSlide(1); });
	$("#add-to-cart").click(() => { app.cookies.cart.addItem(app.product.article); });
	
	app.product.load();
	
	$(window).on({
		//"onlanguagechange.content": () => { app.product.load(); },
		"oncountrychange.content": () => { app.product.updatePrice(); },
		"onresize.content": () => {
			let mobile = (app.main.isMobile || app.main.isLowWidth);
			$("#product-page-wrapper").toggleClass("wrap", mobile).toggleClass("nowrap", !mobile);
		},
		"onunload.content": () => { app.product = undefined; }
	});
});