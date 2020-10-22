$(window).on("onload.init_common/carousel", () => {
	app.carousel = {
		slides: $("#slide-container").children(".slide"), // Array containing slide's DOMs
		slideCache: {}, // Don't have to use selectors any time carousel need its slide
		active: 0, // Index of active slide
		count: 0, // Count of slides
		mobileDragBorder: 0.2, // When dragging starts on mobile
		slideTimeout: 6000, // Time between auto moving slides
		pauseTimeout: 5000, // Duration of pause after manual slide switching
		animationTimeout: 600, // Duration of slide switch animation
		slideTimer: undefined,
		autoMoveTimer: undefined,
		isSwitchable: true, // Can user switch slide with arrows at the moment
		isDragging: false, // Is user dragging slide at the moment
		originalX: 0, // Cursor X when dragging started
		width: 0, // Slide container's width
		get currentPercentage() { return +this.slideCache.active.attr("style").match(/translateX\((.+?)%\)/i)[1]; }, // Oh yeah it's RegExp
		start(timeout = this.pauseTimeout) { this.autoMoveTimer = setTimeout(() => { this.autoMove(); }, timeout); },
		pause() { clearTimeout(this.autoMoveTimer); },
		inanimate() { cancelAnimationFrame(this.slideTimer); },
		stop() {
			this.pause();
			this.inanimate();
		},
		validate(delta) { return Math.cycle(this.active + delta, this.count); },
		cursor(newCursor = "") { $("html:first, #carousel").css("cursor", newCursor); },
		autoMove() { // Intervaled switching slide forward
			this.isSwitchable = false;
			this.move(1); // Move slides forward
			this.autoMoveTimer = setTimeout(() => {
				this.stop();
				this.autoMove();
			}, this.slideTimeout + this.animationTimeout); // Restart function after some time
		},
		move(delta) { // Switch slide
			this.moveSlides(0);
			
			this.active = this.validate(delta);
			this.recacheSlides();
			this.slideTimer = requestAnimationFrame((time) => {
				this.translate(
					Math.sign(delta) * 100,
					performance.now(),
					time,
					this.animationTimeout
				);
			});
		},
		translate(initialPercentage, start, now, duration) {
			let percentage = Math.bound(initialPercentage * (1 - (now - start) / duration), 0, initialPercentage);
			this.moveSlides(percentage);
			
			if((now - start) <= duration) this.slideTimer = requestAnimationFrame((time) => { this.translate(initialPercentage, start, time, duration); });
			else this.isSwitchable = true;
		},
		transform(slide, percentage) { slide.css("transform", `translateX(${percentage}%)`); }, // Oh shit it's css
		fall() {			
			requestAnimationFrame(time => {
				this.translate(
					this.currentPercentage,
					performance.now(), time,
					Math.abs(this.animationTimeout * this.currentPercentage * 0.01)
				);
			});
		},
		recacheSlides() {
			this.slideCache.previous = $(this.slides[this.validate(-1)]);
			this.slideCache.active = $(this.slides[this.active]);
			this.slideCache.next = $(this.slides[this.validate(1)]);
		},
		moveSlide(percentage) {
			if(Math.abs(percentage) > 50) { // If slide is too much on left or right side
				let direction = Math.sign(percentage); // Calculate direction of moving
				
				this.active = this.validate(-direction); // Set new active slide
				percentage -= 100 * direction; // Change percentage for new active slide
				this.originalX += this.width * direction; // Set new X on which it calculates offset
				
				this.recacheSlides(); // Prepare slides
			}
			this.moveSlides(percentage);
		},
		moveSlides(percentage) {
			this.transform(this.slideCache.next, percentage + 100);
			this.transform(this.slideCache.active, percentage);
			this.transform(this.slideCache.previous, percentage - 100);
		},
		onStartDrag(evt) { // Activates then user clicks on carousel to drag
			if(!this.isDragging) { // If not dragging at the moment and if dragging isn't blocked
				this.stop();
				
				this.isDragging = true; // Set flag that it's dragging at the moment
				this.width = $("#carousel").width(); // Write current carousel width
				this.originalX = evt.screenX - this.width * this.currentPercentage / 100;
				
				this.recacheSlides(); // Prepare slides
				
				this.cursor("grabbing");
			}
		},
		onPrepareDragMobile(evt) { this.originalX = evt.touches[0].clientX; },
		onDrag(evt) { if(this.isDragging) this.moveSlide(100 * (evt.screenX - this.originalX) / this.width); },
		onDragMobile(evt) {
			evt.screenX = evt.touches[0].clientX;
			if(this.isDragging) this.onDrag(evt);
			else if((Math.abs(evt.screenX - this.originalX) / this.width) > this.mobileDragBorder) this.onStartDrag(evt);
		},
		onStopDrag(evt) {
			if(!this.isDragging) return;
			this.isDragging = false; // Set flag that it's not dragging yet
			
			this.cursor();
			
			this.fall(); // Run slide fall animation
			this.start(this.pauseTimeout + this.animationTimeout);
		},
	};
	
	app.carousel.count = app.carousel.slides.length; // Write count of slides to the variable
	app.carousel.recacheSlides();
	app.carousel.moveSlides(0);
	
	$("#carousel").find("*").attr("draggable", "false").each((index, element) => { // Unbind defaults from every slide and arrows
		element.onselectstart = () => false;
		element.ondragstart = () => false;
	});
	app.carousel.slides.on({
		"mousedown.carousel": (evt) => { app.carousel.onStartDrag(evt); }, // Desktop drag start
	}).each((index, element) => {
		element.addEventListener("touchstart", (evt) => { app.carousel.onPrepareDragMobile(evt); }, { passive: true });
		element.addEventListener("touchmove", (evt) => { app.carousel.onDragMobile(evt); }, { passive: true });
	});
	$(window).on({
		"mousemove.carousel": (evt) => { app.carousel.onDrag(evt); }, // Desktop dragging
		"mouseup.carousel touchend.carousel": (evt) => { app.carousel.onStopDrag(evt); } // Universal drag stop
	});
	$("#previous-slide-btn").click(() => {
		if(app.carousel.isSwitchable) {
			app.carousel.isSwitchable = false;
			app.carousel.stop();
			app.carousel.move(-1);
			app.carousel.start(app.carousel.pauseTimeout + app.carousel.animationTimeout);
		}
	});
	$("#next-slide-btn").click(() => {
		if(app.carousel.isSwitchable) {
			app.carousel.isSwitchable = false;
			app.carousel.stop();
			app.carousel.move(1);
			app.carousel.start(app.carousel.pauseTimeout + app.carousel.animationTimeout);
		}
	});
	
	app.carousel.start(); // Start auto switching
	
	$(window).on({
		"onresize.content": () => {
			$("#carousel").css("height", $(window).height() - $("#headerContainer").height());
		},
		"onunload.content": () => {
			app.carousel.stop();
			app.carousel.cursor();
			app.carousel = undefined;
			
			$(window).off(".carousel");
		}
	});
});