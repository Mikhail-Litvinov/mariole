let language = {
	active: undefined, // Contains active language
	get code() { return this.active["lang-code"]; },
	get: function(item) { return this.active[item]; }, // Returns requested language field
	validate: (lang) => ["ru", "cs", "it", "zh"].includes(lang) ? lang : "en" // If language is provided, then returns it, else returns default (en)
};

let country = {
	active: undefined, // Contains active country
	get latin() { return this.active.latin; }, // Returns latin name of active country
	change: function(country) { // Sets new country
		country = this.validate(country);
		this.active = { // Clone original country data object and add latin name
			latin: country,
			...this.list[country]
		};
	},
	validate: function(country) { return Object.keys(this.list).includes(country) ? country : "unitedkingdom"; },
	list: undefined // Contains all provided countries
}

let currency = {
	get sign() { // Returns currency sign of active country
		switch(country.active.cur) {
			case 0: return "Kč"; // Returns czech koruna sign
			case 1: return "&#8381;"; // Returns russian rouble sign
			case 2: return "&#36;"; // Returns dollar sign
			default: return "&#8364;"; // Returns euro sign
		}
	},
	get name() { // Returns currency name of active country
		switch(country.active.cur) {
			case 0: return "koruna";
			case 1: return "rouble";
			case 2: return "dollar";
			default: return "euro";
		}
	}
};

function changeLanguage(evt) {
	$(".lang-btn.active").removeClass("active"); // Make last language button inactive
		
	$.getJSON("/data/language_file/" + evt.currentTarget.id.replace("lang-", ""), (data) => { // Load new language file
		language.active = data; // Set new language in config object
		translatePage(); // Translate page to a new language
	});
}

function translatePage(isTriggerable = true) {
	$(".languageable").html(function() { return language.get(this.id); }); // Translate the page to the new language (OLD WAY, SHOULD BE REMOVED)
	$("[langid]").html(function() { return language.get(this.getAttribute("langid")); }); // Translate the page to the new language
	$("#lang-" + language.code).addClass("active"); // Make new language button active
	
	updateCountryLabel(); // Update country label with new language
	
	if(isTriggerable) $(window).trigger("onlanguagechange");
	cookies.set("language", language.code, { "max-age": 60*60*24*31 });
}

function changeCountry(evt, isTriggerable = true) {
	let newCountry = evt ? ( // If evt is given (method executed by pressing a country button)
		$("a.country-btn.active").removeClass("active"), // Make last country button inactive
		evt.currentTarget.id.replace("country-", "") // Remove "country-" part of DOM"s id
	) : country.latin; // If evt is not given (method executed after page loading), use default country (not Russia)
	
	country.change(newCountry); // Set new country in config object
	$(`#country-${country.latin}`).addClass("active"); // Make new country button active
	
	updateCountryLabel(); // Update country label with new country
	
	if(isTriggerable) $(window).trigger("oncountrychange");
	cookies.set("country", country.latin, { "max-age": 60*60*24*31 });
}

function updateCountryLabel() {
	$("#country-name").html(language.get(`country-${country.latin}`) + ` (${currency.sign})`); // Replace html in DOM with id "country-name"
}

$(() => {
	let init = (_country, _language) => {
		$.when(
			$.getJSON("/data/countries_list"),
			$.getJSON("/data/language_file/" + language.validate(_language ?? window.navigator?.language?.slice(0, 2).toLowerCase() ?? ""))
		).then((countriesResponse, langResponse) => {
			$("script#ymaps-placeholder").remove();
			
			language.active = langResponse[0];
			country.list = countriesResponse[0];
			country.change(_country);
			
			$(".country-btn").click(changeCountry);
			$(".lang-btn").click(changeLanguage);
			
			changeCountry(undefined, false); // Initial country update, doesn't trigger oncountrychange
			translatePage(false); // Initial language update, doesn't trigger onlanguagechange
			
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