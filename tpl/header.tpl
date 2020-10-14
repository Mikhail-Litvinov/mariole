<div class="flex width-100 wrap" id="headerContainer">
	<div class="flex-row nav-top">
		<div class="mobile hamburger-wrapper">
			<div class="icon-container">
				<div class="hamburger" id="hamburger-1">
					<span class="line"></span>
					<span class="line"></span>
					<span class="line"></span>
				</div>
			</div>
		</div>
		<div class="mobile-menu mobile modal" id="mobile-menu">
			<div class="mobile-menu-wrapper"></div>
		</div>
		<div class="nav-top-cont flex nowrap">
			<div class="countries flex">
				<button class="btn-country" id="btn-country">
					<span id="country" class="languageable"></span> 
					<span id="country-name"></span>
				</button>
				<button class="btn-language" id="btn-lang">
					<span id="lang" class="languageable"></span> <span id="lang-symbol" class="languageable"></span>&nbsp;<span class="lang-ind"></span>
					<div class="modal-wrapper-lang flex" id="modal-lang" style="display: none;">
						<div class="modal-content-lang">
							<ul>
								<li>
									<a id="lang-ru" class="lang-btn">Русский</a>
								</li>
								<li>
									<a id="lang-en" class="lang-btn">English</a>
								</li>
								<li>
									<a id="lang-cs" class="lang-btn">Čeština</a>
								</li>
								<li>
									<a id="lang-it" class="lang-btn">Italiano</a>
								</li>
								<li>
									<a id="lang-zh" class="lang-btn">中文</a>
								</li>
							</ul>
						</div>
					</div>
				</button>
				<a navid="cart">Корзина</a>
			</div>
			<div class="logo flex">
				<div class="logo-cont">
					<a navid="home">
						<img src="/img/logo.png" alt="mario'le logo" srcset="" width="60px">
					</a>
				</div>
			</div>
			<div class="buttons-top-nav flex flex-align-middle">
				<ul class="buttons-top-nav-list">
					<li>
						<span class="search-icon" id="open-search"></span>
					</li>
					<li>
						<a href="https://www.instagram.com/mario__le/" target="_blank">
							<span class="inst-icon"></span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="flex-row nav flex-align-middle wrap">
		<div class="flex nav-wrapper navigation">
			<ul class="nav-list">
				<li>
					<a navid="home" rel="noopener noreferrer" class="menu-btn" id="home">
						<span id="home-page" class="languageable">Главная</span>
					</a>
				</li>
				<li>
					<a navid="gallery" rel="noopener noreferrer" class="menu-btn" id="gallery">
						<span id="gallery-page" class="languageable">Галерея</span>
					</a>
				</li>
				<li>
					<a navid="catalogue/clothe" rel="noopener noreferrer" class="menu-btn" id="clothes">
						<span id="clothes-page" class="languageable">Одежда</span>
					</a>
				</li>
				<li>
					<a navid="catalogue/accessories" rel="noopener noreferrer" class="menu-btn" id="accessories">
						<span id="accessories-page" class="languageable">Аксессуары</span>
					</a>
				</li>
				<li>
					<a navid="news" rel="noopener noreferrer" class="menu-btn" id="news">
						<span id="news-page" class="languageable">Новости</span>
					</a>
				</li>
			</ul>
		</div>
		
	</div>
</div>
<div class="sub-menu-container">
	<div class="flex sub-nav-home-wrapper sub-nav" id="home-sub">
		<div class="sub-home-wrapper">
				<div class="flex nowrap flex-align-middle mobile-sub">
					<div navid="about" class="about-container sub-list-element">
						<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
						<div class="about-text flex flex-align-middle">
							<p class="after-change">О нас</p>
						</div>
					</div>
					<div navid="catalogue/sale" class="sale-container sub-list-element">
						<div class="sale-img">
							<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
							<div class="sale-text">
								<p>Акция</p>
							</div>
						</div>
					</div>
					<div navid="catalogue/new" class="new-goods-container sub-list-element">
						<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
						<div class="new-text">
							<p>Новинки</p>
						</div>
					</div>
				</div>
		</div>
	</div>
	<div class="flex sub-nav-gallery-wrapper sub-nav" id="gallery-sub">
		<div class="sub-gallery-wrapper">
			<div class="sub-gallery-table">
				<div navid="fashion-gallery" class="clothes-gallery sub-list-element">
					<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
					<div class="gallery-sub-title">
						<p>
							<span>Mariole.fashion</span>
						</p>
					</div>
				</div>
				<div navid="home-gallery" class="home-gallery sub-list-element">
					<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
					<div class="gallery-sub-title">
						<p><span>Mariole.home</span></p>
					</div>
				</div>
				<div navid="travel-gallery" class="travel-gallery sub-list-element">
					<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
					<div class="gallery-sub-title">
						<p>
							<span>Mariole.travel</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex sub-nav-clothes-wrapper sub-nav" id="clothes-sub">
		<div class="sub-clothes-wrapper">
			<div class="flex nowrap flex-align-middle mobile-sub">
				<div class="women-clothe">
					<ul>
						<p>Для женщин</p>
						<li>
							<a navid="catalogue/clothe/trousers" class="sub-list-element">
								<span>Брюки</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/clothe/jumpers" class="sub-list-element">
								<span>Джемпера</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/clothe/cardigans" class="sub-list-element">
								<span>Кардиганы</span>
							</a>
						</li>
					</ul>
				</div>
				<div navid="catalogue/clothe/new" class="new-clothe sub-list-element">
					<div class="clothe-table">
						<div class="clothe-title">
							<p>Новое</p>
						</div>
						<div class="clothe-img">
							<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
							<div class="new-clothe-text">
								<p>Новинки</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex sub-nav-accessories-wrapper sub-nav" id="accessories-sub">
		<div class="accessories-wrapper">
			<div class="accessories-content flex nowrap">
				<div class="ul-for-women flex nowrap">
					<ul>
						<p>Для женщин</p>
						<li>
							<a navid="catalogue/accessories/mittens" class="sub-list-element">
								<span>Варежки</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/headwear" class="sub-list-element">
								<span>Головные уборы</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/socks" class="sub-list-element">
								<span>Носочки</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/stoles" class="sub-list-element">
								<span>Палантины</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/gloves" class="sub-list-element">
								<span>Перчатки</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/headscarves" class="sub-list-element">
								<span>Платки</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/shawls" class="sub-list-element">
								<span>Шали</span>
							</a>
						</li>
					</ul>
					<div class="ul-sub-img">
						<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
					</div>
				</div>
				<div class="ul-for-home flex nowrap">
					<ul>
						<p>Для дома</p>
						<li>
							<a navid="catalogue/accessories/plaids" class="sub-list-element">
								<span>Пледы</span>
							</a>
						</li>
					</ul>
					<div class="ul-sub-img">
						<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
					</div>
				</div>
				<div class="ul-for-jewelry flex nowrap">
					<ul>
						<p>Бижутерия</p>
						<li>
							<a navid="catalogue/accessories/bracelets" class="sub-list-element">
								<span>Браслеты</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/brooches" class="sub-list-element">
								<span>Броши</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/necklace" class="sub-list-element">
								<span>Колье</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/pendants" class="sub-list-element">
								<span>Кулоны</span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/earrings" class="sub-list-element">
								<span>Серьги</span>
							</a>
						</li>
					</ul>
					<div class="ul-sub-img">
						<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex sub-nav-news-wrapper sub-nav" id="news-sub">
		<div class="news-sub-wrapper">
			<div class="news-sub-content">
				<div navid="news" class="last-news-container sub-list-element">
					<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
					<div class="news-sub-title flex nowrap flex-align-middle">
						<span>Свежие новости</span>
					</div>
				</div>
				<div navid="news/recommended" class="rec-news-container sub-list-element">
					<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
					<div class="rec-sub-title flex nowrap">
						<span>Рекомендованное</span>
					</div>
				</div>
				<div navid="news/press" class="media-news-container sub-list-element">
					<img src="/img/menu/img filler 1x1.jpg" alt="" width="100%">
					<div class="media-sub-title flex nowrap">
						<span>Мы в прессе</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
