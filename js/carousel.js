function preInitCarousel() {
	carousel = {
		slides: $("#slide-container > .slide"), // Array containing slide's DOMs
		active: 0, // Index of active slide
		count: 0, // Count of slides
		slideTimeout: 5000, // Time between auto moving slides
		pauseTimeout: 3000, // Duration of pause after manual slide switching
		animationTimeout: 1000, // Duration of slide switch animation
		fallAnimationTimeout: 0, // Duration of slide fall animation, changes dynamically, based on switch animation timeout
		slideTimer: null, // Slide switch timer
		unpauseTimer: null, // Slide pause timer
		isDragging: false, // Is user dragging slide at the moment
		isDraggingBlocked: false, // Is dragging blocked by any action
		isAutoMoveBlocked: false, // Is auto slide switching blocked by any action
		originalX: 0, // Cursor X when dragging started
		width: 0, // Slide container's width
		nextSlideIndex: 0, // Next slide index
		previousSlideIndex: 0 // Previous slide index
	};
}


function initCarousel() { // Prepare carousel to work
	if(carousel) {
		clearTimeout(carousel.slideTimer);
		clearTimeout(carousel.unpauseTimer);
	}
	
	preInitCarousel();
	
	$(carousel.slides[0]).css("transform", "translateX(0%)"); // Center first slide
	carousel.slides.on("mousedown touchstart", onMouseDown); // Bind dragging start event to every slide
	carousel.slides.each((index, element) => { element.ondragstart = null; }); // Unbind default drag event from every slide
	$(document).on("mousemove touchmove", onMouseMove).on("mouseup touchend", onMouseUp); // Bing mouse move and undragging events to the page
	
	$("div#previous-slide-btn").click(() => { moveCarousel(-1, true); }); // Bing switching slide back to back arrow
	$("div#next-slide-btn").click(() => { moveCarousel(1, true); }); // Bing switching slide forward to forward arrow
	
	carousel.count = carousel.slides.length; // Write count of slides to the variable
}

function autoMoveCarousel() { // Intervaled switching slide forward
	moveCarousel(1); // Move slides forward
	carousel.slideTimer = setTimeout(autoMoveCarousel, carousel.slideTimeout); // Restart function after some time
}

function moveCarousel(n, pause) { // Switch slide
	if(!carousel.isAutoMoveBlocked) { // If auto switching isn't blocked at the moment
		carousel.isAutoMoveBlocked = true; // Block auto switching
		carousel.isDraggingBlocked = true; // Block dragging
		
		toggleSlide(n); // Toggle slide
		if(pause) { // If need to pause carousel
			pauseCarousel(); // Pause carousel
			unpauseCarousel(); // Unpause carousel after some time
		}
	}
}

function toggleSlide(n) { // Toggle slide
	let newIndex = validateSlideIndex(n); // Make sure that index is valid
	let direction = Math.sign(n); // Define direction; -1 is back, 1 is forward, 0 is impossible
	
	$(carousel.slides[carousel.active]).css("transform", "translateX(0%)"); // Make sure that active slide is correctly centered
	$(carousel.slides[newIndex]).css("transform", `translateX(${100 * direction}%)`); // Make sure that new slide has correct offset
	
	requestAnimationFrame(time => { translateSlide(newIndex, direction, performance.now(), time); }); // Translate slide in some time
}

function translateSlide(newIndex, direction, start, now) { // Translate slide (oh shit it's css)
	let percentage = 100 * Math.bound((now - start) / carousel.animationTimeout, 0, 1); // Bound percentage in range [0; 100]
	
	$(carousel.slides[newIndex]).css("transform", `translateX(${(100 - percentage) * direction}%)`); // Move new slide
	$(carousel.slides[carousel.active]).css("transform", `translateX(${percentage * -direction}%)`); // Move active slide
	
	if((now - start) < carousel.animationTimeout) { // If animation still happens
		requestAnimationFrame(time => { translateSlide(newIndex, direction, start, time); }); // Continue translation
	} else { // If animation ended
		carousel.active = newIndex; // Set new slide active
		carousel.isAutoMoveBlocked = false; // Unblock auto slide switching
		carousel.isDraggingBlocked = false; // Unblock slide dragging
	}
}

function translateFallSlide(initialPercentage, direction, start, now) { // Translate slide falling (oh shit it's css again)
	let percentage = initialPercentage * (1 - ((now - start) / carousel.fallAnimationTimeout)); // Calculate current percentage
	percentage = direction > 0 ? Math.bound(percentage, 0, initialPercentage) : Math.bound(percentage, initialPercentage, 0);
	
	$(carousel.slides[direction > 0 ? carousel.previousSlideIndex : carousel.nextSlideIndex]).css("transform", `translateX(${(direction * percentage - 100) * direction}%)`); // Move needed slide (next if forward, previous if back)
	$(carousel.slides[carousel.active]).css("transform", `translateX(${percentage}%)`); // Move active slide
	
	if((now - start) < carousel.fallAnimationTimeout) { // If animation still happens
		requestAnimationFrame(time => { translateFallSlide(initialPercentage, direction, start, time); }); // Continue translation
	} else { // If animation ended
		carousel.isAutoMoveBlocked = false; // Unblock auto slide switching
		carousel.isDraggingBlocked = false; // Unblock slide dragging
	}
}

function pauseCarousel() { // Pause carousel
	clearTimeout(carousel.slideTimer); // Stop slide timer
	clearTimeout(carousel.unpauseTimer); // Stop unpause timer
}

function unpauseCarousel() { // Unpause carousel
	carousel.unpauseTimer = setTimeout(autoMoveCarousel, carousel.pauseTimeout); // Create new unpause timer
}

function validateSlideIndex(n) { // Validate new index in range [0; count)
	return Math.cycle(carousel.active + n, carousel.count); // Return valid index
}

function onMouseDown(evt) { // Activates then user clicks on carousel to drag
	if(!carousel.isDragging && !carousel.isDraggingBlocked) { // If not dragging at the moment and if dragging isn't blocked
		pauseCarousel(); // Pause carousel
		carousel.isDragging = true; // Set flag that it's dragging at the moment
		carousel.isAutoMoveBlocked = true; // Block auto slide switching
		carousel.width = $("#carousel").width(); // Write current carousel width
		carousel.originalX = (evt.type == "touchstart" ? evt.touches[0] : evt).screenX;
		
		prepareSlides(); // Prepare slides
		
		$("html").css("cursor", "grabbing"); // Change cursor for all page
		$("#carousel").css("cursor", "grabbing"); // Change cursor for carousel
	}
}

function prepareSlides() { // Update indexes of next and previous slides
	carousel.nextSlideIndex = validateSlideIndex(1); // Validate next slide' index
	carousel.previousSlideIndex = validateSlideIndex(-1); // Validate previous slide' index
}

function onMouseMove(evt) {
	if(carousel.isDragging) moveSlide((evt.type == "touchmove" ? evt.touches[0] : evt).screenX - carousel.originalX); // If it's dragging at the moment then move slide
}

function fallSlide() {
	percentage = parseInt(carousel.slides[carousel.active].style.transform.slice(11, -2), 10); // Calculate current slide's offset percentage
	carousel.fallAnimationTimeout = (Math.abs(percentage) / 100) * carousel.animationTimeout; // Calculate duration of fall animation
	
	requestAnimationFrame(time => { translateFallSlide(percentage, Math.sign(percentage), performance.now(), time); }); // Translate
}

function onMouseUp(evt) {
	if(carousel.isDragging) { // If it's dragging at the moment
		unpauseCarousel(); // Unpause carousel
		carousel.isDragging = false; // Set flag that it's not dragging yet
		carousel.isDraggingBlocked = true; // Block dragging while fall animation happens
				
		$("html").css("cursor", "auto"); // Set 'auto' cursor for the page
		$("#carousel").css("cursor", "grab"); // Set 'grab' cursor for carousel
		
		fallSlide(); // Run slide fall animation
	}
}

function moveSlide(relativeX) { // Move slide dynamically
	let percentage = (relativeX / carousel.width) * 100; // Calculate percentage of offset
	
	if(Math.abs(percentage) > 50) { // If slide is too much on left or right side
		let direction = Math.sign(percentage); // Calculate direction of moving
		
		carousel.active = validateSlideIndex(-direction); // Set new active slide
		percentage -= 100 * direction; // Change percentage for new active slide
		carousel.originalX += carousel.width * direction; // Set new X on which it calculates offset
		
		prepareSlides(); // Prepare slides
	}
	
	$(carousel.slides[carousel.nextSlideIndex]).css("transform", `translateX(${percentage + 100}%)`); // Move next slide
	$(carousel.slides[carousel.active]).css("transform", `translateX(${percentage}%)`); // Move active slide
	$(carousel.slides[carousel.previousSlideIndex]).css("transform", `translateX(${percentage - 100}%)`); // Move previous slide
}

$(window).resize(() => {
	$("#carousel").css("height", $(window).height() - $("#headerContainer").height());
});

$(() => { // When page is loaded
	initCarousel(); // Initialize carousel
	carousel.slideTimer = setTimeout(autoMoveCarousel, carousel.slideTimeout); // Start auto switching in some time
	$("#content #slide-container *").attr("draggable", "false");
	$(window).resize();
});