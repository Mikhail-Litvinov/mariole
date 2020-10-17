initCarousel = () => { // Prepare carousel to work
	carousel = {
		slides: $("#slide-container > .slide"), // Array containing slide's DOMs
		active: 0, // Index of active slide
		count: 0, // Count of slides
		mobileDragBorder: 0.2, // When dragging starts on mobile
		slideTimeout: 4000, // Time between auto moving slides
		pauseTimeout: 5000, // Duration of pause after manual slide switching
		animationTimeout: 1000, // Duration of slide switch animation
		fallAnimationTimeout: 0, // Duration of slide fall animation, changes dynamically, based on switch animation timeout
		slideTimer: undefined,
		autoMoveTimer: undefined,
		isSwitchable: true, // Can user switch slide with arrows at the moment
		isDragging: false, // Is user dragging slide at the moment
		isMoving: false, // Is carousel moving at the moment
		originalX: 0, // Cursor X when dragging started
		width: 0, // Slide container's width
		nextSlideIndex: 0,
		previousSlideIndex: 0,
		get currentPercentage() { return +(this.slides[this.active].style.transform.slice(11, -2)); }, // Sorry
		start(timeout = this.pauseTimeout) {
			this.autoMoveTimer = setTimeout(() => {
				this.autoMove();
			}, timeout);
		},
		pause() {
			clearTimeout(this.autoMoveTimer);
		},
		inanimate() { cancelAnimationFrame(this.slideTimer); },
		stop() {
			this.pause();
			this.inanimate();
		},
		validate(delta) { return Math.cycle(this.active + delta, this.count); },
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
			
			this.slideTimer = requestAnimationFrame((time) => {
				this.translateSlide(this.validate(delta), Math.sign(delta), performance.now(), time);
			});
		},
		transformSlide(index, percentage) { $(this.slides[index]).css("transform", `translateX(${percentage}%)`); },
		translateSlide(newIndex, direction, start, now) { // Translate slide (oh shit it's css)
			let percentage = 100 * Math.bound((now - start) / this.animationTimeout, 0, 1); // Bound percentage in range [0; 100]
			
			this.moveSlides(percentage * -direction)
			
			if((now - start) <= this.animationTimeout) { // If has to continue animation
				this.slideTimer = requestAnimationFrame((time) => { this.translateSlide(newIndex, direction, start, time); });
			} else {
				this.active = newIndex;
				this.isSwitchable = true;
			}
		},
		prepareSlides() { // Update indexes of next and previous slides
			this.previousSlideIndex = this.validate(-1); // Validate previous slide' index
			this.nextSlideIndex = this.validate(1); // Validate next slide' index
		},
		moveSlide(percentage) {
			if(Math.abs(percentage) > 50) { // If slide is too much on left or right side
				let direction = Math.sign(percentage); // Calculate direction of moving
				
				this.active = this.validate(-direction); // Set new active slide
				percentage -= 100 * direction; // Change percentage for new active slide
				this.originalX += this.width * direction; // Set new X on which it calculates offset
				
				this.prepareSlides(); // Prepare slides
			}
			this.moveSlides(percentage);
		},
		moveSlides(percentage) { // Move slide dynamically
			this.prepareSlides();
			this.transformSlide(this.nextSlideIndex, percentage + 100);
			this.transformSlide(this.active, percentage);
			this.transformSlide(this.previousSlideIndex, percentage - 100);
		},
		fallSlide() {
			let percentage = this.currentPercentage; // Calculate current slide's offset percentage
			this.fallAnimationTimeout = Math.abs(this.animationTimeout * percentage * 0.01); // Calculate duration of fall animation
			
			requestAnimationFrame(time => { this.translateSlideFall(percentage, Math.sign(percentage), performance.now(), time); });
		},
		translateSlideFall(initialPercentage, direction, start, now) { // Translate slide falling (oh shit it's css again)
			this.moveSlides(Math.bound(initialPercentage * (1 - ((now - start) / this.fallAnimationTimeout)), 0, initialPercentage));
			
			if((now - start) <= this.fallAnimationTimeout) { // If has to continue animation
				this.slideTimer = requestAnimationFrame(time => { this.translateSlideFall(initialPercentage, direction, start, time); });
			} else this.isSwitchable = true;
		},
		onStartDrag(evt) { // Activates then user clicks on carousel to drag
			if(!this.isDragging) { // If not dragging at the moment and if dragging isn't blocked
				this.stop();
				
				this.isDragging = true; // Set flag that it's dragging at the moment
				this.width = $("#carousel").width(); // Write current carousel width
				this.originalX = evt.screenX - this.width * this.currentPercentage / 100;
				
				this.prepareSlides(); // Prepare slides
				
				$("html").css("cursor", "grabbing"); // Change cursor for all page
				$("#carousel").css("cursor", "grabbing"); // Change cursor for carousel
			}
		},
		onPrepareDragMobile(evt) { this.originalX = evt.touches[0].clientX;},
		onDrag(evt) { if(this.isDragging) this.moveSlide(100 * (evt.screenX - this.originalX) / this.width); },
		onDragMobile(evt) {
			evt.screenX = evt.touches[0].clientX;
			if(this.isDragging) this.onDrag(evt);
			else if((Math.abs(evt.screenX - this.originalX) / this.width) > this.mobileDragBorder) this.onStartDrag(evt);
		},
		onStopDrag(evt) {
			if(this.isDragging) { // If it's dragging at the moment
				this.isDragging = false; // Set flag that it's not dragging yet
						
				$("html").css("cursor", "auto"); // Set 'auto' cursor for the page
				$("#carousel").css("cursor", "grab"); // Set 'grab' cursor for carousel
				
				this.fallSlide(); // Run slide fall animation
				this.start(this.pauseTimeout + this.fallAnimationTimeout);
			}
		},
	};
	
	carousel.count = carousel.slides.length; // Write count of slides to the variable
	carousel.moveSlides(0);
	$("#carousel *").attr("draggable", "false").each((index, element) => { // Unbind defaults from every slide and arrows
		element.onselectstart = () => false;
		element.ondragstart = () => false;
	});
	carousel.slides.on({
		"mousedown.carousel": (evt) => { carousel.onStartDrag(evt); }, // Desktop drag start
		"touchmove.carousel": (evt) => { carousel.onDragMobile(evt); }, // Mobile dragging
		"touchstart.carousel": (evt) => { carousel.onPrepareDragMobile(evt); } // Mobile drag preparation
	});
	$(window).on({
		"mousemove.carousel": (evt) => { carousel.onDrag(evt); }, // Desktop dragging
		"mouseup.carousel touchend.carousel": (evt) => { carousel.onStopDrag(evt); } // Universal drag stop
	});
	$("#previous-slide-btn").click(() => {
		if(carousel.isSwitchable) {
			carousel.isSwitchable = false;
			carousel.stop();
			carousel.move(-1);
			carousel.start(carousel.pauseTimeout + carousel.animationTimeout);
		}
	});
	$("#next-slide-btn").click(() => {
		if(carousel.isSwitchable) {
			carousel.isSwitchable = false;
			carousel.stop();
			carousel.move(1);
			carousel.start(carousel.pauseTimeout + carousel.animationTimeout);
		}
	});
}

$(window).on("onresize.content", () => {
	$("#carousel").css("height", $(window).height() - $("#headerContainer").height());
});

$(window).on("onunload.content", () => {
	carousel.stop();
	carousel = undefined;
	initCarousel = undefined;
	
	$(window).off(".carousel");
	$("html").css("cursor", "auto");
});

$(window).on("onload.carousel", () => { // When page is loaded
	initCarousel(); // Initialize carousel
	carousel.start(); // Start auto switching in some time
});