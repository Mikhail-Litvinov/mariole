class OJCarousel {
	slideCache = {}; // Don't have to use selectors any time carousel need its slide
	timers = {
		slide: undefined,
		auto: undefined
	};
	isSwitchable = true; // Can user switch slide with arrows at the moment
	isDragging = false; // Is user dragging slide at the moment
	originalX = 0; // Cursor X when dragging started
	width = 0; // Slide container's width
	set height(_height) { this.elements.carousel.css("height", _height); };
	get currentPercentage() { return +this.slideCache.active.attr("style").match(/translateX\((.+?)%\)/i)[1]; };
	set currentPercentage(_percentage) {
		this.transform(this.slideCache.next, _percentage + 100);
		this.transform(this.slideCache.active, _percentage);
		this.transform(this.slideCache.previous, _percentage - 100);
	}
	
	constructor(config = {}) {
		config = {
			carouselSelector: "#carousel",
			slideSelector: ".slide",
			defaultActive: 0,
			mobileDragBorder: 0.2,
			doAutoMove: true,
			slideTimeout: 6000,
			pauseTimeout: 5000,
			animationTimeout: 600,
			dragCursor: "grabbing",
			undragCursor: "",
			height: $(window).height(),
			previousSlideButtonSelector: "#previous-slide-btn",
			nextSlideButtonSelector: "#next-slide-btn",
			fallPercentagePreprocessor: x => x,
			movePercentagePreprocessor: x => x,
			...config
		};
		
		let carousel = $(config.carouselSelector).first();
		this.elements = {
			carousel: carousel,
			slides: carousel.find(config.slideSelector),
			previousSlideButton: $(config.previousSlideButtonSelector),
			nextSlideButton: $(config.nextSlideButtonSelector)
		};
		this.timeouts = {
			slide: config.slideTimeout,
			pause: config.pauseTimeout,
			animation: config.animationTimeout
		};
		this.cursors = {
			drag: config.dragCursor,
			undrag: config.undragCursor
		};
		this.percentagePreprocessors = {
			move: config.movePercentagePreprocessor,
			fall: config.fallPercentagePreprocessor
		};
		
		this.active = config.defaultActive;
		this.mobileDragBorder = config.mobileDragBorder;
		this.doAutoMove = config.doAutoMove;
		this.height = config.height;
		
		this.init();
	}
	
	init(previousSlideButtonSelector, nextSlideButtonSelector) {
		this.elements.slides.css("transform", "translateX(100%)");
		this.count = this.elements.slides.length;
		this.recacheSlides();
		this.currentPercentage = 0;
		
		for(let some of this.elements.carousel.find("*")) { // Unbind defaults from every slide and arrows
			some.setAttribute("draggable", "false");
			some.onselectstart = () => false;
			some.ondragstart = () => false;
		};
		
		for(let slide of this.elements.slides) {
			slide.addEventListener("mousedown", (evt) => { this.onStartDrag(evt); }, { passive: true });
			slide.addEventListener("touchstart", (evt) => { this.onPrepareDragMobile(evt); }, { passive: true });
			slide.addEventListener("touchmove", (evt) => { this.onDragMobile(evt); }, { passive: true });
		};
		
		$(window).on({
			"mousemove.ojcarousel": (evt) => { this.onDrag(evt); }, // Desktop dragging
			"mouseup.ojcarousel touchend.ojcarousel": (evt) => { this.onStopDrag(evt); } // Universal drag stop
		});
		
		$(this.elements.previousSlideButton).on("click.ojcarousel", () => {
			if(!this.isSwitchable) return;
			
			this.isSwitchable = false;
			this.stop();
			this.move(-1);
			this.start(this.timeouts.pause + this.timeouts.animation);
		});
		
		$(this.elements.nextSlideButton).on("click.ojcarousel", () => {
			if(!this.isSwitchable) return;
			
			this.isSwitchable = false;
			this.stop();
			this.move(1);
			this.start(this.timeouts.pause + this.timeouts.animation);
		});
	}
	
	
	start(timeout = this.timeouts.pause) {
		this.timers.auto = setTimeout(() => { this.autoMove(); }, timeout);
		return this;
	}
	
	pause() {
		clearTimeout(this.timers.auto);
		return this;
	}
	
	inanimate() {
		cancelAnimationFrame(this.timers.slide);
		return this;
	}
	
	stop() {
		this.pause().inanimate();
		return this;
	}
	
	validate(delta) {
		return Math.cycle(this.active + delta, this.count);
	}
	
	setCursor(newCursor = this.cursors.undrag) {
		$("html:first").add(this.elements.carousel).css("cursor", newCursor);
	}
	
	autoMove() { // Intervaled switching slide forward
		if(!this.doAutoMove) return;
		this.isSwitchable = false;
		this.move(1); // Move slides forward
		this.timers.auto = setTimeout(() => {
			this.stop();
			this.autoMove();
		}, this.timeouts.slide + this.timeouts.animation); // Restart function after some time
	}
	
	move(delta) { // Switch slide
		this.currentPercentage = 0;
		
		this.active = this.validate(delta);
		this.recacheSlides();
		
		let start = performance.now();
		this.timers.slide = requestAnimationFrame((time) => {
			this.translate(Math.sign(delta) * 100, start, start + this.timeouts.animation, time, this.percentagePreprocessors.move);
		});
	}
	
	translate(from, start, end, now, percentagePreprocessor) {
		if(now <= end) {
			let percentage = percentagePreprocessor(from * (1 - (now - start) / (end - start)));
			this.currentPercentage = Math.bound(percentage, 0, from);
			this.timers.slide = requestAnimationFrame((time) => { this.translate(from, start, end, time, percentagePreprocessor); });
		} else {
			this.currentPercentage = 0;
			this.isSwitchable = true;
		}
	}
	
	transform(slide, percentage) { // Oh shit it's CSS
		slide.css("transform", `translateX(${percentage}%)`);
	}
	
	fall() {
		let start = performance.now();
		let duration = Math.abs(this.timeouts.animation * this.currentPercentage * 0.01);
		requestAnimationFrame((time) => {
			this.translate(this.currentPercentage, start, start + duration, time, this.percentagePreprocessors.fall);
		});
	}
	
	recacheSlides() {
		this.slideCache.previous = $(this.elements.slides[this.validate(-1)]);
		this.slideCache.active = $(this.elements.slides[this.active]);
		this.slideCache.next = $(this.elements.slides[this.validate(1)]);
	}
	
	moveSlide(percentage) {
		if(Math.abs(percentage) > 50) { // If slide is too much on left or right side
			let direction = Math.sign(percentage); // Calculate direction of moving
			
			this.active = this.validate(-direction); // Set new active slide
			percentage -= 100 * direction; // Change percentage for new active slide
			this.originalX += this.width * direction; // Set new X on which it calculates offset
			
			this.recacheSlides(); // Prepare slides
		}
		this.currentPercentage = percentage;
	}
	
	onStartDrag(evt) { // Activates then user clicks on carousel to drag
		if(!this.isDragging) { // If not dragging at the moment and if dragging isn't blocked
			this.stop();
			
			this.isDragging = true; // Set flag that it's dragging at the moment
			this.width = this.elements.carousel.width(); // Write current carousel width
			this.originalX = evt.screenX - this.width * this.currentPercentage * 0.01;
			
			this.recacheSlides(); // Prepare slides
			
			this.setCursor(this.cursors.drag);
		}
	}
	
	onPrepareDragMobile(evt) {
		this.originalX = evt.touches[0].clientX;
	}
	
	onDrag(evt) {
		if(this.isDragging) this.moveSlide(100 * (evt.screenX - this.originalX) / this.width);
	}
	
	onDragMobile(evt) {
		evt.screenX = evt.touches[0].clientX;
		if(this.isDragging) this.onDrag(evt);
		else if((Math.abs(evt.screenX - this.originalX) / this.width) > this.mobileDragBorder) this.onStartDrag(evt);
	}
	
	onStopDrag(evt) {
		if(!this.isDragging) return;
		this.isDragging = false; // Set flag that it's not dragging yet
		
		this.setCursor();
		
		this.fall(); // Run slide fall animation
		this.start(this.timeouts.pause + this.timeouts.animation);
	}
	
	kill(options = {}) {
		options = {
			clearTimeouts: true,
			clearEvents: true,
			...options
		};
		this.setCursor();
		if(options.clearTimeouts) this.stop();
		if(options.clearEvents) {
			this.elements.carousel.html(this.elements.carousel.html()); // Sorry but there's no way to remove listeners conveniently
			$(window).add(this.elements.previousSlideButton).add(this.elements.nextSlideButton).off(".ojcarousel");
		}
	}
}