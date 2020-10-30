$(window).on("onload.init_unique/faq", () => {
	let faqButtons = $('.faq-btn');
	let faqContent = $('.faq-content');
	let faqContainer = $('.faq-answ-container')
	faqButtons.each ((index, button) => {
		$(button).on("click.faq", () => {
			$(faqButtons.removeClass("active").get(index)).addClass("active");
			$(faqContent.removeClass("active").height(0).get(index)).height(faqContent[index].scrollHeight + "px").addClass("active")
			$(faqContainer).removeClass("active").addClass("active")
		})
	})
	$(".closeAnswer").click(function () {
		$(faqContainer).removeClass("active")
	})
});