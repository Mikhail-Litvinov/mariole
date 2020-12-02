Styles: news;
Scripts: common/SimpleSlider, unique/news;
<div class="content-wrapper-full-width js-news-page" style="display: none;">
	<div class="mobile-nav-news ">
		<div class="mobile-nav-button">
			<img src="/public/images/button.png" alt="" width="100%" class="mob-open-btn">
		</div>
	</div>
	<div class="blog-wrapper flex nowrap">
		<div id="trigger"></div>
		<div class="blog-column-left flex wrap js-preview-container"></div>
		<div class="blog-column-right wrap">
			<div id="slickMenu">
				<div class="blog-nav-element">
					<div class="blog-search-wrapper">
						<form action="javascript:void(0);" class="blog-search-form flex wrap js-search-form">
							<div class="search-input-cont">
								<input type="text" class="blog-search-input js-search-value" clangattrid="search_text"/>
								<span class="blog-search"></span>
							</div>
							<input type="submit" class="blog-search-button js-search-btn" clangattrid="search_button"/>
						</form>
					</div>
				</div>
				<div class="blog-nav-element">
					<div class="blog-categories-wrapper flex wrap">
						<h2 clangid="categories"></h2>
						<button class="blog-categories-button">
							<a><span clangid="category_fresh"></span> (<span class="news-count js-count-fresh"></span>)</a>
						</button>
						<button class="blog-categories-button">
							<a><span clangid="category_recommended"></span> (<span class="news-count js-count-recommended"></span>)</a>
						</button>
						<button class="blog-categories-button">
							<a navid="news/media"><span clangid="category_media"></span> (<span class="news-count js-count-media"></span>)</a>
						</button>
						<button class="blog-categories-button">
							<a navid="news/trips"><span clangid="category_trips"></span> (<span class="news-count js-count-trips"></span>)</a>
						</button>
						<button class="blog-categories-button">
							<a navid="news/product"><span clangid="category_products"></span> (<span class="news-count js-count-products"></span>)</a>
						</button>
						<button class="blog-categories-button">
							<a navid="news/sale"><span clangid="category_sales"></span> (<span class="news-count js-count-sales"></span>)</a>
						</button>
					</div>
				</div>
				<div class="blog-nav-element">
					<div class="key-words-wrapper flex wrap">
						<form action="" class="js-tags-form flex wrap">
							<label class="blog-keywords-button">
								<input name="product" type="checkbox" class="checkbox-keywords"/>
								<span clangid="tag_product"></span>
							</label>
							<label class="blog-keywords-button">
								<input name="sale" type="checkbox" class="checkbox-keywords"/>
								<span clangid="tag_sale"></span>
							</label>
							<label class="blog-keywords-button">
								<input name="trips" type="checkbox" class="checkbox-keywords"/>
								<span clangid="tag_trips"></span>
							</label>
							<label class="blog-keywords-button">
								<input name="new" type="checkbox" class="checkbox-keywords"/>
								<span clangid="tag_new"></span>
							</label>
							<label class="blog-keywords-button">
								<input name="mariole_life_style" type="checkbox" class="checkbox-keywords"/>
								<span clangid="tag_mariole_life_style"></span>
							</label>
							<label class="blog-keywords-button">
								<input name="design" type="checkbox" class="checkbox-keywords"/>
								<span clangid="tag_design"></span>
							</label>
							<label class="blog-keywords-button">
								<input name="photo" type="checkbox" class="checkbox-keywords"/>
								<span clangid="tag_photo"></span>
							</label>
							<label class="blog-keywords-button">
								<input name="clothes" type="checkbox" class="checkbox-keywords"/>
								<span clangid="tag_clothes"></span>
							</label>
							<label class="blog-keywords-button">
								<input name="accessories" type="checkbox" class="checkbox-keywords"/>
								<span clangid="tag_accessories"></span>
							</label>
							<label class="blog-keywords-button">
								<input name="media" type="checkbox" class="checkbox-keywords"/>
								<span clangid="tag_media"></span>
							</label>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="js-post-wrapper post-wrapper" style="display: none;"></div>