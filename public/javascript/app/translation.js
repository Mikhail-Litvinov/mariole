app.translation = {
	language: {
		active: undefined, // Contains active language
		get code() { return this.active["lang-code"]; },
		get(item) { return this.active[item]; }, // Returns requested language field
		validate(language) { return ["ru", "cs", "it", "zh"].includes(language) ? language : "en"; },
		prepare(language) {
			if(language === this.code) return;
			
			$.getJSON(`/data/database/language_file/${language}`, (data) => {
				this.active = data;
				this.change(true);
			});
		},
		change(isTriggerable = true) {
			if(isTriggerable) $(window).trigger("onlanguagechange");
			app.cookies.base.set("language", this.code);
			this.translate();
		},
		translate() {
			$("html:first").attr("lang", this.code);
			for(let element of $("[langid]")) element.innerHTML = this.get(element.getAttribute("langid"));
			app.translation.country.updateLabel();
		}
	},
	country: {
		active: undefined, // Contains active country
		get rawCurrency() { return this.active?.currency; },
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
			if(country === this.latin) return;
			
			this.prepare(country);
			if(isTriggerable) $(window).trigger("oncountrychange");
			app.cookies.base.set("country", this.latin);
			this.updateLabel(); // Update country label with new country
		},
		updateLabel() {
			$(".js-country-name").html(app.translation.language.get(`country-${this.latin}`) + ` (${app.translation.currency.sign})`);
		}
	},
	currency: {
		get name() { // Returns currency name of active country
			switch(app.translation.country.rawCurrency) {
				case 0: return "EUR";
				case 1: return "USD";
				case 2: return "RUB";
				case 3: return "CZK";
			}
		},
		get sign() { // Returns currency sign of active country
			switch(this.name) {
				case "EUR": return "&#8364;";
				case "USD": return "&#36;";
				case "RUB": return "&#8381;";
				case "CZK": return "Kč";
			}
		}
	}
}

$(window).on("onload.app_translation", () => {
	let init = (_country, _language) => {
		let languageFileName = app.translation.language.validate(_language ?? window.navigator?.language?.slice(0, 2).toLowerCase());
		$.when(
			$.getJSON("/data/database/countries_list"),
			$.getJSON("/data/database/language_file/" + languageFileName)
		).then((countriesResponse, langResponse) => {
			$("script#ymaps-placeholder").remove();
			
			app.translation.country.list = countriesResponse[0];
			app.translation.language.active = langResponse[0];
			
			$(".country-btn").each((index, element) => {
				let langid = element.getAttribute("langid");
				$(element).click(() => {
					$(".country-btn.active").removeClass("active");
					$(element).addClass("active");
					app.translation.country.change(langid.replace("country-", ""));
				});
			});
			$(".lang-btn").each((index, element) => {
				let id = element.id;
				$(element).click(() => {
					$(".lang-btn.active").removeClass("active");
					$(element).addClass("active");
					app.translation.language.prepare(id.replace("lang-", ""));
				});
			});
			
			app.translation.country.change(_country, false); // Initial country update, doesn't trigger oncountrychange
			app.translation.language.change(false); // Initial language update, doesn't trigger onlanguagechange
			
			$(window).trigger("navigate"); // Init navigation module
		});
	};
	
	let cookiedCountry = app.cookies.base.get("country");
	let cookiedLanguage = app.cookies.base.get("language");
	
	if(cookiedCountry) init(cookiedCountry, cookiedLanguage); // If country is in cookie
	else { // Else load YMaps and use it's country
		$("script#ymaps-placeholder").attr({
			"charset": "UTF-8", // Just in case
			"type": "text/javascript", // Just in case too
			"src": "https://api-maps.yandex.ru/2.0-stable/?load=geolocation&lang=en-US", // YMaps module
		}).on("load", () => {
			ymaps?.ready(() => { // This will be executed when YMaps.geolocation is loaded
				init(ymaps.geolocation?.country.toLowerCase().replace(" ", ""), cookiedLanguage);
				ymaps = undefined;
			});
		});
	}
});