let languages = {
	"_active": 0,
	"_get": item => languages[item][languages["_active"]],
	"_getCountry": item => languages["countries"][item][languages["_active"]],
	"lang-code": ["EN", "RU", "CS", "IT", "ZH"],
	"lang-symbol": ["EN", "RU", "ČR", "IT", "中文"],
	"lang": ["Language:", "Язык:", "Jazyk:", "Lingua:", "语言:"],
	"country": ["Country:", "Страна:", "Země:", "Paese:", "国家:"],
	"geoerror": ["Please allow access to your geoposition to identify your country", "Пожалуйста, разрешите доступ к геопозиции для определения вашей страны", "TODO", "TODO", "TODO"],
	"home-page": ["Home", "Главная", "Hlavní stránka", "Home", "首页"],
	"about-page": ["About", "О нас", "O nás", "Di noi", "关于我们"],
	"gallery-page": ["Gallery", "Галерея", "Galerie", "Galleria", "画廊"],
	"women-page": ["For women", "Для женщин", "Pro ženy", "Per le donne", "对于女性"],
	"men-page": ["For men", "Для мужчин", "Pro muže", "Per gli uomini", "对于男人"],
	"baby-page": ["Baby", "Детское", "Dítě", "Infante", "对于儿童"],
	"news-page": ["News", "Новости", "Novinky", "News", "新闻"],
	"area-europe": ["Europe:", "Европа:", "Evropa:", "Europa:", "欧洲:"],
	"area-america": ["America:", "Америка:", "Amerika:", "America:", "美国:"],
	"area-asia": ["Asia:", "Азия:", "Asie:", "Asia:", "亚洲:"],
	"choose-country": ["Choose your country", "Выберите страну", "Vyberte zemi", "Seleziona un paese", "选择的国家"],
	"countries": {
		"austria": ["Austria", "Австрия", "Rakousko", "Austria", "奥地利"],
		"armenia": ["Armenia", "Армения", "Arménie", "Armenia", "亚美尼亚"],
		"belarus": ["Belarus", "Беларусь", "Bělorusko", "Bielorussia", "白俄罗斯"],
		"belgium": ["Belgium", "Бельгия", "Belgie", "Belgio", "比利时"],
		"bulgaria": ["Bulgaria", "Болгария", "Bulharsko", "Bulgaria", "保加利亚"],
		"greatbritain": ["Great Britain", "Великобритания", "Británie", "Gran Bretagna", "英国"],
		"hungary": ["Hungary", "Венгрия", "Maďarsko", "Ungheria", "匈牙利"],
		"germany": ["Germany", "Германия", "Německo", "Germania", "德国"],
		"greece": ["Greece", "Греция", "Řecko", "Grecia", "希腊"],
		"georgia": ["Georgia", "Грузия", "Gruzie", "Georgia", "格鲁吉亚"],
		"denmark": ["Denmark", "Дания", "Dánsko", "Danimarca", "丹麦"],
		"ireland": ["Ireland", "Ирландия", "Irsko", "Irlanda", "爱尔兰"],
		"spain": ["Spain", "Испания", "Španělsko", "Spagna", "西班牙"],
		"italy": ["Italy", "Италия", "Itálie", "Italia", "意大利"],
		"cyprus": ["Cyprus", "Кипр", "Kypr", "Cipro", "塞浦路斯"],
		"latvia": ["Latvia", "Латвия", "Lotyšsko", "Lettonia", "拉脱维亚"],
		"lithuania": ["Lithuania", "Литва", "Litva", "Lituania", "立陶宛"],
		"luxembourg": ["Luxembourg", "Люксембург", "Lucembursko", "Lussemburgo", "卢森堡"],
		"malta": ["Malta", "Мальта", "Malta", "Malta", "马耳他"],
		"monaco": ["Monaco", "Монако", "Monako", "Monaco", "摩纳哥"],
		"netherlands": ["Netherlands", "Нидерланды", "Nizozemsko", "Olanda", "荷兰"],
		"poland": ["Poland", "Польша", "Polsko", "Polonia", "波兰"],
		"portugal": ["Portugal", "Португалия", "Portugalsko", "Portogallo", "葡萄牙"],
		"russia": ["Russia", "Россия", "Rusko", "Russia", "俄罗斯"],
		"romania": ["Romania", "Румыния", "Rumunsko", "Romania", "罗马尼亚"],
		"slovakia": ["Slovakia", "Словакия", "Slovensko", "Slovacchia", "斯洛伐克"],
		"slovenia": ["Slovenia", "Словения", "Slovinsko", "Slovenia", "斯洛文尼亚"],
		"ukraine": ["Ukraine", "Украина", "Ukrajina", "Ucraina", "乌克兰"],
		"finland": ["Finland", "Финляндия", "Finsko", "Finlandia", "芬兰"],
		"france": ["France", "Франция", "Francie", "Francia", "法国"],
		"croatia": ["Croatia", "Хорватия", "Chorvatsko", "Croazia", "克罗地亚"],
		"czechrepublic": ["Czech Republic", "Чешская республика", "Česká Republika", "Repubblica Ceca", "捷克共和国"],
		"sweden": ["Sweden", "Швеция", "Švédsko", "Svezia", "瑞典"],
		"estonia": ["Estonia", "Эстония", "Estonsko", "Estonia", "爱沙尼亚"],
		"usa": ["USA", "США", "USA", "USA", "美国"],
		"canada": ["Canada", "Канада", "Kanada", "Canada", "加拿大"],
		"mexico": ["Mexico", "Мексика", "Mexiko", "Messico", "墨西哥"],
		"china": ["China", "Китай", "Čína", "Cina", "中国"],
		"japan": ["Japan", "Япония", "Japonsko", "Giappone", "日本"],
		"southkorea": ["South Korea", "Южная Корея", "Jižní Korea", "Corea", "韩国"]
	}
};

let countries = {
	"_active": null,
	"_change": country => {
		countries["_active"] = countries["list"][country];
		countries["_active"]["latin"] = country;
	},
	get latin() { return this["_active"]["latin"] },
	get ymaps() { return this["_active"]["ymaps"] },
	get currency() { return this["_active"]["cur"] },
	"list": null
};

function changeLanguage(language) {
	document.getElementById("lang-" + languages._get("lang-code").toLowerCase()).classList.remove("active");
	languages["_active"] = getLanguageIndex(language);
	document.getElementById("lang-" + languages._get("lang-code").toLowerCase()).classList.add("active");

	Array.from(document.getElementsByClassName("languageable")).forEach(item => item.innerHTML = languages._get(item.id));
	Array.from(document.getElementsByClassName("country-btn")).forEach(item => item.innerHTML = languages._getCountry(item.id.slice(8)));

	updateCountryLabel();
}

function changeCountry(evt) {
	let country = evt ? (
		$('a.country-btn.active').removeClass("active"),
		evt.currentTarget.id.slice(8)
	) : countries.latin;
	
	countries._change(country);
	$('#country-' + countries.latin).addClass("active");
	
	updateCountryLabel();
}

function updateCountryLabel() {
	document.getElementById("country-name").innerHTML = languages._getCountry(countries.latin) + " (" + getCurrencySign() + ")";
}

function getCurrencySign() {
	switch(countries.currency) {
		case 0: return "Kč"; // crone
		case 1: return "&#8381;"; // rouble
		case 2: return "&#36;"; // dollar
		default: return "&#8364;"; // euro
	}
}

function getCountryByYMaps(ymaps) {
	return Object.entries(countries["list"]).find(item => item[1]["ymaps"] == ymaps)[0];
}

function getLanguageIndex(language) {
	switch(language) {
		case "RU": return 1; // russian
		case "CS": return 2; // czech
		case "IT": return 3; // italian
		case "ZH": return 4; // chinese
		default: return 0; // english
	}
}

$(document).ready(function() {
	// Country identifying
	if(YMaps.location) countries._change(getCountryByYMaps(YMaps.location.country) ?? "greatbritain");
	else alert(languages._get("geoerror"));
	
	// Language identifying
	languages["_active"] = navigator.language ? getLanguageIndex(navigator.language.slice(0, 2).toUpperCase()) : 0;
	
	// Country button onclick function binding
	$('a.country-btn').click(changeCountry);
	
	changeCountry();
	changeLanguage(languages._get("lang-code"));
})
