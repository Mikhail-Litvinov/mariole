let language = {
	"_active": null, // Contains active language
	"get": item => language["_active"][item], // Returns requested language field
	"validate": lang => ["ru", "cs", "it", "zh"].includes(lang) ? lang : "en" // If language is provided, then returns it, else returns default (en)
};

let countries = {
	"_active": null, // Contains active country
	"change": country => { // Sets new country
		countries["_active"] = Object.assign({}, countries["list"][country]); // Clones country object
		countries["_active"]["latin"] = country; // Writes active country latin name
	},
	"getByYMaps": ymaps => Object.entries(countries["list"]).find(item => item[1]["ymaps"] == ymaps)[0], // Find country by YMaps name
	get latin() { return this["_active"]["latin"] }, // Returns latin name of active country
	get ymaps() { return this["_active"]["ymaps"] }, // Returns ymaps name of active country
	get sign() { // Returns currency sign of active country
		switch(this["_active"]["cur"]) {
			case 0: return "Kč"; // Returns czech koruna sign
			case 1: return "&#8381;"; // Returns russian rouble sign
			case 2: return "&#36;"; // Returns dollar sign
			default: return "&#8364;"; // Returns euro sign
		}
	},
	"list": null // Contains all provided countries
};

function changeLanguage(evt) {
	$('a.lang-btn.active').removeClass("active"); // Make last language button inactive
		
	$.getJSON(`config/lang/${evt.currentTarget.id.replace("lang-", "")}.json`, data => { // Load new language file from server
		language["_active"] = data; // Set new language in config object
		translatePage(); // Translate page to a new language
	});
}

function translatePage() {
	$('.languageable').html(function() { return language.get(this.id); }); // Translate the page to the new language
	$('[langid]').html(function() { return language.get(this.getAttribute("langid")); }); // Translate the page to the new language
	$(`#lang-${language.get("lang-code")}`).addClass("active"); // Make new language button active
	updateCountryLabel(); // Update country label with new language
}

function changeCountry(evt) {
	let country = evt ? ( // If evt is given (method executed by pressing a country button)
		$('a.country-btn.active').removeClass("active"), // Make last country button inactive
		evt.currentTarget.id.replace("country-", "") // Remove "country-" part of DOM's id
	) : countries.latin; // If evt is not given (method executed after page loading), use default country (not Russia)
	
	countries.change(country); // Set new country in config object
	$(`#country-${countries.latin}`).addClass("active"); // Make new country button active
	
	updateCountryLabel(); // Update country label with new country
}

function updateCountryLabel() {
	$('#country-name').html(language.get(`country-${countries.latin}`) + ` (${countries.sign})`); // Replace html in DOM with id "country-name"
}

$(() => {
	// If navigator is available, then use it's language, else default
	let lang = language.validate(navigator ? navigator.language.slice(0, 2).toLowerCase() : "");
	$.when(
		$.getJSON("/config/countries.json"), // Load countries list file from server
		$.getJSON(`/config/lang/${lang}.json`) // Load current language file from server
	).then((countriesResponse, langResponse) => {
		countries["list"] = countriesResponse[0]; // Load list of countries into config object
		
		// If YMaps is available, then check it's country and if it's provided, then use this country or default (GB), else throw an alert
		YMaps.location ? countries.change(countries.getByYMaps(YMaps.location.country) ?? "greatbritain") : alert(language.get("geoerror"));

		language["_active"] = langResponse[0]; // Set default language in config object
		
		$('a.country-btn').click(changeCountry); // Country buttons onclick function binding
		$('a.lang-btn').click(changeLanguage); // Language buttons onclick function binding

		changeCountry(); // Initial country update
		translatePage(); // Initial language update
	});
});