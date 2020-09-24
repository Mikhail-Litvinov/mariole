let slides, active, count;
let slideTimeout = 5000;
let pauseTimeout = 3000;
let animationTimeout = 1000;
let fallAnimationTimeout;
let slideTimer, unpauseTimer;
let isDragging = false;
let isDraggingBlocked = false;
let isAutoMoveBlocked = false;
let originalX, width, nextSlideIndex, previousSlideIndex;

function initCarousel() {
	slides = $("div.slide");
	slides.hide();
	$(slides[0]).show();
	slides.on("mousedown", onMouseDown);
	slides.each((index, element) => { element.ondragstart = null; });
	$(document).on("mousemove", onMouseMove).on("mouseup", onMouseUp);
	
	$("div#previous-slide-btn").click(() => { moveCarousel(-1, true); });
	$("div#next-slide-btn").click(() => { moveCarousel(1, true); });
	
	count = slides.length;
	active = 0;
}

function autoMoveCarousel() {
	moveCarousel(1);
	slideTimer = setTimeout(autoMoveCarousel, slideTimeout);
}

function moveCarousel(n, pause) {
	if(!isAutoMoveBlocked) {
		isAutoMoveBlocked = true;
		isDraggingBlocked = true;
		
		toggleSlide(n);
		if(pause) {
			pauseCarousel();
			unpauseCarousel();
		}
	}
}

function toggleSlide(n) {
	let newIndex = validate(n);
	let direction = Math.sign(n);
	
	slides[active].style.transform = "translateX(0%)";
	slides[newIndex].style.transform = `translateX(${100 * direction}%)`;
	
	$(slides[newIndex]).show();
	
	requestAnimationFrame(time => { translateSlide(newIndex, direction, performance.now(), time); });
}

function translateSlide(newIndex, direction, start, now) {
	let percentage = ((now - start) / animationTimeout) * 100;
	
	if(percentage < 0) percentage = 0;
	else if(percentage > 100) percentage = 100;
	
	slides[active].style.transform = `translateX(${percentage * -direction}%)`;
	slides[newIndex].style.transform = `translateX(${(100 - percentage) * direction}%)`;
	
	if((now - start) < animationTimeout) requestAnimationFrame(time => { translateSlide(newIndex, direction, start, time); });
	else {
		active = newIndex;
		isAutoMoveBlocked = false;
		isDraggingBlocked = false;
	}
}

function translateFallSlide(initialPercentage, direction, start, now) {
	let percentage = initialPercentage * (1 - ((now - start) / fallAnimationTimeout));
	
	if(direction > 0) percentage = Math.max(0, Math.min(initialPercentage, percentage));
	else if(direction < 0) percentage = Math.max(initialPercentage, Math.min(0, percentage));
	
	slides[active].style.transform = `translateX(${percentage}%)`;
	slides[direction > 0 ? previousSlideIndex : nextSlideIndex].style.transform = `translateX(${(direction * percentage - 100) * direction}%)`;
	
	if((now - start) < fallAnimationTimeout) requestAnimationFrame(time => { translateFallSlide(initialPercentage, direction, start, time); });
	else {
		isAutoMoveBlocked = false;
		isDraggingBlocked = false;
	}
}

function pauseCarousel() {
	clearTimeout(slideTimer);
	clearTimeout(unpauseTimer);
}

function unpauseCarousel() {
	unpauseTimer = setTimeout(autoMoveCarousel, pauseTimeout);
}

function validate(n) {
	let temp = active + n;
	if(temp >= count) temp %= count;
	else if(temp < 0) temp += count;
	
	return temp;
}

function onMouseDown(evt) {
	if(!isDragging && !isDraggingBlocked) {
		pauseCarousel();
		isDragging = true;
		isAutoMoveBlocked = true;
		originalX = evt.screenX;
		width = $("#carousel").width();
		
		prepareSlides();
		
		$("#document")[0].style.cursor = "grabbing";
		$("#carousel")[0].style.cursor = "grabbing";
	}
}

function prepareSlides() {
	nextSlideIndex = validate(1);
	previousSlideIndex = validate(-1);
	
	slides[previousSlideIndex].style.transform = "translateX(-100%)";
	slides[nextSlideIndex].style.transform = "translateX(100%)";
	$(slides[previousSlideIndex]).show();
	$(slides[nextSlideIndex]).show();
}

function onMouseMove(evt) {
	if(isDragging) moveSlide(evt.screenX - originalX);
}

function fallSlide() {
	percentage = parseInt(slides[active].style.transform.slice(11, -2));
	fallAnimationTimeout = (Math.abs(percentage) / 100) * animationTimeout;
	
	requestAnimationFrame(time => { translateFallSlide(percentage, Math.sign(percentage), performance.now(), time); });
}

function onMouseUp(evt) {
	if(isDragging) {
		unpauseCarousel();
		isDragging = false;
		isDraggingBlocked = true;
				
		$("#document")[0].style.cursor = "auto";
		$("#carousel")[0].style.cursor = "grab";
		
		fallSlide();
	}
}

function moveSlide(relativeX) {
	let percentage = (relativeX / width) * 100;
	
	if(percentage < -50 || percentage > 50) {
		let direction = Math.sign(-percentage);
		
		active = validate(direction);
		percentage += 100 * direction;
		originalX -= width * direction;
		
		prepareSlides();
	}
	
	slides[active].style.transform = `translateX(${percentage}%)`;
	slides[previousSlideIndex].style.transform = `translateX(${percentage - 100}%)`;
	slides[nextSlideIndex].style.transform = `translateX(${percentage + 100}%)`;
}

$(() => {
	initCarousel();
	slideTimer = setTimeout(autoMoveCarousel, slideTimeout);
});