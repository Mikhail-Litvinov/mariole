class GalleryGenerator {
	static generate(name, images) {
		let gallery = $("<div>");
		
		for(let i = 0; i < images.length; i++) {
			let item = $("<div>").addClass("gallery-item").attr("item", i);
			item.append(`<img src="/public/images/gallery/${name}/prev/${images[i]}.jpg" alt="" width="100%"/>`);
			item.click(() => {
				app.gallery.slider.open();
				app.gallery.slider.enable(i);
			});
			gallery.append(item);
		}
		
		return gallery;
	}
}

class SliderGenerator {
	static generate(name, images) {
		let slider = $("<div>");
		
		for(let i = 0; i < images.length; i++) {
			let slide = $("<div>").addClass("gallery-slide").attr("slide", i);
			slide.append(`<img src="/public/images/gallery/${name}/${images[i]}.jpg" alt="" width="100%"/>`);
			slider.append(slide);
		}
		
		$(`<span class="prev-slide">&#10094;</span>`).click(() => { app.gallery.slider.move(-1); }).appendTo(slider);
		$(`<span class="next-slide">&#10095;</span>`).click(() => { app.gallery.slider.move(1); }).appendTo(slider);
		
		return slider;
	}
}

$(window).on("onload.init_unique/gallery", () => {
	app.gallery = {
		slider: {
			slider: $("#js-slider"),
			slides: undefined,
			closeTimer: undefined,
			set active(index) { this.slider.attr("active", index); },
			get active() { return +(this.slider.attr("active")); },
			open() {
				$("#js-slider-wrapper").show().addClass("active");
				$(window).on("keydown.gallery", (evt) => {
					switch(evt.keyCode) {
						case 27: this.close(); break;
						case 37: this.move(-1); break;
						case 39: this.move(1); break;
					}
				});
				clearTimeout(this.closeTimer);
			},
			close() {
				$("#js-slider-wrapper").removeClass("active");
				this.closeTimer = setTimeout(() => { $("#js-slider-wrapper").hide(); }, 500);
				$(window).off("keydown.gallery");
			},
			move(delta) { this.enable(this.active + delta); },
			enable(index) {
				this.active = Math.cycle(index, this.slides.length);
				this.slides.hide().filter(`[slide="${this.active}"]`).show();
			}
		},
		galleries: undefined,
		route(specificGallery) {
			if(!this.galleries) {
				$.getJSON({
					url: "/public/templates/subtemplates/gallery/galleries.json",
					success: (data) => {
						this.galleries = data;
						this.route(specificGallery);
					}
				});
				return;
			}
			
			if(this.galleries[specificGallery]) {
				let images = this.galleries[specificGallery];
				
				let gallery = GalleryGenerator.generate(specificGallery, images);
				$("#js-gallery-wrapper").children().remove();
				gallery.children().detach().appendTo("#js-gallery-wrapper");
				
				let slider = SliderGenerator.generate(specificGallery, images);
				$("#js-slider").children().remove();
				this.slider.slides = slider.children("[slide]");
				slider.children().detach().appendTo("#js-slider");
				
				$("#js-hub-wrapper").hide();
				$("#js-gallery-wrapper").show();
			} else {
				$("#js-gallery-wrapper").hide();
				$("#js-hub-wrapper").show();
			}
		}
	};
	
	$("#js-close-slider").click(() => { app.gallery.slider.close(); });
	
	$(window).on({
		"onunload.content": () => { app.gallery = undefined; }
	});
});