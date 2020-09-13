<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style/stylesheet.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="fonts/Fontello/css/animation.css">
    <link rel="stylesheet" href="fonts/Fontello/css/fontello-codes.css">
    <link rel="stylesheet" href="fonts/Fontello/css/fontello-embedded.css">
    <link rel="stylesheet" href="fonts/Fontello/css/fontello-ie7-codes.css">
    <link rel="stylesheet" href="fonts/Fontello/css/fontello-ie7.css">
    <link rel="stylesheet" href="fonts/Fontello/css/fontello.css">
</head>
<body>
    <!-- header -->
    <header>
        <div class="flex fixed width-100 wrap">
            <div class="flex-row nav-top">
                <div class="nav-top-cont flex nowrap">
                    <div class="countries flex">
                        <button class="btn-country" id="btn-country"><span id="country" class="languageable">Страна:</span> <span id="country-name">Россия</span></button>
                        <button class="btn-language" id="btn-lang"><span id="lang" class="languageable">Язык:</span> <span id="lang-symbol" class="languageable">RU</span>&nbsp;<span class="lang-ind"></span></button>
                        <div class="modal-wrapper-lang flex" id="modal-lang">
                            <div class="modal-content-lang">
                                <ul>
                                    <li><a href="#" id="lang-ru" class="lang-btn" onclick="changeLanguage('RU')">Русский</a></li>
                                    <li><a href="#" id="lang-en" class="lang-btn" onclick="changeLanguage('EN')">English</a></li>
                                    <li><a href="#" id="lang-cs" class="lang-btn" onclick="changeLanguage('CS')">Čeština</a></li>
                                    <li><a href="#" id="lang-it" class="lang-btn" onclick="changeLanguage('IT')">Italiano</a></li>
                                    <li><a href="#" id="lang-zh" class="lang-btn" onclick="changeLanguage('ZH')">中文</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="logo flex">
                        <div class="logo-cont">
                            <a onclick="showContent('home')"><img src="img/logo.png" alt="mario'le logo" srcset="" width="60px"></a>
                        </div>
                    </div>
                    <div class="buttons-top-nav flex flex-align-middle">
                        <ul class="buttons-top-nav-list">
                            <li><span class="search-icon" id="open-search"></span></li>
                            <li><a href="https://www.instagram.com/mario__le/" target="_blank"><span class="inst-icon"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex-row nav flex-align-middle wrap">
                <div class="flex nav-wrapper">
                    <ul class="nav-list">
                        <li><a onclick="showContent('home')" rel="noopener noreferrer"  class="menu-btn" id="home"><span id="home-page" class="languageable">Главная</span></a></li>
                        <li><a onclick="showContent('about')" rel="noopener noreferrer"  class="menu-btn" id="about"><span id="about-page" class="languageable">О нас</span></a></li>
                        <li><a onclick="showContent('gallery')" rel="noopener noreferrer"  class="menu-btn" id="gallery"><span id="gallery-page" class="languageable">Галерея</span></a></li>
                        <li><a onclick="showContent('women')" rel="noopener noreferrer"  class="menu-btn" id="women"><span id="women-page" class="languageable">Для женщин</span></a></li>
                        <li><a onclick="showContent('men')" rel="noopener noreferrer"  class="menu-btn" id="men"><span id="men-page" class="languageable">Для мужчин</span></a></li>
                        <li><a onclick="showContent('baby')" rel="noopener noreferrer"  class="menu-btn" id="baby"><span id="baby-page" class="languageable">Десткое</span></a></li>
                        <li><a onclick="showContent('news')" rel="noopener noreferrer"  class="menu-btn" id="news"><span id="news-page" class="languageable">Новости</span></a></li>
                    </ul>
                </div>
                <div class="flex sub-nav-home-wrapper sub-nav" id="home-sub">
                    <div class="home-sub-container">

                    </div>
                </div>
                <div class="flex sub-nav-about-wrapper sub-nav" id="about-sub"></div>
                <div class="flex sub-nav-gallery-wrapper sub-nav" id="gallery-sub"></div>
                <div class="flex sub-nav-women-wrapper sub-nav" id="women-sub"></div>
                <div class="flex sub-nav-men-wrapper sub-nav" id="men-sub"></div>
                <div class="flex sub-nav-baby-wrapper sub-nav" id="baby-sub"></div>
                <div class="flex sub-nav-news-wrapper sub-nav" id="news-sub"></div>
            </div>
        </div>

    </header>
    <!-- header end -->
    <main>
        <div id="content">

        </div>
    </main>
    <!-- modals -->
    <div class="modal-country-bg" id="modal-country">
        <div class="modal-country-wrapper">
            <div class="modal-country-wrapper-2">
                <div class="modal-country-cont flex wrap">
                    <div class="modal-country-header flex-row nowrap">
                        <div class="col-9-10 height-100 flex-column flex-align-middle ">
                            <div class="modal-country-title-cont flex flex-align-middle">
                                <img src="img/title.png" alt="" srcset="" width="100%">
                            </div>
                        </div>
                        <div class="col-1-10 height-100 flex-column flex-align-middle ">
                            <span class="close-modal" id="close-country"></span>
                        </div>
                    </div>
                    <div class="flex-row nowrap flex-align-middle width-100 modal-country-title-2">
                        <span id="choose-country" class="choose-country languageable">Выберите страну</span>
                    </div>
                    <div class="modal-country-content flex wrap">
                        <div class="flex-row width-100 nowrap">
                            <div class="flex-column width-100 height-100 wrap">
                                <span class="country-list-europe">
                                    <span id="area-europe" class="languageable">Европа:</span>
                                    <ul class="country-list">
										<li><a href="#" id="country-austria" onclick="changeCountry('austria')" class="country-btn">Австрия</a></li>
										<li><a href="#" id="country-armenia" onclick="changeCountry('armenia')" class="country-btn">Армения</a></li>
										<li><a href="#" id="country-belarus" onclick="changeCountry('belarus')" class="country-btn">Беларусь</a></li>
										<li><a href="#" id="country-belgium" onclick="changeCountry('belgium')" class="country-btn">Бельгия</a></li>
										<li><a href="#" id="country-bulgaria" onclick="changeCountry('bulgaria')" class="country-btn">Болгария</a></li>
										<li><a href="#" id="country-uk" onclick="changeCountry('uk')" class="country-btn">Великобритания</a></li>
										<li><a href="#" id="country-hungary" onclick="changeCountry('hungary')" class="country-btn">Венгрия</a></li>
										<li><a href="#" id="country-germany" onclick="changeCountry('germany')" class="country-btn">Германия</a></li>
										<li><a href="#" id="country-greece" onclick="changeCountry('greece')" class="country-btn">Греция</a></li>
										<li><a href="#" id="country-georgia" onclick="changeCountry('georgia')" class="country-btn">Грузия</a></li>
										<li><a href="#" id="country-denmark" onclick="changeCountry('denmark')" class="country-btn">Дания</a></li>
										<li><a href="#" id="country-ireland" onclick="changeCountry('ireland')" class="country-btn">Ирландия</a></li>
										<li><a href="#" id="country-spain" onclick="changeCountry('spain')" class="country-btn">Испания</a></li>
										<li><a href="#" id="country-italy" onclick="changeCountry('italy')" class="country-btn">Италия</a></li>
										<li><a href="#" id="country-cyprus" onclick="changeCountry('cyprus')" class="country-btn">Кипр</a></li>
										<li><a href="#" id="country-latvia" onclick="changeCountry('latvia')" class="country-btn">Латвия</a></li>
										<li><a href="#" id="country-lithuania" onclick="changeCountry('lithuania')" class="country-btn">Литва</a></li>
										<li><a href="#" id="country-luxembourg" onclick="changeCountry('luxembourg')" class="country-btn">Люксембург</a></li>
										<li><a href="#" id="country-malta" onclick="changeCountry('malta')" class="country-btn">Мальта</a></li>
										<li><a href="#" id="country-monaco" onclick="changeCountry('monaco')" class="country-btn">Монако</a></li>
										<li><a href="#" id="country-netherlands" onclick="changeCountry('netherlands')" class="country-btn">Нидерланды</a></li>
										<li><a href="#" id="country-poland" onclick="changeCountry('poland')" class="country-btn">Польша</a></li>
										<li><a href="#" id="country-portugal" onclick="changeCountry('portugal')" class="country-btn">Португалия</a></li>
										<li><a href="#" id="country-russia" onclick="changeCountry('russia')" class="country-btn">Россия</a></li>
										<li><a href="#" id="country-romania" onclick="changeCountry('romania')" class="country-btn">Румыния</a></li>
										<li><a href="#" id="country-slovakia" onclick="changeCountry('slovakia')" class="country-btn">Словакия</a></li>
										<li><a href="#" id="country-slovenia" onclick="changeCountry('slovenia')" class="country-btn">Словения</a></li>
										<li><a href="#" id="country-ukraine" onclick="changeCountry('ukraine')" class="country-btn">Украина</a></li>
										<li><a href="#" id="country-finland" onclick="changeCountry('finland')" class="country-btn">Финляндия</a></li>
										<li><a href="#" id="country-france" onclick="changeCountry('france')" class="country-btn">Франция</a></li>
										<li><a href="#" id="country-croatia" onclick="changeCountry('croatia')" class="country-btn">Хорватия</a></li>
										<li><a href="#" id="country-czech" onclick="changeCountry('czech')" class="country-btn">Чехия</a></li>
										<li><a href="#" id="country-sweden" onclick="changeCountry('sweden')" class="country-btn">Швеция</a></li>
										<li><a href="#" id="country-estonia" onclick="changeCountry('estonia')" class="country-btn">Эстония</a></li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                        <div class="flex-row width-100">
                            <div class="flex-column nowrap col-1-2 align-items-center">
                                <span class="country-list-america">
                                    <span id="area-america" class="languageable">Америка:</span>
                                    <ul class="country-list-2">
                                        <li><a href="#" id="country-usa" onclick="changeCountry('usa')" class="country-btn">США</a></li>
                                        <li><a href="#" id="country-canada" onclick="changeCountry('canada')" class="country-btn">Канада</a></li>
                                        <li><a href="#" id="country-mexico" onclick="changeCountry('mexico')" class="country-btn">Мексика</a></li>
                                    </ul>
                                </span>
                            </div>
                            <div class="flex-column nowrap col-1-2 align-items-center">
                                <span class="country-list-asia">
                                    <span id="area-asia" class="languageable">Азия:</span>
                                    <ul class="country-list-2">
                                        <li><a href="#" id="country-china" onclick="changeCountry('china')" class="country-btn">Китай</a></li>
                                        <li><a href="#" id="country-japan" onclick="changeCountry('japan')" class="country-btn">Япония</a></li>
                                        <li><a href="#" id="country-korea" onclick="changeCountry('korea')" class="country-btn">Южная Корея</a></li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-search-bg" id="modal-search">
        <div class="modal-search-wrapper">
            <div class="modal-search">
                <form action="search.php" class="search-form" method="POST">
                    <input type="search" name="query" class="search-input" placeholder="Search...">
                    <button class="search-button" type="submit"></button>
                </form>
            </div>
            <span class="close-search" id="close-search"></span>
        </div>
    </div>
    <!-- modals end -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script charset="utf-8" src="https://api-maps.yandex.ru/1.1/index.xml" type="text/javascript"></script>
    <script src="js/main.js"></script>
    <script src="js/modal.js"></script>
    <script src="js/translation.js"></script>
    <script src="js/menu.js"></script>
    <script src="js/navigation.js"></script>
	<?php echo '<script> loadPagesList(' . json_encode(scandir('./pages')) . '); </script>'; ?>
</body>
</html>