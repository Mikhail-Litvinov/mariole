let languages = ["ru", "en", "cs", "it", "zh"];

function generateProductDatas() {
	let tpl = $(".js-product-datas > .js-data-template").removeClass("js-data-template").hide();
	for(let language of languages) {
		tpl.before(tpl.clone().addClass(`add-product-${language} js-product-data js-product-data_${language}`));
	}
	tpl.remove();
}

function toggleProductData(language = languages[0]) {
	$(".js-product-data").hide();
	$(`.js-product-data_${language}`).show();
}

function bindEvents() {
	$(".js-button-save").on("click", () => { save(); });
	$(".js-choose-language").on("change", (evt) => { toggleProductData(evt.currentTarget.value); });
}

function save() {
	console.log(getProductDataAsJSON());
	// $.post({
		// url: "/data/edit_product",
		// data: getProductDataAsJSON(),
		// dataType: "json",
		// success: (data) => {
			// console.log("SAVED!");
		// }
	// });
}

function getProductLanguageData(language = languages[1]) {
	let data = $(`.js-product-data_${language}`);
	
	let result = {
		name: data.find(".js-product-name").val(),
		description: data.find(".js-product-description").val()
	};
	
	return (Object.values(result).every(value => value.length > 0) || language === languages[1]) ? result : getProductLanguageData();
}

function getProductDataAsJSON() {
	return JSON.stringify({
		data: (() => {
			return ["type", "class"].reduce((result, data) => {
				result[data] = $(`.js-product-${data}`).val();
				return result;
			}, { article: -1 });
		})(),
		prices: (() => {
			return ["rub", "czk", "eur", "usd"].reduce((result, currency) => {
				result[currency.toUpperCase()] = Math.floor(+$(`.js-price_${currency} input`).val() * 100);
				return result;
			}, {});
		})(),
		languages: (() => {
			return languages.reduce((result, language) => {
				result[language] = getProductLanguageData(language);
				return result;
			}, {});
		})(),
		images: (() => {
			return $.makeArray($(".js-product-images img").map((index, img) => {
				return img.getAttribute("src").match(/.+\/(.+?)\.jpg/i)[1];
			}));
		})(),
		params: {},
		uni_params: {}
	});
}

$(() => {
	generateProductDatas();
	toggleProductData();
	bindEvents();
});