let homeText = document.getElementById("home-page");
let aboutText = document.getElementById("about-page");
let galleryText = document.getElementById("gallery-page");
let womenText = document.getElementById("for-women-page");
let menText = document.getElementById("for-men-page");
let childrenText = document.getElementById("for-children-page");
let blogText  = document.getElementById("blog-page");

let aut = document.getElementById("AUT");
let arm = document.getElementById("ARM");
let blr = document.getElementById("BLR");
let bel = document.getElementById("BEL");
let bgr = document.getElementById("BGR");
let gbr = document.getElementById("GBR");
let hun = document.getElementById("HUN");
let deu = document.getElementById("DEU");
let grc = document.getElementById("GRC");
let geo = document.getElementById("GEO");
let dnk = document.getElementById("DNK");
let irl = document.getElementById("IRL");
let esp = document.getElementById("ESP");
let ita = document.getElementById("ITA");
let cyp = document.getElementById("CYP");
let lva = document.getElementById("LVA");
let ltu = document.getElementById("LTU");
let lux = document.getElementById("LUX");
let mlt = document.getElementById("MLT");
let mco = document.getElementById("MCO");
let nld = document.getElementById("NLD");
let pol = document.getElementById("POL");
let prt = document.getElementById("PRT");
let rus = document.getElementById("RUS");
let rou = document.getElementById("ROU");
let svk = document.getElementById("SVK");
let svn = document.getElementById("SVN");
let ukr = document.getElementById("UKR");
let fin = document.getElementById("FIN");
let fra = document.getElementById("FRA");
let hrv = document.getElementById("HRV");
let cze = document.getElementById("CZE");
let swe = document.getElementById("SWE");
let est = document.getElementById("EST");
let usa = document.getElementById("USA");
let can = document.getElementById("CAN");
let mex = document.getElementById("MEX");
let chn = document.getElementById("CHN");
let jpn = document.getElementById("JPN");
let kor = document.getElementById("KOR");

let LangAbb = document.getElementById("langAbb");
let lang = document.getElementById("lang");
let country = document.getElementById("country");
let countryName = document.getElementById("country-name");

let RU = document.getElementById("RU");
let EN = document.getElementById("EN");
let CZ = document.getElementById("CZ");
let IT = document.getElementById("IT");
let CH = document.getElementById("CH");

let europe = document.getElementById("area-europe");
let america = document.getElementById("area-america");
let asia = document.getElementById("area-asia");
let chooseText = document.getElementById ("chooseCountry");

function changeLanguage(evt, language) {

    var i;
    var langBtns = document.getElementsByClassName("lang-btn");

    for (i = 0; i < langBtns.length; i++) {
        langBtns[i].className = langBtns[i].className.replace(" active", "");

    }

    evt.currentTarget.className += " active";

    if (RU.classList.contains("active")) {
        LangAbb.textContent = "RU";
        lang.textContent = "Язык:";
        country.innerHTML = "Страна:";
        changeButtonsRU();
        if (usa.classList.contains("active")) {
            countryName.innerHTML = "США (&#36;)";
        }
        if (can.classList.contains("active")) {
            countryName.innerHTML = "Канада (&#36;)";
        }
        if (mex.classList.contains("active")) {
            countryName.innerHTML = "Мексика (&#36;)";
        }
        if (jpn.classList.contains("active")) {
            countryName.innerHTML = "Япония (&#36;)";
        }
        if (kor.classList.contains("active")) {
            countryName.innerHTML = "Южная Корея (&#36;)";
        }
        if (est.classList.contains("active")) {
            countryName.innerHTML = "Эстония (&#8364;)";
        }
        if (swe.classList.contains("active")) {
            countryName.innerHTML = "Швеция (&#8364;)";
        }
        if (hrv.classList.contains("active")) {
            countryName.innerHTML = "Хорватия (&#8364;)";
        }
        if (fin.classList.contains("active")) {
            countryName.innerHTML = "Финляндия (&#8364;)";
        }
        if (fra.classList.contains("active")) {
            countryName.innerHTML = "Франция (&#8364;)";
        }
        if (svn.classList.contains("active")) {
            countryName.innerHTML = "Словения (&#8364;)";
        }
        if (svk.classList.contains("active")) {
            countryName.innerHTML = "Словакия (&#8364;)";
        }
        if (rou.classList.contains("active")) {
            countryName.innerHTML = "Румыния (&#8364;)";
        }
        if (aut.classList.contains("active")) {
            countryName.innerHTML = "Австрия (&#8364;)";
        }
        if (bel.classList.contains("active")) {
            countryName.innerHTML = "Бельгия (&#8364;)";
        }
        if (bgr.classList.contains("active")) {
            countryName.innerHTML = "Болгария (&#8364;)";
        }
        if (gbr.classList.contains("active")) {
            countryName.innerHTML = "Великобритания (&#8364;)";
        }
        if (hun.classList.contains("active")) {
            countryName.innerHTML = "Венгрия (&#8364;)";
        }
        if (deu.classList.contains("active")) {
            countryName.innerHTML = "Германия (&#8364;)";
        }
        if (grc.classList.contains("active")) {
            countryName.innerHTML = "Греция (&#8364;)";
        }
        if (dnk.classList.contains("active")) {
            countryName.innerHTML = "Дания (&#8364;)";
        }
        if (irl.classList.contains("active")) {
            countryName.innerHTML = "Ирландия (&#8364;)";
        }
        if (esp.classList.contains("active")) {
            countryName.innerHTML = "Испания (&#8364;)";
        }
        if (cyp.classList.contains("active")) {
            countryName.innerHTML = "Кипр (&#8364;)";
        }
        if (lva.classList.contains("active")) {
            countryName.innerHTML = "Латвия (&#8364;)";
        }
        if (ltu.classList.contains("active")) {
            countryName.innerHTML = "Литва (&#8364;)";
        }
        if (lux.classList.contains("active")) {
            countryName.innerHTML = "Люксембург (&#8364;)";
        }
        if (mlt.classList.contains("active")) {
            countryName.innerHTML = "Мальта (&#8364;)";
        }
        if (mco.classList.contains("active")) {
            countryName.innerHTML = "Монако (&#8364;)";
        }
        if (nld.classList.contains("active")) {
            countryName.innerHTML = "Нидерланды (&#8364;)";
        }
        if (pol.classList.contains("active")) {
            countryName.innerHTML = "Польша (&#8364;)";
        }
        if (prt.classList.contains("active")) {
            countryName.innerHTML = "Португалия (&#8364;)";
        }
        if (chn.classList.contains("active")) {
            countryName.innerHTML = "Китай (&#36;)";
        }
        if (ita.classList.contains("active")) {
            countryName.innerHTML = "Италия (&#8364;)";
        }
        if (cze.classList.contains("active")) {
            countryName.innerHTML = "Чешская республика (Kč)";
        }
        if (arm.classList.contains("active")) {
            countryName.innerHTML = "Армения (&#36;)";
        }
        if (blr.classList.contains("active")) {
            countryName.innerHTML = "Беларусь (&#36;)";
        }
        if (geo.classList.contains("active")) {
            countryName.innerHTML = "Грузия (&#36;)";
        }
        if (rus.classList.contains("active")) {
            countryName.innerHTML = "Россия (&#8381;)";
        }
        if (ukr.classList.contains("active")) {
            countryName.innerHTML = "Украина (&#36;)";
        }
    }

    if (EN.classList.contains("active")) {
        LangAbb.textContent = "EN";
        lang.textContent = "Language:";
        country.innerHTML = "Country:";
        changeButtonsEN();
        if (usa.classList.contains("active")) {
            countryName.innerHTML = "USA (&#36;)";
        }
        if (can.classList.contains("active")) {
            countryName.innerHTML = "Canada (&#36;)";
        }
        if (mex.classList.contains("active")) {
            countryName.innerHTML = "Mexico (&#36;)";
        }
        if (jpn.classList.contains("active")) {
            countryName.innerHTML = "Japan (&#36;)";
        }
        if (kor.classList.contains("active")) {
            countryName.innerHTML = "South Korea (&#36;)";
        }
        if (est.classList.contains("active")) {
            countryName.innerHTML = "Estonia (&#8364;)";
        }
        if (swe.classList.contains("active")) {
            countryName.innerHTML = "Sweden (&#8364;)";
        }
        if (hrv.classList.contains("active")) {
            countryName.innerHTML = "Croatia (&#8364;)";
        }
        if (fin.classList.contains("active")) {
            countryName.innerHTML = "Finland (&#8364;)";
        }
        if (fra.classList.contains("active")) {
            countryName.innerHTML = "France (&#8364;)";
        }
        if (svn.classList.contains("active")) {
            countryName.innerHTML = "Slovenia (&#8364;)";
        }
        if (svk.classList.contains("active")) {
            countryName.innerHTML = "Slovakia (&#8364;)";
        }
        if (rou.classList.contains("active")) {
            countryName.innerHTML = "Romania (&#8364;)";
        }
        if (aut.classList.contains("active")) {
            countryName.innerHTML = "Austria (&#8364;)";
        }
        if (bel.classList.contains("active")) {
            countryName.innerHTML = "Belgium (&#8364;)";
        }
        if (bgr.classList.contains("active")) {
            countryName.innerHTML = "Bulgaria (&#8364;)";
        }
        if (gbr.classList.contains("active")) {
            countryName.innerHTML = "Great Britain (&#8364;)";
        }
        if (hun.classList.contains("active")) {
            countryName.innerHTML = "Hungary (&#8364;)";
        }
        if (deu.classList.contains("active")) {
            countryName.innerHTML = "Germany (&#8364;)";
        }
        if (grc.classList.contains("active")) {
            countryName.innerHTML = "Greece (&#8364;)";
        }
        if (dnk.classList.contains("active")) {
            countryName.innerHTML = "Denmark (&#8364;)";
        }
        if (irl.classList.contains("active")) {
            countryName.innerHTML = "Ireland (&#8364;)";
        }
        if (esp.classList.contains("active")) {
            countryName.innerHTML = "Spain (&#8364;)";
        }
        if (cyp.classList.contains("active")) {
            countryName.innerHTML = "Cyprus (&#8364;)";
        }
        if (lva.classList.contains("active")) {
            countryName.innerHTML = "Latvia (&#8364;)";
        }
        if (ltu.classList.contains("active")) {
            countryName.innerHTML = "Lithuania (&#8364;)";
        }
        if (lux.classList.contains("active")) {
            countryName.innerHTML = "Luxembourg (&#8364;)";
        }
        if (mlt.classList.contains("active")) {
            countryName.innerHTML = "Malta (&#8364;)";
        }
        if (mco.classList.contains("active")) {
            countryName.innerHTML = "Monaco (&#8364;)";
        }
        if (nld.classList.contains("active")) {
            countryName.innerHTML = "Netherlands (&#8364;)";
        }
        if (pol.classList.contains("active")) {
            countryName.innerHTML = "Poland (&#8364;)";
        }
        if (prt.classList.contains("active")) {
            countryName.innerHTML = "Portugal (&#8364;)";
        }
        if (chn.classList.contains("active")) {
            countryName.innerHTML = "China (&#36;)";
        }
        if (ita.classList.contains("active")) {
            countryName.innerHTML = "Italy (&#8364;)";
        }
        if (cze.classList.contains("active")) {
            countryName.innerHTML = "Czech Republic (Kč)";
        }
        if (arm.classList.contains("active")) {
            countryName.innerHTML = "Armenia (&#36;)";
        }
        if (blr.classList.contains("active")) {
            countryName.innerHTML = "Belarus (&#36;)";
        }
        if (geo.classList.contains("active")) {
            countryName.innerHTML = "Georgia (&#36;)";
        }
        if (rus.classList.contains("active")) {
            countryName.innerHTML = "Russia (&#8381;)";
        }
        if (ukr.classList.contains("active")) {
            countryName.innerHTML = "Ukraine (&#36;)";
        }
    }

    if (CZ.classList.contains("active")) {
        LangAbb.textContent = "ČR";
        lang.textContent = "Jazyk:";
        country.innerHTML = "Země:";
        changeButtonsCZ();
        if (usa.classList.contains("active")) {
            countryName.innerHTML = "USA (&#36;)";
        }
        if (can.classList.contains("active")) {
            countryName.innerHTML = "Kanada (&#36;)";
        }
        if (mex.classList.contains("active")) {
            countryName.innerHTML = "Mexiko (&#36;)";
        }
        if (jpn.classList.contains("active")) {
            countryName.innerHTML = "Japonsko (&#36;)";
        }
        if (kor.classList.contains("active")) {
            countryName.innerHTML = "Jižní Korea (&#36;)";
        }
        if (est.classList.contains("active")) {
            countryName.innerHTML = "Estonsko (&#8364;)";
        }
        if (swe.classList.contains("active")) {
            countryName.innerHTML = "Švédsko (&#8364;)";
        }
        if (hrv.classList.contains("active")) {
            countryName.innerHTML = "Chorvatsko (&#8364;)";
        }
        if (fin.classList.contains("active")) {
            countryName.innerHTML = "Finsko (&#8364;)";
        }
        if (fra.classList.contains("active")) {
            countryName.innerHTML = "Francie (&#8364;)";
        }
        if (svn.classList.contains("active")) {
            countryName.innerHTML = "Slovinsko (&#8364;)";
        }
        if (svk.classList.contains("active")) {
            countryName.innerHTML = "Slovensko (&#8364;)";
        }
        if (rou.classList.contains("active")) {
            countryName.innerHTML = "Rumunsko (&#8364;)";
        }
        if (aut.classList.contains("active")) {
            countryName.innerHTML = "Rakousko (&#8364;)";
        }
        if (bel.classList.contains("active")) {
            countryName.innerHTML = "Belgie (&#8364;)";
        }
        if (bgr.classList.contains("active")) {
            countryName.innerHTML = "Bulharsko (&#8364;)";
        }
        if (gbr.classList.contains("active")) {
            countryName.innerHTML = "Británie (&#8364;)";
        }
        if (hun.classList.contains("active")) {
            countryName.innerHTML = "Maďarsko (&#8364;)";
        }
        if (deu.classList.contains("active")) {
            countryName.innerHTML = "Německo (&#8364;)";
        }
        if (grc.classList.contains("active")) {
            countryName.innerHTML = "Řecko (&#8364;)";
        }
        if (dnk.classList.contains("active")) {
            countryName.innerHTML = "Dánsko (&#8364;)";
        }
        if (irl.classList.contains("active")) {
            countryName.innerHTML = "Irsko (&#8364;)";
        }
        if (esp.classList.contains("active")) {
            countryName.innerHTML = "Španělsko (&#8364;)";
        }
        if (cyp.classList.contains("active")) {
            countryName.innerHTML = "Kypr (&#8364;)";
        }
        if (lva.classList.contains("active")) {
            countryName.innerHTML = "Lotyšsko (&#8364;)";
        }
        if (ltu.classList.contains("active")) {
            countryName.innerHTML = "Litva (&#8364;)";
        }
        if (lux.classList.contains("active")) {
            countryName.innerHTML = "Lucembursko (&#8364;)";
        }
        if (mlt.classList.contains("active")) {
            countryName.innerHTML = "Malta (&#8364;)";
        }
        if (mco.classList.contains("active")) {
            countryName.innerHTML = "Monako (&#8364;)";
        }
        if (nld.classList.contains("active")) {
            countryName.innerHTML = "Nizozemsko (&#8364;)";
        }
        if (pol.classList.contains("active")) {
            countryName.innerHTML = "Polsko (&#8364;)";
        }
        if (prt.classList.contains("active")) {
            countryName.innerHTML = "Portugalsko (&#8364;)";
        }
        if (chn.classList.contains("active")) {
            countryName.innerHTML = "Čína (&#36;)";
        }
        if (ita.classList.contains("active")) {
            countryName.innerHTML = "Itálie (&#8364;)";
        }
        if (cze.classList.contains("active")) {
            countryName.innerHTML = "Česká Republika (Kč)";
        }
        if (arm.classList.contains("active")) {
            countryName.innerHTML = "Arménie (&#36;)";
        }
        if (blr.classList.contains("active")) {
            countryName.innerHTML = "Bělorusko (&#36;)";
        }
        if (geo.classList.contains("active")) {
            countryName.innerHTML = "Gruzie (&#36;)";
        }
        if (rus.classList.contains("active")) {
            countryName.innerHTML = "Rusko (&#8381;)";
        }
        if (ukr.classList.contains("active")) {
            countryName.innerHTML = "Ukrajina (&#36;)";
        }
    }

    if (IT.classList.contains("active")) {
        LangAbb.textContent = "IT";
        lang.textContent = "Lingua:";
        country.innerHTML = "Paese:";
        changeButtonsIT();
        if (usa.classList.contains("active")) {
            countryName.innerHTML = "USA (&#36;)";
        }
        if (can.classList.contains("active")) {
            countryName.innerHTML = "Canada (&#36;)";
        }
        if (mex.classList.contains("active")) {
            countryName.innerHTML = "Messico (&#36;)";
        }
        if (jpn.classList.contains("active")) {
            countryName.innerHTML = "Giappone (&#36;)";
        }
        if (kor.classList.contains("active")) {
            countryName.innerHTML = "Corea (&#36;)";
        }
        if (est.classList.contains("active")) {
            countryName.innerHTML = "Estonia (&#8364;)";
        }
        if (swe.classList.contains("active")) {
            countryName.innerHTML = "Svezia (&#8364;)";
        }
        if (hrv.classList.contains("active")) {
            countryName.innerHTML = "Croazia (&#8364;)";
        }
        if (fin.classList.contains("active")) {
            countryName.innerHTML = "Finlandia (&#8364;)";
        }
        if (fra.classList.contains("active")) {
            countryName.innerHTML = "France (&#8364;)";
        }
        if (svn.classList.contains("active")) {
            countryName.innerHTML = "Slovenia (&#8364;)";
        }
        if (svk.classList.contains("active")) {
            countryName.innerHTML = "Slovacchia (&#8364;)";
        }
        if (rou.classList.contains("active")) {
            countryName.innerHTML = "Romania (&#8364;)";
        }
        if (aut.classList.contains("active")) {
            countryName.innerHTML = "Austria (&#8364;)";
        }
        if (bel.classList.contains("active")) {
            countryName.innerHTML = "Belgio (&#8364;)";
        }
        if (bgr.classList.contains("active")) {
            countryName.innerHTML = "Bulgaria (&#8364;)";
        }
        if (gbr.classList.contains("active")) {
            countryName.innerHTML = "Gran Bretagna (&#8364;)";
        }
        if (hun.classList.contains("active")) {
            countryName.innerHTML = "Ungheria (&#8364;)";
        }
        if (deu.classList.contains("active")) {
            countryName.innerHTML = "Germania (&#8364;)";
        }
        if (grc.classList.contains("active")) {
            countryName.innerHTML = "Grecia (&#8364;)";
        }
        if (dnk.classList.contains("active")) {
            countryName.innerHTML = "Danimarca (&#8364;)";
        }
        if (irl.classList.contains("active")) {
            countryName.innerHTML = "Irlanda (&#8364;)";
        }
        if (esp.classList.contains("active")) {
            countryName.innerHTML = "Spagna (&#8364;)";
        }
        if (cyp.classList.contains("active")) {
            countryName.innerHTML = "Cipro (&#8364;)";
        }
        if (lva.classList.contains("active")) {
            countryName.innerHTML = "Lettonia (&#8364;)";
        }
        if (ltu.classList.contains("active")) {
            countryName.innerHTML = "Lituania (&#8364;)";
        }
        if (lux.classList.contains("active")) {
            countryName.innerHTML = "Lussemburgo (&#8364;)";
        }
        if (mlt.classList.contains("active")) {
            countryName.innerHTML = "Malta (&#8364;)";
        }
        if (mco.classList.contains("active")) {
            countryName.innerHTML = "Monaco (&#8364;)";
        }
        if (nld.classList.contains("active")) {
            countryName.innerHTML = "Olanda (&#8364;)";
        }
        if (pol.classList.contains("active")) {
            countryName.innerHTML = "Polonia (&#8364;)";
        }
        if (prt.classList.contains("active")) {
            countryName.innerHTML = "Portogallo (&#8364;)";
        }
        if (chn.classList.contains("active")) {
            countryName.innerHTML = "Cina (&#36;)";
        }
        if (ita.classList.contains("active")) {
            countryName.innerHTML = "Italia (&#8364;)";
        }
        if (cze.classList.contains("active")) {
            countryName.innerHTML = "Repubblica Ceca (Kč)";
        }
        if (arm.classList.contains("active")) {
            countryName.innerHTML = "Armenia (&#36;)";
        }
        if (blr.classList.contains("active")) {
            countryName.innerHTML = "Bielorussia (&#36;)";
        }
        if (geo.classList.contains("active")) {
            countryName.innerHTML = "Georgia (&#36;)";
        }
        if (rus.classList.contains("active")) {
            countryName.innerHTML = "Russia (&#8381;)";
        }
        if (ukr.classList.contains("active")) {
            countryName.innerHTML = "Ucraina (&#36;)";
        }
    }

    if (CH.classList.contains("active")) {
        LangAbb.textContent = "中文";
        lang.textContent = "语言:";
        country.innerHTML = "国家：";
        changeButtonsCH();
        if (usa.classList.contains("active")) {
            countryName.innerHTML = "乌克兰 (&#36;)";
        }
        if (can.classList.contains("active")) {
            countryName.innerHTML = "加拿大 (&#36;)";
        }
        if (mex.classList.contains("active")) {
            countryName.innerHTML = "墨西哥 (&#36;)";
        }
        if (jpn.classList.contains("active")) {
            countryName.innerHTML = "日本 (&#36;)";
        }
        if (kor.classList.contains("active")) {
            countryName.innerHTML = "韩国 (&#36;)";
        }
        if (est.classList.contains("active")) {
            countryName.innerHTML = "爱沙尼亚 (&#8364;)";
        }
        if (swe.classList.contains("active")) {
            countryName.innerHTML = "瑞典 (&#8364;)";
        }
        if (hrv.classList.contains("active")) {
            countryName.innerHTML = "克罗地亚 (&#8364;)";
        }
        if (fin.classList.contains("active")) {
            countryName.innerHTML = "芬兰 (&#8364;)";
        }
        if (fra.classList.contains("active")) {
            countryName.innerHTML = "法国 (&#8364;)";
        }
        if (svn.classList.contains("active")) {
            countryName.innerHTML = "斯洛文尼亚 (&#8364;)";
        }
        if (svk.classList.contains("active")) {
            countryName.innerHTML = "斯洛伐克 (&#8364;)";
        }
        if (rou.classList.contains("active")) {
            countryName.innerHTML = "罗马尼亚 (&#8364;)";
        }
        if (aut.classList.contains("active")) {
            countryName.innerHTML = "奥地利 (&#8364;)";
        }
        if (bel.classList.contains("active")) {
            countryName.innerHTML = "比利时 (&#8364;)";
        }
        if (bgr.classList.contains("active")) {
            countryName.innerHTML = "保加利亚 (&#8364;)";
        }
        if (gbr.classList.contains("active")) {
            countryName.innerHTML = "英国 (&#8364;)";
        }
        if (hun.classList.contains("active")) {
            countryName.innerHTML = "匈牙利 (&#8364;)";
        }
        if (deu.classList.contains("active")) {
            countryName.innerHTML = "德国 (&#8364;)";
        }
        if (grc.classList.contains("active")) {
            countryName.innerHTML = "希腊 (&#8364;)";
        }
        if (dnk.classList.contains("active")) {
            countryName.innerHTML = "丹麦 (&#8364;)";
        }
        if (irl.classList.contains("active")) {
            countryName.innerHTML = "爱尔兰 (&#8364;)";
        }
        if (esp.classList.contains("active")) {
            countryName.innerHTML = "西班牙 (&#8364;)";
        }
        if (cyp.classList.contains("active")) {
            countryName.innerHTML = "塞浦路斯 (&#8364;)";
        }
        if (lva.classList.contains("active")) {
            countryName.innerHTML = "拉脱维亚 (&#8364;)";
        }
        if (ltu.classList.contains("active")) {
            countryName.innerHTML = "立陶宛 (&#8364;)";
        }
        if (lux.classList.contains("active")) {
            countryName.innerHTML = "卢森堡 (&#8364;)";
        }
        if (mlt.classList.contains("active")) {
            countryName.innerHTML = "马耳他 (&#8364;)";
        }
        if (mco.classList.contains("active")) {
            countryName.innerHTML = "摩纳哥 (&#8364;)";
        }
        if (nld.classList.contains("active")) {
            countryName.innerHTML = "荷兰 (&#8364;)";
        }
        if (pol.classList.contains("active")) {
            countryName.innerHTML = "波兰 (&#8364;)";
        }
        if (prt.classList.contains("active")) {
            countryName.innerHTML = "葡萄牙 (&#8364;)";
        }
        if (chn.classList.contains("active")) {
            countryName.innerHTML = "中国 (&#36;)";
        }
        if (ita.classList.contains("active")) {
            countryName.innerHTML = "意大利 (&#8364;)";
        }
        if (cze.classList.contains("active")) {
            countryName.innerHTML = "捷克共和国 (Kč)";
        }
        if (arm.classList.contains("active")) {
            countryName.innerHTML = "亚美尼亚 (&#36;)";
        }
        if (blr.classList.contains("active")) {
            countryName.innerHTML = "白俄罗斯 (&#36;)";
        }
        if (geo.classList.contains("active")) {
            countryName.innerHTML = "格鲁吉亚 (&#36;)";
        }
        if (rus.classList.contains("active")) {
            countryName.innerHTML = "俄罗斯 (&#8381;)";
        }
        if (ukr.classList.contains("active")) {
            countryName.innerHTML = "乌克兰 (&#36;)";
        };
    }

}

function changeCountry(evt, country) {
    var i;
    var countryBtns = document.getElementsByClassName("country-btn");

    for (i = 0; i < countryBtns.length; i++) {
        countryBtns[i].className = countryBtns[i].className.replace(" active", "");

    }
    evt.currentTarget.className += " active";
    selectedCountry();
}

function selectedCountry() {
    //CH
    if (chn.classList.contains("active")) {
        LangAbb.textContent = "中文";
        lang.textContent = "语言:";
        country.innerHTML = "国家：";
        countryName.innerHTML = "中国 (&#36;)";
        changeButtonsCH();
    }
    //IT
    if (ita.classList.contains("active")) {
        LangAbb.textContent = "IT";
        lang.textContent = "Lingua:";
        country.innerHTML = "Paese:";
        countryName.innerHTML = "Italia (&#8364;)";
        changeButtonsIT();
    }

    //CZ
    if (cze.classList.contains("active")) {
        country.innerHTML = "Země:";
        countryName.innerHTML = "Česká Republika (Kč)";
        LangAbb.textContent = "ČR";
        lang.textContent = "Jazyk:";
        changeButtonsCZ();
    }
    //EN
    if (aut.classList.contains("active") || bel.classList.contains("active") || bgr.classList.contains("active") 
    || gbr.classList.contains("active") || hun.classList.contains("active") || deu.classList.contains("active") 
    || grc.classList.contains("active") || dnk.classList.contains("active") || irl.classList.contains("active") 
    || esp.classList.contains("active") || cyp.classList.contains("active") || lva.classList.contains("active") 
    || ltu.classList.contains("active") || lux.classList.contains("active") || mlt.classList.contains("active") 
    || mco.classList.contains("active") || nld.classList.contains("active") || pol.classList.contains("active") 
    || prt.classList.contains("active") || rou.classList.contains("active") || svk.classList.contains("active") 
    || svn.classList.contains("active") || fin.classList.contains("active") || fra.classList.contains("active") 
    || hrv.classList.contains("active") || swe.classList.contains("active") || est.classList.contains("active") 
    || usa.classList.contains("active") || can.classList.contains("active") || mex.classList.contains("active") 
    || jpn.classList.contains("active") || kor.classList.contains("active")) {
        changeButtonsEN();
        LangAbb.textContent = "EN";
        lang.textContent = "Language:";
        country.innerHTML = "Country:";
        /*for dollar*/
        if (usa.classList.contains("active")) {
            countryName.innerHTML = "USA (&#36;)";
        }
        if (can.classList.contains("active")) {
            countryName.innerHTML = "Canada (&#36;)";
        }
        if (mex.classList.contains("active")) {
            countryName.innerHTML = "Mexico (&#36;)";
        }
        if (jpn.classList.contains("active")) {
            countryName.innerHTML = "Japan (&#36;)";
        }
        if (kor.classList.contains("active")) {
            countryName.innerHTML = "South Korea (&#36;)";
        }
        /*for en euro*/
        if (est.classList.contains("active")) {
            countryName.innerHTML = "Estonia (&#8364;)";
        }
        if (swe.classList.contains("active")) {
            countryName.innerHTML = "Sweden (&#8364;)";
        }
        if (hrv.classList.contains("active")) {
            countryName.innerHTML = "Croatia (&#8364;)";
        }
        if (fin.classList.contains("active")) {
            countryName.innerHTML = "Finland (&#8364;)";
        }
        if (fra.classList.contains("active")) {
            countryName.innerHTML = "France (&#8364;)";
        }
        if (svn.classList.contains("active")) {
            countryName.innerHTML = "Slovenia (&#8364;)";
        }
        if (svk.classList.contains("active")) {
            countryName.innerHTML = "Slovakia (&#8364;)";
        }
        if (rou.classList.contains("active")) {
            countryName.innerHTML = "Romania (&#8364;)";
        }
        if (aut.classList.contains("active")) {
            countryName.innerHTML = "Austria (&#8364;)";
        }
        if (bel.classList.contains("active")) {
            countryName.innerHTML = "Belgium (&#8364;)";
        }
        if (bgr.classList.contains("active")) {
            countryName.innerHTML = "Bulgaria (&#8364;)";
        }
        if (gbr.classList.contains("active")) {
            countryName.innerHTML = "Great Britain (&#8364;)";
        }
        if (hun.classList.contains("active")) {
            countryName.innerHTML = "Hungary (&#8364;)";
        }
        if (deu.classList.contains("active")) {
            countryName.innerHTML = "Germany (&#8364;)";
        }
        if (grc.classList.contains("active")) {
            countryName.innerHTML = "Greece (&#8364;)";
        }
        if (dnk.classList.contains("active")) {
            countryName.innerHTML = "Denmark (&#8364;)";
        }
        if (irl.classList.contains("active")) {
            countryName.innerHTML = "Ireland (&#8364;)";
        }
        if (esp.classList.contains("active")) {
            countryName.innerHTML = "Spain (&#8364;)";
        }
        if (cyp.classList.contains("active")) {
            countryName.innerHTML = "Cyprus (&#8364;)";
        }
        if (lva.classList.contains("active")) {
            countryName.innerHTML = "Latvia (&#8364;)";
        }
        if (ltu.classList.contains("active")) {
            countryName.innerHTML = "Lithuania (&#8364;)";
        }
        if (lux.classList.contains("active")) {
            countryName.innerHTML = "Luxembourg (&#8364;)";
        }
        if (mlt.classList.contains("active")) {
            countryName.innerHTML = "Malta (&#8364;)";
        }
        if (mco.classList.contains("active")) {
            countryName.innerHTML = "Monaco (&#8364;)";
        }
        if (nld.classList.contains("active")) {
            countryName.innerHTML = "Netherlands (&#8364;)";
        }
        if (pol.classList.contains("active")) {
            countryName.innerHTML = "Poland (&#8364;)";
        }
        if (prt.classList.contains("active")) {
            countryName.innerHTML = "Portugal (&#8364;)";
        }
        
    }
    //RU
    if (arm.classList.contains("active") || blr.classList.contains("active") || geo.classList.contains("active") || rus.classList.contains("active") || ukr.classList.contains("active")) {
        LangAbb.textContent = "RU";
        lang.textContent = "Язык:";
        country.innerHTML = "Страна:";
        changeButtonsRU();
        if (arm.classList.contains("active")) {
            countryName.innerHTML = "Армения (&#36;)";
        }
        if (blr.classList.contains("active")) {
            countryName.innerHTML = "Беларусь (&#36;)";
        }
        if (geo.classList.contains("active")) {
            countryName.innerHTML = "Грузия (&#36;)";
        }
        if (rus.classList.contains("active")) {
            countryName.innerHTML = "Россия (&#8381;)";
        }
        if (ukr.classList.contains("active")) {
            countryName.innerHTML = "Украина (&#36;)";
        }
    }
}

function changeButtonsEN() {
    //text
    chooseText.innerHTML = "Choose your country";
    europe.innerHTML = "Europe";
    america.innerHTML = "America";
    asia.innerHTML = "Asia";
    //country buttons
    aut .innerHTML = "Austria";
    arm.innerHTML = "Armenia";
    blr.innerHTML = "Belarus";
    bel.innerHTML = "Belgium";
    bgr.innerHTML = "Bulgaria";
    gbr.innerHTML = "Great Britain";
    hun.innerHTML = "Hungary";
    deu.innerHTML = "Germany";
    grc.innerHTML = "Greece";
    geo.innerHTML = "Georgia";
    dnk.innerHTML = "Denmark";
    irl.innerHTML = "Ireland";
    esp.innerHTML = "Spain";
    ita.innerHTML = "Italy";
    cyp.innerHTML = "Cyprus";
    lva.innerHTML = "Latvia";
    ltu.innerHTML = "Lithuania";
    lux.innerHTML = "Luxembourg";
    mlt.innerHTML = "Malta";
    mco.innerHTML = "Monaco";
    nld.innerHTML = "Netherlands";
    pol.innerHTML = "Poland";
    prt.innerHTML = "Portugal";
    rus.innerHTML = "Russia";
    rou.innerHTML = "Romania";
    svk.innerHTML = "Slovakia";
    svn.innerHTML = "Slovenia";
    ukr.innerHTML = "Ukraine";
    fin.innerHTML = "Finland";
    fra.innerHTML = "France";
    hrv.innerHTML = "Croatia";
    cze.innerHTML = "Czech Republic";
    swe.innerHTML = "Sweden";
    est.innerHTML = "Estonia";
    usa.innerHTML = "USA";
    can.innerHTML = "Canada";
    mex.innerHTML = "Mexico";
    chn.innerHTML = "China";
    jpn.innerHTML = "Japan";
    kor.innerHTML = "South Korea";
    //nav buttons
    homeText.innerHTML = "Home";
    aboutText.innerHTML = "About";
    galleryText.innerHTML = "Gallery";
    womenText.innerHTML = "For women";
    menText.innerHTML = "For men";
    childrenText.innerHTML = "Baby";
    blogText.innerHTML = "News";
}

function changeButtonsRU() {
    //text
    chooseText.innerHTML = "Выберите страну";
    europe.innerHTML = "Европа";
    america.innerHTML = "Америка";
    asia.innerHTML = "Азия";
    //country buttons 
    aut .innerHTML = "Австрия";
    arm.innerHTML = "Армения";
    blr.innerHTML = "Белорусь";
    bel.innerHTML = "Бельгия";
    bgr.innerHTML = "Болгария";
    gbr.innerHTML = "Великобритания";
    hun.innerHTML = "Венгрия";
    deu.innerHTML = "Германия";
    grc.innerHTML = "Греция";
    geo.innerHTML = "Грузия";
    dnk.innerHTML = "Дания";
    irl.innerHTML = "Ирландия";
    esp.innerHTML = "Испания";
    ita.innerHTML = "Италия";
    cyp.innerHTML = "Кипр";
    lva.innerHTML = "Латвия";
    ltu.innerHTML = "Литва";
    lux.innerHTML = "Люксембург";
    mlt.innerHTML = "Мальта";
    mco.innerHTML = "Монако";
    nld.innerHTML = "Нидерланды";
    pol.innerHTML = "Польша";
    prt.innerHTML = "Португалия";
    rus.innerHTML = "Россия";
    rou.innerHTML = "Румыния";
    svk.innerHTML = "Словакия";
    svn.innerHTML = "Словения";
    ukr.innerHTML = "Украина";
    fin.innerHTML = "Финляндия";
    fra.innerHTML = "Франция";
    hrv.innerHTML = "Хорватия";
    cze.innerHTML = "Чехия";
    swe.innerHTML = "Швеция";
    est.innerHTML = "Эстония";
    usa.innerHTML = "США";
    can.innerHTML = "Канада";
    mex.innerHTML = "Мексика";
    chn.innerHTML = "Китай";
    jpn.innerHTML = "Япония";
    kor.innerHTML = "Южная Корея";
    //nav buttons
    homeText.innerHTML = "Главная";
    aboutText.innerHTML = "О нас";
    galleryText.innerHTML = "Галерея";
    womenText.innerHTML = "Для женщин";
    menText.innerHTML = "Для мужчин";
    childrenText.innerHTML = "Десткое";
    blogText.innerHTML = "Новости";
}

function changeButtonsCZ() {
    //text
    chooseText.innerHTML = "Vyberte zemi";
    europe.innerHTML = "Evropa";
    america.innerHTML = "Amerika";
    asia.innerHTML = "Asie";
    //country buttons 
    aut .innerHTML = "Rakousko";
    arm.innerHTML = "Arménie";
    blr.innerHTML = "Bělorusko";
    bel.innerHTML = "Belgie";
    bgr.innerHTML = "Bulharsko";
    gbr.innerHTML = "Británie";
    hun.innerHTML = "Maďarsko";
    deu.innerHTML = "Německo";
    grc.innerHTML = "Řecko";
    geo.innerHTML = "Gruzie";
    dnk.innerHTML = "Dánsko";
    irl.innerHTML = "Irsko";
    esp.innerHTML = "Španělsko";
    ita.innerHTML = "Itálie";
    cyp.innerHTML = "Kypr";
    lva.innerHTML = "Lotyšsko";
    ltu.innerHTML = "Litva";
    lux.innerHTML = "Lucembursko";
    mlt.innerHTML = "Malta";
    mco.innerHTML = "Monako";
    nld.innerHTML = "Nizozemsko";
    pol.innerHTML = "Polsko";
    prt.innerHTML = "Portugalsko";
    rus.innerHTML = "Rusko";
    rou.innerHTML = "Rumunsko";
    svk.innerHTML = "Slovensko";
    svn.innerHTML = "Slovinsko";
    ukr.innerHTML = "Ukrajina";
    fin.innerHTML = "Finsko";
    fra.innerHTML = "Francie";
    hrv.innerHTML = "Chorvatsko";
    cze.innerHTML = "Česká Republika";
    swe.innerHTML = "Švédsko";
    est.innerHTML = "Estonsko";
    usa.innerHTML = "USA";
    can.innerHTML = "Kanada";
    mex.innerHTML = "Mexiko";
    chn.innerHTML = "Čína";
    jpn.innerHTML = "Japonsko";
    kor.innerHTML = "Jižní Korea";
    //nav buttons
    homeText.innerHTML = "Hlavní stránka";
    aboutText.innerHTML = "O nás";
    galleryText.innerHTML = "Galerie";
    womenText.innerHTML = "Pro ženy";
    menText.innerHTML = "Pro muže";
    childrenText.innerHTML = "Dítě";
    blogText.innerHTML = "Novinky";
}

function changeButtonsIT() {
    //text
    chooseText.innerHTML = "Seleziona un paese";
    europe.innerHTML = "Europa";
    america.innerHTML = "America";
    asia.innerHTML = "Asia";
    //country buttons 
    aut .innerHTML = "Austria";
    arm.innerHTML = "Armenia";
    blr.innerHTML = "Bielorussia";
    bel.innerHTML = "Belgio";
    bgr.innerHTML = "Bulgaria";
    gbr.innerHTML = "Gran Bretagna";
    hun.innerHTML = "Ungheria";
    deu.innerHTML = "Germania";
    grc.innerHTML = "Grecia";
    geo.innerHTML = "Georgia";
    dnk.innerHTML = "Danimarca";
    irl.innerHTML = "Irlanda";
    esp.innerHTML = "Spagna";
    ita.innerHTML = "Italia";
    cyp.innerHTML = "Cipro";
    lva.innerHTML = "Lettonia";
    ltu.innerHTML = "Lituania";
    lux.innerHTML = "Lussemburgo";
    mlt.innerHTML = "Malta";
    mco.innerHTML = "Monaco";
    nld.innerHTML = "Olanda";
    pol.innerHTML = "Polonia";
    prt.innerHTML = "Portogallo";
    rus.innerHTML = "Russia";
    rou.innerHTML = "Romania";
    svk.innerHTML = "Slovacchia";
    svn.innerHTML = "Slovenia";
    ukr.innerHTML = "Ucraina";
    fin.innerHTML = "Finlandia";
    fra.innerHTML = "Francia";
    hrv.innerHTML = "Croazia";
    cze.innerHTML = "Repubblica Ceca";
    swe.innerHTML = "Svezia";
    est.innerHTML = "Estonia";
    usa.innerHTML = "USA";
    can.innerHTML = "Canada";
    mex.innerHTML = "Messico";
    chn.innerHTML = "Cina";
    jpn.innerHTML = "Giappone";
    kor.innerHTML = "Corea";
    //nav buttons
    homeText.innerHTML = "Home";
    aboutText.innerHTML = "Di noi";
    galleryText.innerHTML = "Galleria";
    womenText.innerHTML = "Per le donne";
    menText.innerHTML = "Per gli uomini";
    childrenText.innerHTML = "Infante";
    blogText.innerHTML = "News";
}

function changeButtonsCH() {
    //text
    chooseText.innerHTML = "选择的国家";
    europe.innerHTML = "欧洲";
    america.innerHTML = "美国";
    asia.innerHTML = "亚洲";
    //country buttons 
    aut .innerHTML = "奥地利";
    arm.innerHTML = "亚美尼亚";
    blr.innerHTML = "白俄罗斯";
    bel.innerHTML = "比利时";
    bgr.innerHTML = "保加利亚";
    gbr.innerHTML = "英国";
    hun.innerHTML = "匈牙利";
    deu.innerHTML = "德国";
    grc.innerHTML = "希腊";
    geo.innerHTML = "格鲁吉亚";
    dnk.innerHTML = "丹麦";
    irl.innerHTML = "爱尔兰";
    esp.innerHTML = "西班牙";
    ita.innerHTML = "意大利";
    cyp.innerHTML = "塞浦路斯";
    lva.innerHTML = "拉脱维亚";
    ltu.innerHTML = "立陶宛";
    lux.innerHTML = "卢森堡";
    mlt.innerHTML = "马耳他";
    mco.innerHTML = "摩纳哥";
    nld.innerHTML = "荷兰";
    pol.innerHTML = "波兰";
    prt.innerHTML = "葡萄牙";
    rus.innerHTML = "俄罗斯";
    rou.innerHTML = "罗马尼亚";
    svk.innerHTML = "斯洛伐克";
    svn.innerHTML = "斯洛文尼亚";
    ukr.innerHTML = "乌克兰";
    fin.innerHTML = "芬兰";
    fra.innerHTML = "法国";
    hrv.innerHTML = "克罗地亚";
    cze.innerHTML = "捷克共和国";
    swe.innerHTML = "瑞典";
    est.innerHTML = "爱沙尼亚";
    usa.innerHTML = "美国";
    can.innerHTML = "加拿大";
    mex.innerHTML = "墨西哥";
    chn.innerHTML = "中国";
    jpn.innerHTML = "日本";
    kor.innerHTML = "韩国";
    //nav buttons
    homeText.innerHTML = "首页";
    aboutText.innerHTML = "关于我们";
    galleryText.innerHTML = "画廊";
    womenText.innerHTML = "对于女性";
    menText.innerHTML = "对于男人";
    childrenText.innerHTML = "对于儿童";
    blogText.innerHTML = "新闻";
}
// document.querySelectorAll("defaulOpen").click();
