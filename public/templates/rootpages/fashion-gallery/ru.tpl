Styles: fashion-gallery;
Scripts: common/gallery;
Title: ???;
<div class="content-wrapper">
	<div class="grid-gallery" id="scroll-1">
		<div class="grid-el-1 scroll1">
			<img src="/public/images/gallery/fashion/1.jpg" alt="" width="100%" onclick="openGallery();currentSlide(1)">
		</div>
		<div class="grid-el-2 scroll1">
			<img src="/public/images/gallery/fashion/2.jpg" alt="" width="100%" onclick="openGallery();currentSlide(2)">
		</div>
		<div class="grid-el-3 scroll1">
			<img src="/public/images/gallery/fashion/16.jpg" alt="" width="100%" onclick="openGallery();currentSlide(3)">
		</div>
		<div class="grid-el-4 scroll1">
			<img src="/public/images/gallery/fashion/IMG_8971-26-12-18-05-24.JPG" alt="" width="100%" onclick="openGallery();currentSlide(4)">
		</div>
		<div class="grid-el-5 scroll1">
			<img src="/public/images/gallery/fashion/IMG_8973-26-12-18-05-24.JPG" alt="" width="100%" onclick="openGallery();currentSlide(5)">
		</div>
		<div class="grid-el-6 scroll1">
			<img src="/public/images/gallery/fashion/IMG_8975-26-12-18-05-24.JPG" alt="" width="100%" onclick="openGallery();currentSlide(6)">
		</div>
		<div class="grid-el-7 scroll1">
			<img src="/public/images/gallery/fashion/IMG_8976-26-12-18-05-24.JPG" alt="" width="100%" onclick="openGallery();currentSlide(7)">
		</div>
		<div class="grid-el-8 scroll1">
			<img src="/public/images/gallery/fashion/IMG_8977-26-12-18-05-24.JPG" alt="" width="100%" onclick="openGallery();currentSlide(8)">
		</div>
		<div class="grid-el-9 scroll1">
			<img src="/public/images/gallery/fashion/IMG_8978-26-12-18-05-24.JPG" alt="" width="100%" onclick="openGallery();currentSlide(9)">
		</div>
	</div>
</div>
<div class="gallery-modal-bg" id="galleryModal">
	<div class="gallery-modal-container">
		<span class="close-gallery" id="closeGallery"></span>
		<div class="gallery-modal-content">
			<div class="gallery-slider">
				<div class="gallery-slide">
					<img src="/public/images/gallery/fashion/slider/43.jpg" alt="" width="100%">
				</div>
				<div class="gallery-slide">
					<img src="/public/images/gallery/fashion/slider/IMG_8972-26-12-18-05-24.JPG" alt="" width="100%">
				</div>
				<div class="gallery-slide">
					<img src="/public/images/gallery/fashion/slider/16.jpg" alt="" width="100%">
				</div>
				<div class="gallery-slide">
					<img src="/public/images/gallery/fashion/slider/IMG_8971-26-12-18-05-24.JPG" alt="" width="100%">
				</div>
				<div class="gallery-slide">
					<img src="/public/images/gallery/fashion/slider/IMG_8973-26-12-18-05-24.JPG" alt="" width="100%">
				</div>
				<div class="gallery-slide">
					<img src="/public/images/gallery/fashion/slider/IMG_8975-26-12-18-05-24.JPG" alt="" width="100%">
				</div>
				<div class="gallery-slide">
					<img src="/public/images/gallery/fashion/slider/IMG_8976-26-12-18-05-24.JPG" alt="" width="100%">
				</div>
				<div class="gallery-slide">
					<img src="/public/images/gallery/fashion/slider/IMG_8977-26-12-18-05-24.JPG" alt="" width="100%">
				</div>
				<div class="gallery-slide">
					<img src="/public/images/gallery/fashion/slider/IMG_8978-26-12-18-05-24.JPG" alt="" width="100%">
				</div>
				<div class="gallery-slide">
					<img src="/public/images/gallery/fashion/slider/150.jpg" alt="" width="100%">
				</div>
				<div class="gallery-slide">
					<img src="/public/images/gallery/fashion/slider/72.jpg" alt="" width="100%">
				</div>
				<a class="prev-slide" onclick="plusSlide(-1)">&#10094;</a>
				<a class="next-slide" onclick="plusSlide(1)">&#10095;</a>
			</div>
			<div class="alt-text">
				<p id="caption"></p>
			</div>
			<div class="slider-preview">
				<div class="width-100 flex flex-row nowrap preview-row flex-align-middle ">
					<div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(1)">
						<img src="/public/images/gallery/fashion/slider/prev/43.jpg" alt="Simple example 1" width="100%" class="demo">
					</div>
					<div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(2)">
						<img src="/public/images/gallery/fashion/slider/prev/IMG_8972-26-12-18-05-24.jpg" alt="Simple example 2" width="100%" class="demo">
					</div>
					<div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(3)">
						<img src="/public/images/gallery/fashion/slider/prev/16.jpg" alt="Simple example 3" width="100%" class="demo">
					</div>
					<div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(4)">
						<img src="/public/images/gallery/fashion/slider/prev/IMG_8971-26-12-18-05-24.jpg" alt="Simple example 4" width="100%" class="demo">
					</div>
				</div>
				<div class="width-100 flex flex-row nowrap preview-row flex-align-middle">
					<div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(5)">
						<img src="/public/images/gallery/fashion//slider/prev/IMG_8973-26-12-18-05-24.jpg" alt="Simple example 5" width="100%" class="demo">
					</div>
					<div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(6)">
						<img src="/public/images/gallery/fashion/slider/prev/IMG_8975-26-12-18-05-24.jpg" alt="Simple example 6" width="100%" class="demo">
					</div>
					<div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(7)">
						<img src="/public/images/gallery/fashion/slider/prev/IMG_8976-26-12-18-05-24.jpg" alt="Simple example 7" width="100%" class="demo">
					</div>
					<div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(8)">
						<img src="/public/images/gallery/fashion/slider/prev/IMG_8977-26-12-18-05-24.jpg" alt="Simple example 8" width="100%" class="demo">
					</div>
				</div>
				<div class="width-100 flex flex-row nowrap preview-row flex-align-middle ">
					<div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(9)">
						<img src="/public/images/gallery/fashion/slider/prev/IMG_8978-26-12-18-05-24.jpg" alt="Simple example 9" width="100%" class="demo">
					</div>
					<div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(10)">
						<img src="/public/images/gallery/fashion/slider/prev/150.jpg" alt="Simple example 10" width="100%" class="demo">
					</div>
					<div class="col-1-4 flex-column overflow-hidden" onclick="currentSlide(11)">
						<img src="/public/images/gallery/fashion/slider/prev/72.jpg" alt="Simple example 10" width="100%" class="demo">
					</div>
				</div>
			</div>
		</div>
	</div>
</div>