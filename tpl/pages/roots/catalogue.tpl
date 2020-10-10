<head>
    <link rel="stylesheet" href="/css/catalogue.css">
    <link rel="stylesheet" href="/css/jquery.nselect.css">
</head>
<body>
    <main>
        <div class="catalogue-content">
            <aside class="catalogue-left-nav">
                <div class="categories-title">
                    <p id="categories-title">Категории</p>
                </div>
                <button class="catalogue-button accordion">Одежда <span class="btn-ind"></span>
                <div class="catalogue-sub">
                    <ul>
                        <li><a navid="catalogue/clothe/trousers">Брюки</a></li>
                        <li><a navid="catalogue/clothe/jumpers">Джемпера</a></li>
                        <li><a navid="catalogue/clothe/cardigans">Кардиганы</a></li>
                    </ul>
                </div>
                </button>
                <button class="catalogue-button accordion">Аксессуары <span class="btn-ind"></span>
                    <div class="catalogue-sub">
                        <ul>
                            <li><a navid="catalogue/accessories/mittens">Варежки</a></li>
                            <li><a navid="catalogue/accessories/headwear">Головные уборы</a></li>
                            <li><a navid="catalogue/accessories/socks">Носочки</a></li>
                            <li><a navid="catalogue/accessories/stoles">Палантины</a></li>
                            <li><a navid="catalogue/accessories/gloves">Перчатки</a></li>
                            <li><a navid="catalogue/accessories/headscarves">Платки</a></li>
                            <li><a navid="catalogue/accessories/shawls">Шали</a></li>
                        </ul>
                    </div></button>
                <button navid="catalogue/accessories/plaids" class="catalogue-button">Для дома</button>
                <button class="catalogue-button accordion">Бижутерия <span class="btn-ind"></span>
                    <div class="catalogue-sub">
                        <ul>
                            <li><a navid="catalogue/accessories/bracelets">Браслеты</a></li>
                            <li><a navid="catalogue/accessories/brooches">Броши</a></li>
                            <li><a navid="catalogue/accessories/necklace">Колье</a></li>
                            <li><a navid="catalogue/accessories/pendants">Кулоны</a></li>
                            <li><a navid="catalogue/accessories/earrings">Серьги</a></li>
                        </ul>
                    </div></button>
                <button navid="catalogue/sale" class="catalogue-button">Акции</button>
            </aside>
            <div class="catalogue-top-nav">
                <div class="catalogue-button-top-nav">
                    <p>Сортировка:</p>
                    <select class="sorting">
                        <option value="1" selected><p>По умолчанию</p></option>
                        <option value="2"><p>Цена: убывание</p></option>
                        <option value="3"><p>Цена: возрастание</p></option>
                        <option value="4"><p>Алфавитный (А-Я)</p></option>
                        <option value="5"><p>Сначала новое</p></option>
                    </select>
                </div>
            </div>
            <div class="catalogue-page flex wrap">
				<!--
				<div class="product-wrapper">
					<div class="product-photo">
						<img src="/img/gallery/img filler 5x7.jpg" alt="" width="100%">
						<div class="sale-catalogue"><p>Акция</p></div> ???
					</div>
				</div>
				<div class="product-wrapper">
					<div class="product-photo">
						<img src="/img/gallery/img filler 5x7.jpg" alt="" width="100%">
						<div class="new-catalogue"><p>Новинки</p></div> ???
					</div>
				</div>
				-->
            </div>
        </div>
    </main>
    <script src="/js/jquery.nselect.js"></script>
    <script src="/js/catalogue.js"></script>
</body>