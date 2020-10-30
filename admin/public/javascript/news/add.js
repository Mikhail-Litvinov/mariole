let languages = ["ru", "en", "cs", "it", "zh"];
let activeTemplate = 0;

function generatePostDatas() {
	let tpl = $(".js-post-datas > .js-post-data-template").removeClass("js-post-data-template").hide();
	for(let language of languages) {
		tpl.before(tpl.clone().addClass(`js-post-data_${language}`));
	}
	tpl.remove();
}

function toggleLanguage(language = languages[0]) {
	$(".js-post-data").hide();
	$(`.js-post-data_${language}`).show();
}

function toggleTemplate(template = 1) {
	$(".js-post-template").hide();
	$(`.js-post-template_${template}`).show();
}

function bindEvents() {
	$(".js-choose-language").on("change", (evt) => { toggleLanguage(evt.currentTarget.value); });
	$(".js-choose-template").on("change", (evt) => { toggleTemplate(evt.currentTarget.value); });
}

$(() => {
	generatePostDatas();
	toggleLanguage();
	toggleTemplate();
	bindEvents();
});