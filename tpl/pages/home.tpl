
<head>
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
						<img src="/img/carousel/img filler 16x9.jpg" width="100%" draggable="false" class="desktop">
                        <img src="/img/carousel/img filler 9x16.jpg" width="100%" draggable="false" class="mobile">
                        <p class="slide-text" draggable="false">Надо придумать текст</p>
                        <div class="slide-btn-cont" draggable="false">
                            <a onclick="showContent('clothes')"><button class="slide-button">
                                Одежда
                            </button></a>
                            <a onclick="showContent('accessories')"><button class="slide-button">
                                Аксессуары
                            </button></a>
                        </div>
					</div>
					<div class="slide">
						<img src="/img/carousel/img filler 16x9.jpg" width="100%" draggable="false" class="desktop">
                        <img src="/img/carousel/img filler 9x16.jpg" width="100%" draggable="false" class="mobile">
                        <p class="slide-text" draggable="false">Надо придумать текст</p>
                        <div class="slide-btn-cont" draggable="false">
                            <a onclick="showContent('accessories')"><button class="slide-button">
                                Бижутерия
                            </button></a>
                        </div>
					</div>
					<div class="slide">
						<img src="/img/carousel/img filler 16x9.jpg" width="100%" draggable="false" class="desktop">
                        <img src="/img/carousel/img filler 9x16.jpg" width="100%" draggable="false" class="mobile">
                        <p class="slide-text" draggable="false">Надо придумать текст</p>
                        <div class="slide-btn-cont" draggable="false">
                            <a onclick="showContent('accessories')"><button class="slide-button">
                                Для дома
                            </button></a>
                        </div>
					</div>
				</div>
			</div>
       
        <div class="content-wrapper">
            <div class="section-wrapper-grid">
                <div class="grid-col-1-1-left">
                    <img src="/img/home/img filler 5x4.jpg" alt="" width="100%">
                </div>
                <div class="grid-col-1-2-right">
                    <img src="/img/home/img filler 5x7.jpg" alt="" width="100%">
                </div>
                <div class="grid-bottom-1-1-left content-text-left">
                    <div class="content-text-wrapper-left flex wrap flex-align-middle">
                        <div class="relative-text-wrapper  flex wrap flex-align-middle">
                            <h2 class="content-text-h2">
                                Надо придумать название этому
                            </h2>
                            <p class="content-text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum excepturi tempora est quidem aspernatur! Itaque vero accusantium temporibus sit?</p>
                            <a><button class="content-button">Просмотреть</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="section-wrapper-grid">
                <div class="grid-col-1-1-right">
                    <img src="/img/home/img filler 5x4.jpg" alt="" width="100%">
                </div>
                <div class="grid-col-1-2-left">
                    <img src="/img/home/img filler 5x7.jpg" alt="" width="100%">
                </div>
                <div class="grid-bottom-1-1-right content-text-right">
                    <div class="content-text-wrapper-right flex wrap flex-align-middle">
                        <div class="relative-text-wrapper  flex wrap flex-align-middle">
                            <h2 class="content-text-h2">
                                Надо придумать название этому
                            </h2>
                            <p class="content-text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum excepturi tempora est quidem aspernatur! Itaque vero accusantium temporibus sit?</p>
                            <a><button class="content-button">Просмотреть</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="section-wrapper-grid">
                <div class="grid-col-1-2-middle">
                    <div class="relative-text-wrapper  flex wrap flex-align-middle">
                        <h2 class="content-text-h2">
                            Надо придумать название этому
                        </h2>
                        <p class="content-text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum excepturi tempora est quidem aspernatur! Itaque vero accusantium temporibus sit?</p>
                        <a><button class="content-button">Акции</button></a>
                        <a><button class="content-button">Новинки</button></a>
                    </div>
                </div>
                <div class="grid-col-1-2-left-2">
                    <div class="width-100 height-100 relative overflow-hidden">
                        <img src="/img/home/img filler 5x7.jpg" alt="" width="100%">
                    </div>
                </div>
                <div class="grid-col-1-2-right-2">
                    <div class="width-100 height-100 relative overflow-hidden">
                        <img src="/img/home/img filler 5x7.jpg" alt="" width="100%">
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script type="text/javascript" src="/js/carousel.js"></script>
</body>