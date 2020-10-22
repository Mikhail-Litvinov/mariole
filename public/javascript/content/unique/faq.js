$(window).on("onload.init_unique/faq", () => {
	$(".faq-btn").click((evt) => {
		let button = $(evt.currentTarget).toggleClass("oppened");
		let height = (button.hasClass("oppened") ? button.children(".faq-content").get(0).scrollHeight : 0) + "px";
		button.children(".faq-content").height(height);
	});
});