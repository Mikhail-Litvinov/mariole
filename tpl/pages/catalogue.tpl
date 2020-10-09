<head>
    <link rel="stylesheet" href="/css/catalogue.css">
    <link rel="stylesheet" href="/css/jquery.nselect.css">
    <link rel="stylesheet" href="/css/media.css">
</head>
<body>
    <main>
        <div class="catalogue-content">
            <div id="openCatNav" class="mobile">
                <div class="hamburger" id="hamburger-4">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                  </div>
            </div>
            <aside class="catalogue-left-nav">
                <div class="categories-title">
                    <p id="categories-title">Категории</p>
                </div>
                <button class="catalogue-button accordion">Одежда <span class="btn-ind"></span>
                <div class="catalogue-sub">
                    <ul>
                        <li><a >Брюки</a></li>
                        <li><a >Джемпера</a></li>
                        <li><a >Кардиганы</a></li>
                    </ul>
                </div>
                </button>
                <button class="catalogue-button accordion">Аксессуары <span class="btn-ind"></span>
                    <div class="catalogue-sub">
                        <ul>
                            <li><a >Варежки</a></li>
                            <li><a >Головные уборы</a></li>
                            <li><a >Носочки</a></li>
                            <li><a >Палантины</a></li>
                            <li><a >Перчатки</a></li>
                            <li><a >Платки</a></li>
                            <li><a >Шали</a></li>
                        </ul>
                    </div></button>
                <button class="catalogue-button">Для дома</button>
                <button class="catalogue-button accordion">Бижутерия <span class="btn-ind"></span>
                    <div class="catalogue-sub">
                        <ul>
                            <li><a >Браслеты</a></li>
                            <li><a >Броши</a></li>
                            <li><a >Колье</a></li>
                            <li><a >Кулоны</a></li>
                            <li><a >Серьги</a></li>
                        </ul>
                    </div></button>
                <button class="catalogue-button">Акции</button>
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
                <div class="product-wrapper wow animate__slideInUp" data-wow-duration="0.8s" onclick="showContent('product-page')">
                    <div class="product-photo">
                        <img src="/img/gallery/img filler 5x7.jpg" alt="" width="100%">
                    </div>
                    <div class="product-title">
                        <P>Название товара</P>
                    </div>
                    <div class="product-price">
                        <p>ХХ.ХХХ(&#8381;)</p>
                    </div>
                </div>
                <div class="product-wrapper wow animate__slideInUp" data-wow-duration="0.8s" onclick="showContent('product-page')">
                    <div class="product-photo">
                        <img src="/img/gallery/img filler 5x7.jpg" alt="" width="100%">
                    </div>
                    <div class="product-title">
                        <P>Название товара</P>
                    </div>
                    <div class="product-price">
                        <p>ХХ.ХХХ(&#8381;)</p>
                    </div>
                </div>
                <div class="product-wrapper wow animate__slideInUp" data-wow-duration="0.8s" onclick="showContent('product-page')">
                    <div class="product-photo">
                        <img src="/img/gallery/img filler 5x7.jpg" alt="" width="100%">
                    </div>
                    <div class="product-title">
                        <P>Название товара</P>
                    </div>
                    <div class="product-price">
                        <p>ХХ.ХХХ(&#8381;)</p>
                    </div>
                </div>
                <div class="product-wrapper wow animate__slideInUp" data-wow-duration="0.8s" onclick="showContent('product-page')">
                    <div class="product-photo">
                        <img src="/img/gallery/img filler 5x7.jpg" alt="" width="100%">
                        <div class="sale-catalogue">
								<p>Акция</p>
							</div>
                    </div>
                    <div class="product-title">
                        <P>Название товара</P>
                    </div>
                    <div class="product-price">
                        <p>ХХ.ХХХ(&#8381;)</p>
                    </div>
                </div>
                <div class="product-wrapper wow animate__slideInUp" data-wow-duration="0.8s" onclick="showContent('product-page')">
                    <div class="product-photo">
                        <img src="/img/gallery/img filler 5x7.jpg" alt="" width="100%">
                    </div>
                    <div class="product-title">
                        <P>Название товара</P>
                    </div>
                    <div class="product-price">
                        <p>ХХ.ХХХ(&#8381;)</p>
                    </div>
                </div>
                <div class="product-wrapper wow animate__slideInUp" data-wow-duration="0.8s" onclick="showContent('product-page')">
                    <div class="product-photo">
                        <img src="/img/gallery/img filler 5x7.jpg" alt="" width="100%">
                    </div>
                    <div class="product-title">
                        <P>Название товара</P>
                    </div>
                    <div class="product-price">
                        <p>ХХ.ХХХ(&#8381;)</p>
                    </div>
                </div>
                <div class="product-wrapper wow animate__slideInUp" data-wow-duration="0.8s" onclick="showContent('product-page')">
                    <div class="product-photo">
                        <img src="/img/gallery/img filler 5x7.jpg" alt="" width="100%">
                        <div class="new-catalogue">
							<p>Новинки</p>
						</div>
                    </div>
                    <div class="product-title">
                        <P>Название товара</P>
                    </div>
                    <div class="product-price">
                        <p>ХХ.ХХХ(&#8381;)</p>
                    </div>
                </div>
                <div class="product-wrapper wow animate__slideInUp" data-wow-duration="0.8s" onclick="showContent('product-page')">
                    <div class="product-photo">
                        <img src="/img/gallery/img filler 5x7.jpg" alt="" width="100%">
                    </div>
                    <div class="product-title">
                        <P>Название товара</P>
                    </div>
                    <div class="product-price">
                        <p>ХХ.ХХХ(&#8381;)</p>
                    </div>
                </div>
                <div class="product-wrapper wow animate__slideInUp" data-wow-duration="0.8s" onclick="showContent('product-page')">
                    <div class="product-photo">
                        <img src="/img/gallery/img filler 5x7.jpg" alt="" width="100%">
                    </div>
                    <div class="product-title">
                        <P>Название товара</P>
                    </div>
                    <div class="product-price">
                        <p>ХХ.ХХХ(&#8381;)</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script src="/js/jquery.nselect.js"></script>
    <script src="/js/catalogue.js"></script>
</body>