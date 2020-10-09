<head>
    <link rel="stylesheet" href="/css/product.css">
    <link rel="stylesheet" href="/css/jquery.nselect.css">
    <link rel="stylesheet" href="/css/media.css">
</head>
<body>
    <div class="content-wrapper-full-width flex nowrap" id="product-page-wrapper">
        <div class="card-left">
            <div class="product-slider-wrapper wow animate__slideInUp" data-wow-duration="0.8s">
                <div class="product-slider">
                    <div class="product-slide fade">
                        <img src="/img/gallery/fashion/img filler 1x1.jpg" alt="" width="100%">
                    </div>
                    <div class="product-slide fade">
                        <img src="/img/gallery/fashion/img filler 1x1.jpg" alt="" width="100%">
                    </div>
                    <div class="product-slide fade">
                        <img src="/img/gallery/fashion/img filler 1x1.jpg" alt="" width="100%">
                    </div>
                    <a class="prev-slide" onclick="plusSlide(-1)">&#10094;</a>
                    <a class="next-slide" onclick="plusSlide(1)">&#10095;</a>
                </div>
                <div class="product-preview wow animate__slideInUp" data-wow-duration="0.8s">
                    <div class="width-100 flex flex-row nowrap product-row flex-align-middle ">
                        <div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(1)">
                            <img src="/img/gallery/fashion/prev/img filler 1x1.jpg" alt="Simple example 1" width="100%" class="demo">
                        </div>
                        <div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(2)">
                            <img src="/img/gallery/fashion/prev/img filler 1x1.jpg" alt="Simple example 2" width="100%" class="demo">
                        </div>
                        <div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(3)">
                            <img src="/img/gallery/fashion/prev/img filler 1x1.jpg" alt="Simple example 3" width="100%" class="demo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-right">
            <div class="product-page-title wow animate__slideInUp" data-wow-duration="0.8s">
                <h2>Название продукта</h2>
                <p>ХХ.ХХХ(&#8381;)</p>
                <button>В корзину</button>
            </div>
            <article class=" wow animate__slideInUp" data-wow-duration="0.8s">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel odit dolorum, dignissimos 
                    libero eos expedita velit nam esse autem ullam nemo ad natus deleniti doloremque recusandae 
                    repellat reiciendis quos? Nostrum laudantium dolore a quas maiores illo adipisci, error modi saepe 
                    dolor totam accusantium atque ut ipsa est eius in fuga mollitia eaque similique beatae odio quaerat! 
                    Minus culpa, assumenda dolores odit, quas laudantium quibusdam dolorem numquam natus voluptate dicta, 
                    consequatur tempora incidunt molestias velit provident blanditiis porro! Sunt, nam quidem? Alias consequuntur, 
                    quae rem dolores sequi laborum odio corporis corrupti, minus unde cum assumenda est facilis voluptates, 
                    iure vero enim!</p>
            </article>
            <div class="params wow animate__slideInUp" data-wow-duration="0.8s">
                <div class="params-row">
                    <span class="flex"><p>Длинна</p></span>
                    <span class="params-info"><p>xxx см</p></span>
                </div>
                <div class="params-row">
                    <span class="flex"><p>Ширина</p></span>
                    <span class="params-info"><p>xxx см</p></span>
                </div>
                <div class="params-row">
                    <span class="flex"><p>Ткань</p></span>
                    <span class="params-info"><p>???</p></span>
                </div>
                <div class="params-row">
                    <span class="flex"><p>Что-нибудь еще</p></span>
                    <span class="params-info"><p>xxx см</p></span>
                </div>
                <div class="params-row">
                    <span class="flex"><p>Хоть на всю страницу</p></span>
                    <span class="params-info"><p>xxx см</p></span>
                </div>
            </div>
        </div>
    </div>
    <script src="/js/product.js"></script>
</body>