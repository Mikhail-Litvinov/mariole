let carousel; // Config singleton for carousel
let isMobile = false, isLowWidth = false;

Math.bound = (num, min, max) => Math.max(Math.min(num, max), min);
Math.cycle = (num, border) => Math.abs((num >= 0 ? num : num - Math.floor(num / border) * border) % border);

function updateMobileFlags() {
	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	isLowWidth = $(window).width() <= 1024;
}

$(() => {
	$(window).resize(updateMobileFlags).resize();
});