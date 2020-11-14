class GenericSimpleSlider {
	constructor(selector, images) {
		let slider = $("<div class=\"js-simpleslider\">");
		
		for(let image of images) {
			slider.append(`<div class="js-simpleslider-slide"><img src="${image}" alt="" width="100%"/></div>`);
		}
		
		slider.append("<div class=\"js-simpleslider-previous-slide\">&#10094;</div>");
		slider.append("<div class=\"js-simpleslider-next-slide\">&#10095;</div>");
		
		$(selector).html("").append(slider);
	}
}

class SimpleSlider {
	constructor(config = {}) {
		config = {
			sliderSelector: ".js-simpleslider",
			slideSelector: ".js-simpleslider-slide",
			previousSlideButtonSelector: ".js-simpleslider-previous-slide",
			nextSlideButtonSelector: ".js-simpleslider-next-slide",
			showStyle: "block",
			hideStyle: "none",
			defaultActive: 0,
			...config
		};
		
		this.elements = {
			slider: $(config.sliderSelector),
			slides: $(config.sliderSelector).find(config.slideSelector)
		};
		this.arrows = {
			previous: this.elements.slider.find(config.previousSlideButtonSelector),
			next: this.elements.slider.find(config.nextSlideButtonSelector)
		};
		this.styles = {
			show: config.showStyle,
			hide: config.hideStyle
		};
		this.active = config.defaultActive;
		
		this.init();
	}
	
	init() {
		this.arrows.previous.on("click.simpleslider", () => { this.move(-1); });
		this.arrows.next.on("click.simpleslider", () => { this.move(1); });
		this.enable(this.active);
	}
	
	set active(index) { this.elements.slider.attr("active", +index); }
	get active() { return +this.elements.slider.attr("active"); }
	
	move(delta) {
		this.enable(Math.cycle(this.active + delta, this.elements.slides.length));
	}
	
	enable(index) {
		this.active = index;
		this.elements.slides.css("display", this.styles.hide).get(index).style.display = this.styles.show;
	}
}