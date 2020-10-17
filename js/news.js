function updateNewsSelection() {
	console.log("Make a view that news were updated");
}

$(window).on("onload.news", () => {
	$(".mobile-nav-button").click(() => { $(".blog-column-right").toggleClass("openned"); });
});