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
			<div class="mobile-menu-wrapper">
				<ul class="mobile-links">
					<li><div class="mobile-link-wrapper">
						<a rel="noopener noreferrer" class="menu-btn" id="home" langid="home-menu">Главная</a>
					</div></li>
					<li><div class="mobile-link-wrapper">
						<a class="menu-btn"><span class="menu-ind mobile" navid="home"></span></a>
					</div></li>
					<li><div class="mobile-link-wrapper">
						<a rel="noopener noreferrer" class="menu-btn" id="gallery" langid="gallery-menu">Галерея</a>
					</div></li>
					<li><div class="mobile-link-wrapper">
						<a class="menu-btn"><span class="menu-ind mobile" navid="gallery"></span></a>
					</div></li>
					<li><div class="mobile-link-wrapper">
						<a rel="noopener noreferrer" class="menu-btn" id="clothes" langid="clothes-menu">Одежда</a>
					</div></li>
					<li><div class="mobile-link-wrapper">
						<a class="menu-btn"><span class="menu-ind mobile" navid="catalogue/clothes"></span></a>
					</div></li>
					<li><div class="mobile-link-wrapper">
						<a rel="noopener noreferrer" class="menu-btn" id="accessories" langid="accessories-menu">Аксессуары</a>
					</div></li>
					<li><div class="mobile-link-wrapper">
						<a class="menu-btn"><span class="menu-ind mobile" navid="catalogue/accessories"></span></a>
					</div></li>
					<li><div class="mobile-link-wrapper">
						<a rel="noopener noreferrer" class="menu-btn" id="news" langid="news-menu">Новости</a>
					</div></li>
					<li>
						<div class="mobile-link-wrapper">
							<a class="menu-btn"><span class="menu-ind mobile" navid="news"></span></a>
						</div></li>
				</ul>
			</div>
		</div>
		<div class="nav-top-cont flex nowrap">
			<div class="countries flex">
				<button class="btn-country" id="btn-country">
					<span id="country" langid="country-title"></span> 
					<span id="country-name"></span>
				</button>
				<button class="btn-language" id="btn-lang">
					<span id="lang" langid="language-title"></span> <span id="lang-symbol"langid="language-symbol"></span>&nbsp;<span class="lang-ind"></span>
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
				
			</div>
			<div class="logo flex">
				<div class="logo-cont">
					<a navid="home">
						<img src="/public/images/logo.png" alt="mario'le logo" srcset="" width="80px">
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
					<li>
						<a navid="cart">
							<span class="cart-icon">
								<div class="cart-quantity-wrapper"></div>
							</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="flex-row nav flex-align-middle wrap">
		<div class="flex nav-wrapper navigation desktop">
			<ul class="nav-list">
				<li>
					<a navid="home" rel="noopener noreferrer" class="menu-btn" id="home">
						<span langid="home-menu"></span>
					</a>
				</li>
				<li>
					<a navid="gallery" rel="noopener noreferrer" class="menu-btn" id="gallery">
						<span langid="gallery-menu"></span>
					</a>
				</li>
				<li>
					<a navid="catalogue/clothes" rel="noopener noreferrer" class="menu-btn" id="clothes">
						<span langid="clothes-menu"></span>
					</a>
				</li>
				<li>
					<a navid="catalogue/accessories" rel="noopener noreferrer" class="menu-btn" id="accessories">
						<span langid="accessories-menu"></span>
					</a>
				</li>
				<li>
					<a navid="news" rel="noopener noreferrer" class="menu-btn" id="news">
						<span langid="news-menu"></span>
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
					<div class="about-container sub-list-element">
						<a navid="about">
							<img src="/public/images/menu/about.jpg" alt="" width="100%">
							<div class="about-text flex flex-align-middle">
								<p class="after-change" langid="about-sub"></p>
							</div>
						</a>
					</div>
					<div class="sale-container sub-list-element">
						<a navid="catalogue/sale">
							<div class="sale-img">
								<img src="/public/images/menu/action.jpg" alt="" width="100%">
								<div class="sale-text">
									<p langid="sale"></p>
								</div>
							</div>
						</a>
					</div>
					<div class="new-goods-container sub-list-element">
						<a navid="catalogue/new">
							<img src="/public/images/menu/new.jpg" alt="" width="100%">
							<div class="new-text">
								<p langid="new-sub"></p>
							</div>
						</a>
					</div>
				</div>
		</div>
	</div>
	<div class="flex sub-nav-gallery-wrapper sub-nav" id="gallery-sub">
		<div class="sub-gallery-wrapper">
			<div class="sub-gallery-table">
				<div class="clothes-gallery sub-list-element">
					<a navid="fashion-gallery">
						<img src="/public/images/menu/fachion.jpg" alt="" width="100%">
						<div class="gallery-sub-title">
							<p>
								<span langid="fashion-gallery"></span>
							</p>
						</div>
					</a>
				</div>
				<div class="home-gallery sub-list-element">
					<a navid="home-gallery">
						<img src="/public/images/menu/home.jpg" alt="" width="100%">
						<div class="gallery-sub-title">
							<p>
								<span langid="home-gallery"></span>
							</p>
						</div>
					</a>
				</div>
				<div class="travel-gallery sub-list-element">
					<a navid="travel-gallery">
						<img src="/public/images/menu/travel.jpg" alt="" width="100%">
						<div class="gallery-sub-title">
							<p>
								<span langid="travel-gallery"></span>
							</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="flex sub-nav-clothes-wrapper sub-nav" id="clothes-sub">
		<div class="sub-clothes-wrapper">
			<div class="flex nowrap flex-align-middle mobile-sub">
				<div class="women-clothes">
					<ul>
						<p langid="for-women"></p>
						<li>
							<a navid="catalogue/clothes/trousers" class="sub-list-element">
								<span langid="trousers"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/clothes/jumpers" class="sub-list-element">
								<span langid="jumpers"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/clothes/cardigans" class="sub-list-element">
								<span langid="cardigans"></span>
							</a>
						</li>
					</ul>
				</div>
				<div class="new-clothes sub-list-element">
					
					<div class="clothes-table">
						<div class="clothes-title">
							<p langid="new-sub"></p>
						</div>
						<div class="clothes-img">
							<img src="/public/images/menu/new.jpg" alt="" width="100%">
							<div class="new-clothes-text">
								<p langid="new-sub"></p>
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
						<p langid="for-women"></p>
						<li>
							<a navid="catalogue/accessories/mittens" class="sub-list-element">
								<span langid="mittens"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/headwear" class="sub-list-element">
								<span langid="headwear"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/socks" class="sub-list-element">
								<span langid="socks"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/tippets" class="sub-list-element">
								<span langid="tippets"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/gloves" class="sub-list-element">
								<span langid="gloves"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/headscarves" class="sub-list-element">
								<span langid="headscarves"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/shawls" class="sub-list-element">
								<span langid="shawls"></span>
							</a>
						</li>
					</ul>
					<div class="ul-sub-img">
						<img src="/public/images/menu/women.jpg" alt="" width="100%">
					</div>
				</div>
				<div class="ul-for-home flex nowrap">
					<ul>
						<p langid="for-home"></p>
						<li>
							<a navid="catalogue/accessories/plaids" class="sub-list-element">
								<span langid="plaids"></span>
							</a>
						</li>
					</ul>
					<div class="ul-sub-img">
						<img src="/public/images/menu/pledi.jpg" alt="" width="100%">
					</div>
				</div>
				<div class="ul-for-jewelry flex nowrap">
					<ul>
						<p langid="bijouterie"></p>
						<li>
							<a navid="catalogue/accessories/bracelets" class="sub-list-element">
								<span langid="bracelets"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/brooches" class="sub-list-element">
								<span langid="brooches"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/necklaces" class="sub-list-element">
								<span langid="necklaces"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/pendants" class="sub-list-element">
								<span langid="pendants"></span>
							</a>
						</li>
						<li>
							<a navid="catalogue/accessories/earrings" class="sub-list-element">
								<span langid="earrings"></span>
							</a>
						</li>
					</ul>
					<div class="ul-sub-img">
						<img src="/public/images/menu/bij.jpg" alt="" width="100%">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex sub-nav-news-wrapper sub-nav" id="news-sub">
		<div class="news-sub-wrapper">
			<div class="news-sub-content">
				<div class="last-news-container sub-list-element">
					<a navid="news">
						<img src="/public/images/menu/news.jpg" alt="" width="100%">
						<div class="news-sub-title flex nowrap flex-align-middle">
							<span langid="news-sub"></span>
						</div>
					</a>
				</div>
				<div class="rec-news-container sub-list-element">
					<a navid="news/recommended">
						<img src="/public/images/menu/news2.jpg" alt="" width="100%" class="desktop">
						<img src="/public/images/menu/news.jpg" alt="" width="100%" class="mobile">
						<div class="rec-sub-title flex nowrap">
							<span langid="recommended"></span>
						</div>
					</a>
				</div>
				<div class="media-news-container sub-list-element">
					<a navid="news/press">
						<img src="/public/images/menu/news2.jpg" alt="" width="100%" class="desktop">
						<img src="/public/images/menu/news.jpg" alt="" width="100%" class="mobile">
						<div class="media-sub-title flex nowrap">
							<span langid="press"></span>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>