translator = {
	language: {
		active: undefined, // Contains active language
		get code() { return this.active["lang-code"]; },
		get(item) { return this.active[item]; }, // Returns requested language field
		validate(language) { return ["ru", "cs", "it", "zh"].includes(language) ? language : "en"; },
		prepare(language) {
			if(language !== this.code) {
				$.getJSON(`/data/language_file/${language}`, (data) => {
					this.active = data;
					this.change(true);
				});
			}
		},
		change(isTriggerable = true) {
			if(isTriggerable) $(window).trigger("onlanguagechange");
			cookies.set("language", this.code);
			translator.translate();
		}
	},
	country: {
		active: undefined, // Contains active country
		get rawCurrency() { return this.active?.cur; },
		get latin() { return this.active?.latin; }, // Returns latin name of active country
		validate(country) { return Object.keys(this.list).includes(country) ? country : "unitedkingdom"; },
		list: undefined, // Contains all provided countries
		prepare(country) { // Sets new country
			country = this.validate(country); // Check if country available
			this.active = { // Clone original country data object and add latin name
				latin: country,
				...this.list[country]
			};
		},
		change(country, isTriggerable = true) {
			if(country !== this.latin) {
				this.prepare(country);
				if(isTriggerable) $(window).trigger("oncountrychange");
				cookies.set("country", this.latin);
				this.updateLabel(); // Update country label with new country
			}
		},
		updateLabel() {
			$("#country-name").html(translator.language.get(`country-${this.latin}`) + ` (${translator.currency.sign})`);
		}
	},
	currency: {
		get name() { // Returns currency name of active country
			switch(translator.country.rawCurrency) {
				case 0: return "koruna";
				case 1: return "rouble";
				case 2: return "dollar";
				default: return "euro";
			}
		},
		get sign() { // Returns currency sign of active country
			switch(this.name) {
				case "koruna": return "Kč";
				case "rouble": return "&#8381;";
				case "dollar": return "&#36;";
				case "euro": return "&#8364;";
			}
		}
	},
	translate(isTriggerable = true) {
		$(".languageable").html(function() { return translator.language.get(this.id); }); // Translate the page to the new language (OLD WAY, SHOULD BE REMOVED)
		$("[langid]").html(function() { return translator.language.get(this.getAttribute("langid")); }); // Translate the page to the new language
		$("#lang-" + translator.language.code).addClass("active"); // Make new language button active
		
		this.country.updateLabel(); // Update country label with new language
	}
}

$(() => {
	let init = (_country, _language) => {
		$.when(
			$.getJSON("/data/countries_list"),
			$.getJSON("/data/language_file/" + translator.language.validate(_language ?? window.navigator?.language?.slice(0, 2).toLowerCase()))
		).then((countriesResponse, langResponse) => {
			$("script#ymaps-placeholder").remove();
			
			translator.country.list = countriesResponse[0];
			translator.language.active = langResponse[0];
			
			$(".country-btn").each((index, element) => {
				let id = element.id;
				$(element).click(() => {
					$(".country-btn.active").removeClass("active");
					$(element).addClass("active");
					translator.country.change(id.replace("country-", ""));
				});
			});
			$(".lang-btn").each((index, element) => {
				let id = element.id;
				$(element).click(() => {
					$(".lang-btn.active").removeClass("active");
					$(element).addClass("active");
					translator.language.prepare(id.replace("lang-", ""));
				});
			});
			
			translator.country.change(_country, false); // Initial country update, doesn't trigger oncountrychange
			translator.language.change(false); // Initial language update, doesn't trigger onlanguagechange
			
			$(window).trigger("navigate").off("navigate"); // Init navigation module
		});
	};
	
	
	let cookiedCountry = cookies.get("country"), cookiedLanguage = cookies.get("language");
	if(cookiedCountry) init(cookiedCountry, cookiedLanguage); // If country is in cookie
	else { // Else load YMaps and use it's country
		$(window).on("ymaps", () => { // One-time intermediate event, will be executed when YMaps will be loaded, but only base
			ymaps?.ready(() => { // This will be executed when YMaps.geolocation will be loaded
				init(ymaps.geolocation?.country.toLowerCase().replace(" ", ""), cookiedLanguage);
				ymaps = undefined;
			});
		});
		$("script#ymaps-placeholder").attr({
			"src": "https://api-maps.yandex.ru/2.0-stable/?load=geolocation&lang=en-US", // YMaps module
			"onload": "$(window).trigger('ymaps').off('ymaps');" // This will be executed after YMaps primary loading
		});
	}

});