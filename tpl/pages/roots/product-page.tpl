<head>
    <link rel="stylesheet" href="/css/product.css">
    <link rel="stylesheet" href="/css/jquery.nselect.css">
</head>
<body>
    <div id="product-page-wrapper" class="content-wrapper-full-width flex nowrap">
        <div class="card-left">
            <div class="product-slider-wrapper" active="0">
                <div class="product-slider">
					<a class="prev-slide">&#10094;</a>
					<a class="next-slide">&#10095;</a>
				</div>
                <div class="product-preview">
                    <div class="width-100 flex flex-row nowrap product-row flex-align-middle"></div>
                </div>
            </div>
        </div>
        <div class="card-right">
            <div class="product-page-title">
                <h2 id="product-data-name"></h2>
                <p id="product-data-price"></p>
                <button id="add-to-cart">В корзину</button>
            </div>
            <article>
                <p id="product-data-description"></p>
            </article>
            <div class="params"></div>
        </div>
    </div>
</body>
<script>loadScripts(["product"]);</script>