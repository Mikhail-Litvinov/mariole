<p title="Home page" visible="false">
<head>
	<link rel="stylesheet" href="/public/css/content/home.css">
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
					<img src="/public/images/carousel/img filler 16x9.jpg" width="100%" class="desktop">
					<img src="/public/images/carousel/img filler 9x16.jpg" width="100%" class="mobile">
					<p class="slide-text">Have to write text</p>
					<div class="slide-btn-cont">
						<a navid="catalogue/clothe">
							<button class="slide-button">Clothes</button>
						</a>
						<a navid="catalogue/accessories">
							<button class="slide-button">Accessories</button>
						</a>
					</div>
				</div>
				<div class="slide">
					<img src="/public/images/carousel/img filler 16x9.jpg" width="100%" class="desktop">
					<img src="/public/images/carousel/img filler 9x16.jpg" width="100%" class="mobile">
					<p class="slide-text">Have to write text</p>
					<div class="slide-btn-cont">
						<a navid="catalogue/accessories">
							<button class="slide-button">Bijouterie</button>
						</a>
					</div>
				</div>
				<div class="slide">
					<img src="/public/images/carousel/img filler 16x9.jpg" width="100%" class="desktop">
					<img src="/public/images/carousel/img filler 9x16.jpg" width="100%" class="mobile">
					<p class="slide-text">Have to write text</p>
					<div class="slide-btn-cont">
						<a navid="catalogue/accessories">
							<button class="slide-button">For home</button>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="content-wrapper">
			<div class="section-wrapper-grid" id="scroll-1">
				<div class="grid-col-1-1-left scroll1">
					<img src="/public/images/home/img filler 5x4.jpg" alt="" width="100%">
				</div>
				<div class="grid-col-1-2-right scroll1">
					<img src="/public/images/home/img filler 5x7.jpg" alt="" width="100%">
				</div>
				<div class="grid-bottom-1-1-left content-text-left">
					<div class="content-text-wrapper-left flex wrap flex-align-middle scroll1">
						<div class="relative-text-wrapper flex wrap flex-align-middle">
							<h2 class="content-text-h2">
								Have to write name for this
							</h2>
							<p class="content-text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum excepturi tempora est quidem aspernatur! Itaque vero accusantium temporibus sit?</p>
							<a>
								<button class="content-button">Look</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content-wrapper">
			<div class="section-wrapper-grid" id="scroll-2">
				<div class="grid-col-1-1-right scroll2">
					<img src="/public/images/home/img filler 5x4.jpg" alt="" width="100%">
				</div>
				<div class="grid-col-1-2-left scroll2">
					<img src="/public/images/home/img filler 5x7.jpg" alt="" width="100%">
				</div>
				<div class="grid-bottom-1-1-right content-text-right">
					<div class="content-text-wrapper-right flex wrap flex-align-middle scroll2">
						<div class="relative-text-wrapper flex wrap flex-align-middle">
							<h2 class="content-text-h2">
								Have to write name for this
							</h2>
							<p class="content-text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum excepturi tempora est quidem aspernatur! Itaque vero accusantium temporibus sit?</p>
							<a>
								<button class="content-button">Look</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content-wrapper">
			<div class="section-wrapper-grid" id="scroll-3">
				<div class="grid-col-1-2-middle scroll3">
					<div class="relative-text-wrapper flex wrap flex-align-middle">
						<h2 class="content-text-h2">
							Have to write name for this
						</h2>
						<p class="content-text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum excepturi tempora est quidem aspernatur! Itaque vero accusantium temporibus sit?</p>
						<a navid="catalogue/sale">
							<button class="content-button scroll3">Sales</button>
						</a>
						<a navid="catalogue/new">
							<button class="content-button scroll3">New products</button>
						</a>
					</div>
				</div>
				<div class="grid-col-1-2-left-2 scroll3">
					<div class="width-100 height-100 relative overflow-hidden">
						<img src="/public/images/home/img filler 5x7.jpg" alt="" width="100%">
					</div>
				</div>
				<div class="grid-col-1-2-right-2 scroll3">
					<div class="width-100 height-100 relative overflow-hidden">
						<img src="/public/images/home/img filler 5x7.jpg" alt="" width="100%">
					</div>
				</div>
			</div>
		</div>
	</main>
</body>
<script>app.loadScripts(["common/carousel", "unique/home"]);</script>