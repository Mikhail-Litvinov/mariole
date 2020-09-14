<div class="flex fixed width-100 wrap">
		<div class="flex-row nav-top">
			<div class="nav-top-cont flex nowrap">
				<div class="countries flex">
					<button class="btn-country" id="btn-country"><span id="country" class="languageable"></span> <span id="country-name"></span></button>
					<button class="btn-language" id="btn-lang"><span id="lang" class="languageable"></span> <span id="lang-symbol" class="languageable"></span>&nbsp;<span class="lang-ind"></span></button>
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
					<li><a onclick="showContent('home')" rel="noopener noreferrer"  class="menu-btn" id="home"><span id="home-page" class="languageable"></span></a></li>
					<li><a onclick="showContent('about')" rel="noopener noreferrer"  class="menu-btn" id="about"><span id="about-page" class="languageable"></span></a></li>
					<li><a onclick="showContent('gallery')" rel="noopener noreferrer"  class="menu-btn" id="gallery"><span id="gallery-page" class="languageable"></span></a></li>
					<li><a onclick="showContent('women')" rel="noopener noreferrer"  class="menu-btn" id="women"><span id="women-page" class="languageable"></span></a></li>
					<li><a onclick="showContent('men')" rel="noopener noreferrer"  class="menu-btn" id="men"><span id="men-page" class="languageable"></span></a></li>
					<li><a onclick="showContent('baby')" rel="noopener noreferrer"  class="menu-btn" id="baby"><span id="baby-page" class="languageable"></span></a></li>
					<li><a onclick="showContent('news')" rel="noopener noreferrer"  class="menu-btn" id="news"><span id="news-page" class="languageable"></span></a></li>
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