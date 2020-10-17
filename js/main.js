Math.bound = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
Math.cycle = (num, border) => border ? +Math.abs((num >= 0 ? num : num - Math.floor(num / border) * border) % border).toFixed(8) : num;

function updateMobileFlags() {
	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	isLowWidth = $(window).width() <= 1024;
	$(window).trigger("onresize");
}

$(() => {
	$(window).resize(updateMobileFlags).resize();
});