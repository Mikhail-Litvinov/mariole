
<head>
    <link rel="stylesheet" href="/css/stylesheet.css">
    <link rel="stylesheet" href="/css/home-page.css">
    <link rel="stylesheet" href="/css/media.css">
</head>
<body>
    <main>
        <div id="carousel">
				<div id="previous-slide-btn" class="move-slide-btn">
					<div class="circle">
						<span class="previous-slide-icon">&lt;</span>
					</div>
				</div>
				<div id="next-slide-btn" class="move-slide-btn">
					<div class="circle">
						<span class="next-slide-icon">&gt;</span>
					</div>
				</div>
				<div id="slide-container">
					<div class="slide">
						<img src="/img/carousel/img filler 16x9.jpg" width="100%">
                        <p class="slide-text">Надо придумать текст</p>
                        <div class="slide-btn-cont">
                            <a onclick="showContent('clothes')"><button class="slide-button">
                                Одежда
                            </button></a>
                            <a onclick="showContent('accessories')"><button class="slide-button">
                                Аксессуары
                            </button></a>
                        </div>
					</div>
					<div class="slide">
						<img src="/img/carousel/img filler 16x9.jpg" width="100%">
                        <p class="slide-text">Надо придумать текст</p>
                        <div class="slide-btn-cont">
                            <a onclick="showContent('accessories')"><button class="slide-button">
                                Бижутерия
                            </button></a>
                        </div>
					</div>
					<div class="slide">
						<img src="/img/carousel/img filler 16x9.jpg" width="100%">
                        <p class="slide-text">Надо придумать текст</p>
                        <div class="slide-btn-cont">
                            <a onclick="showContent('accessories')"><button class="slide-button">
                                Для дома
                            </button></a>
                        </div>
					</div>
				</div>
			</div>
       
        <div class="content-wrapper">
            <div class="section-wrapper-grid">
                <div class="img-home-1">
                    <img src="/img/home/img filler 5x4.jpg" alt="" width="100%">
                </div>
                <div class="img-home-2">
                    <img src="/img/home/img filler 5x7.jpg" alt="" width="100%">
                </div>
                <div class="content-text">
                    <div class="content-text-wrapper-left flex wrap flex-align-middle">
                        <div class="relative-text-wrapper  flex wrap flex-align-middle">
                            <h2>
                                Надо придумать название этому
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum excepturi tempora est quidem aspernatur! Itaque vero accusantium temporibus sit?</p>
                            <a><button class="content-button">Просмотреть</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script type="text/javascript" src="/js/carousel.js"></script>
</body>