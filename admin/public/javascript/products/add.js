let languages = ["ru", "en", "cs", "it", "zh"];
let paramTemplate = undefined;
let crawler = {
	crawl(action) {
		return {
			action: action,
			data: crawler.data,
			prices: crawler.prices,
			languages: crawler.languages,
			images: crawler.images,
			uni_params: crawler.uniParams
		};
	},
	get data() {
		return ["type", "class"].reduce((result, data) => {
			result[data] = $(`.js-product-${data}`).val();
			return result;
		}, {});
	},
	get prices() {
		return ["rub", "czk", "eur", "usd"].reduce((result, currency) => {
			result[currency.toUpperCase()] = Math.floor(+$(`.js-price_${currency} input`).val() * 100);
			return result;
		}, {});
	},
	get languages() {
		return languages.reduce((result, language) => {
			result[language] = getProductLanguageData(language);
			return result;
		}, {});
	},
	get images() {
		return $.makeArray($(".js-product-images img").map((index, img) => {
			return img.getAttribute("src").match(/.+\/(.+?)\.jpg/i)[1];
		}));
	},
	get uniParams() {
		return this.getParams($(".js-uni-params-list"));
	},
	getParams(wrapper) {
		return $.makeArray(wrapper.children(".js-param").map((index, param) => {
			return {
				name: param.querySelector(".js-param-name").value,
				value: param.querySelector(".js-param-value").value
			};
		})).filter(param => param.name.length > 0 && param.value.length > 0);
	}
};

function getActiveLanguage() {
	return $(".js-choose-language").val();
}

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
	$(".js-choose-language").on("change", () => { toggleProductData(getActiveLanguage()); });
	$(".js-add-param-btn").on("click", () => {
		paramTemplate.clone().appendTo(".js-params-list").find(".js-delete-param-btn").on("click", (evt) => {
			$(evt.currentTarget).parent().remove();
		});
	});
	$(".js-add-uni-param-btn").on("click", () => {
		paramTemplate.clone().appendTo(".js-uni-params-list").find(".js-delete-param-btn").on("click", (evt) => {
			$(evt.currentTarget).parent().remove();
		});
	});
	$(".js-upload-images-btn").on("click", () => { uploadImages(); });
}

function findTemplates() {
	paramTemplate = $(".js-templates > .js-param-template").removeClass("js-param-template").addClass("js-param").detach();
}

function save() {
	console.log(getProductDataAsJSON("create"));
	$.post({
		url: "/data/admin/database/edit_product",
		data: { "product_data": getProductDataAsJSON("create") },
		success: (data) => {
			console.log(data);
			//$("#adminContent").html("Товар успешно создан");
		}
	});
}

function getProductLanguageData(language = languages[1]) {
	let data = $(`.js-product-data_${language}`);
	
	let result = {
		name: data.find(".js-product-name").val(),
		description: data.find(".js-product-description").val(),
		params: crawler.getParams(data.find(".js-params-list"))
	};
	
	return ((result.name + result.description).length > 0 || language === languages[1]) ? result : getProductLanguageData();
}

function getProductDataAsJSON(action) {
	return JSON.stringify(crawler.crawl(action));
}

function uploadImages() {
	let data = new FormData();
	$.each($(".js-image-uploader")[0].files, (index, file) => { data.append(index, file); });
	
	$.ajax({
		url: "/data/admin/load/img/jpg/product",
		type: "POST",
		data: data,
		cache: false,
		processData: false,
		contentType: false,
		dataType: "json",
		success: (response) => {
			let result = JSON.parse(response);
			$(".js-product-images").html(result.reduce((html, link) => {
				return html + `<img src="/${link}" width="100px"/>`;
			}, ""));
		}
	});
}

$(() => {
	generateProductDatas();
	toggleProductData();
	bindEvents();
	findTemplates();
});