initCarousel = () => { // Prepare carousel to work
	carousel = {
		slides: $("#slide-container > .slide"), // Array containing slide's DOMs
		active: 0, // Index of active slide
		count: 0, // Count of slides
		slideTimeout: 5000, // Time between auto moving slides
		pauseTimeout: 3000, // Duration of pause after manual slide switching
		animationTimeout: 1000, // Duration of slide switch animation
		fallAnimationTimeout: 0, // Duration of slide fall animation, changes dynamically, based on switch animation timeout
		slideTimer: undefined, // Slide switch timer
		unpauseTimer: undefined, // Slide pause timer
		isDragging: false, // Is user dragging slide at the moment
		isDraggingBlocked: false, // Is dragging blocked by any action
		isAutoMoveBlocked: false, // Is auto slide switching blocked by any action
		originalX: 0, // Cursor X when dragging started
		width: 0, // Slide container's width
		nextSlideIndex: 0, // Next slide index
		previousSlideIndex: 0, // Previous slide index
		start: () => { // Start carousel
			carousel.unpauseTimer = setTimeout(carousel.autoMove, carousel.pauseTimeout); // Create new unpause timer
		},
		stop: () => { // Stop carousel
			clearTimeout(carousel.slideTimer); // Stop slide timer
			clearTimeout(carousel.unpauseTimer); // Stop unpause timer
		},
		validate: (delta) => { // Validate new index in range [0; count)
			return Math.cycle(carousel.active + delta, carousel.count); // Return valid index
		},
		autoMove: () => { // Intervaled switching slide forward
			carousel.move(1); // Move slides forward
			carousel.slideTimer = setTimeout(carousel.autoMove, carousel.slideTimeout); // Restart function after some time
		},
		move: (delta, isStopNeeded) => { // Switch slide
			if(!carousel.isAutoMoveBlocked) { // If auto switching isn't blocked at the moment
				carousel.isAutoMoveBlocked = true; // Block auto switching
				carousel.isDraggingBlocked = true; // Block dragging
				
				carousel.toggleSlide(delta); // Toggle slide
				if(isStopNeeded) { // If need to stop carousel
					carousel.stop(); // stop carousel
					carousel.start(); // Unpause carousel after some time
				}
			}
		},
		toggleSlide: (delta) => { // Toggle slide
			let newIndex = carousel.validate(delta); // Make sure that index is valid
			let direction = Math.sign(delta); // Define direction; -1 is back, 1 is forward, 0 is impossible
			
			$(carousel.slides[carousel.active]).css("transform", "translateX(0%)"); // Make sure that active slide is correctly centered
			$(carousel.slides[newIndex]).css("transform", `translateX(${100 * direction}%)`); // Make sure that new slide has correct offset
			
			requestAnimationFrame(time => { carousel.translateSlide(newIndex, direction, performance.now(), time); }); // Translate slide in some time
		},
		translateSlide: (newIndex, direction, start, now) => { // Translate slide (oh shit it's css)
			let percentage = 100 * Math.bound((now - start) / carousel.animationTimeout, 0, 1); // Bound percentage in range [0; 100]
			
			$(carousel.slides[newIndex]).css("transform", `translateX(${(100 - percentage) * direction}%)`); // Move new slide
			$(carousel.slides[carousel.active]).css("transform", `translateX(${percentage * -direction}%)`); // Move active slide
			
			if((now - start) < carousel.animationTimeout) { // If animation still happens
				requestAnimationFrame(time => { carousel?.translateSlide(newIndex, direction, start, time); }); // Continue translation
			} else { // If animation ended
				carousel.active = newIndex; // Set new slide active
				carousel.isAutoMoveBlocked = false; // Unblock auto slide switching
				carousel.isDraggingBlocked = false; // Unblock slide dragging
			}
		},
		prepareSlides: () => { // Update indexes of next and previous slides
			carousel.previousSlideIndex = carousel.validate(-1); // Validate previous slide' index
			carousel.nextSlideIndex = carousel.validate(1); // Validate next slide' index
		},
		moveSlide: (relativeX) => { // Move slide dynamically
			let percentage = (relativeX / carousel.width) * 100; // Calculate percentage of offset
			
			if(Math.abs(percentage) > 50) { // If slide is too much on left or right side
				let direction = Math.sign(percentage); // Calculate direction of moving
				
				carousel.active = carousel.validate(-direction); // Set new active slide
				percentage -= 100 * direction; // Change percentage for new active slide
				carousel.originalX += carousel.width * direction; // Set new X on which it calculates offset
				
				carousel.prepareSlides(); // Prepare slides
			}
			
			$(carousel.slides[carousel.nextSlideIndex]).css("transform", `translateX(${percentage + 100}%)`); // Move next slide
			$(carousel.slides[carousel.active]).css("transform", `translateX(${percentage}%)`); // Move active slide
			$(carousel.slides[carousel.previousSlideIndex]).css("transform", `translateX(${percentage - 100}%)`); // Move previous slide
		},
		fallSlide: () => {
			let percentage = +(carousel.slides[carousel.active].style.transform.slice(11, -2)); // Calculate current slide's offset percentage
			carousel.fallAnimationTimeout = (Math.abs(percentage) / 100) * carousel.animationTimeout; // Calculate duration of fall animation
			
			requestAnimationFrame(time => { carousel?.translateFallSlide(percentage, Math.sign(percentage), performance.now(), time); });
		},
		translateFallSlide: (initialPercentage, direction, start, now) => { // Translate slide falling (oh shit it's css again)
			let percentage = initialPercentage * (1 - ((now - start) / carousel.fallAnimationTimeout)); // Calculate current percentage
			percentage = direction > 0 ? Math.bound(percentage, 0, initialPercentage) : Math.bound(percentage, initialPercentage, 0);
			
			$(carousel.slides[direction > 0 ? carousel.previousSlideIndex : carousel.nextSlideIndex]).css("transform", `translateX(${(direction * percentage - 100) * direction}%)`); // Move needed slide (next if forward, previous if back)
			$(carousel.slides[carousel.active]).css("transform", `translateX(${percentage}%)`); // Move active slide
			
			if((now - start) < carousel.fallAnimationTimeout) { // If animation still happens
				requestAnimationFrame(time => { carousel.translateFallSlide(initialPercentage, direction, start, time); }); // Continue translation
			} else { // If animation ended
				carousel.isAutoMoveBlocked = false; // Unblock auto slide switching
				carousel.isDraggingBlocked = false; // Unblock slide dragging
			}
		},
		onStartDrag: (evt) => { // Activates then user clicks on carousel to drag
			if(!carousel.isDragging && !carousel.isDraggingBlocked) { // If not dragging at the moment and if dragging isn't blocked
				carousel.stop(); // Stop carousel
				carousel.isDragging = true; // Set flag that it's dragging at the moment
				carousel.isAutoMoveBlocked = true; // Block auto slide switching
				carousel.width = $("#carousel").width(); // Write current carousel width
				carousel.originalX = (evt.type == "touchstart" ? evt.touches[0] : evt).screenX;
				
				carousel.prepareSlides(); // Prepare slides
				
				$("html").css("cursor", "grabbing"); // Change cursor for all page
				$("#carousel").css("cursor", "grabbing"); // Change cursor for carousel
			}
		},
		onDrag: (evt) => {
			if(carousel.isDragging) carousel.moveSlide((evt.type == "touchmove" ? evt.touches[0] : evt).screenX - carousel.originalX); // If it's dragging at the moment then move slide
		},
		onStopDrag: (evt) => {
			if(carousel.isDragging) { // If it's dragging at the moment
				carousel.start(); // Unpause carousel
				carousel.isDragging = false; // Set flag that it's not dragging yet
				carousel.isDraggingBlocked = true; // Block dragging while fall animation happens
						
				$("html").css("cursor", "auto"); // Set 'auto' cursor for the page
				$("#carousel").css("cursor", "grab"); // Set 'grab' cursor for carousel
				
				carousel.fallSlide(); // Run slide fall animation
			}
		},
	};
	
	carousel.count = carousel.slides.length; // Write count of slides to the variable
	$(carousel.slides[0]).css("transform", "translateX(0%)"); // Center first slide
	$("#carousel *").attr("draggable", "false").each((index, element) => { // Unbind defaults from every slide and arrows
		element.onselectstart = () => false;
		element.ondragstart = () => false;
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

$(() => { // When page is loaded
	initCarousel(); // Initialize carousel
	carousel.start(); // Start auto switching in some time
	
	carousel.slides.on("mousedown.carousel touchstart.carousel", carousel.onStartDrag); // Bind dragging start event to every slide
	$(window).on({
		"mousemove.carousel touchmove.carousel": carousel.onDrag,
		"mouseup.carousel touchend.carousel": carousel.onStopDrag
	});
	$("#previous-slide-btn").click(() => { carousel.move(-1, true); }); // Bing switching slide back to back arrow
	$("#next-slide-btn").click(() => { carousel.move(1, true); }); // Bing switching slide forward to forward arrow
});