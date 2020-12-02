Styles: jquery.nselect, catalogue;
Scripts: common/jquery.nselect, unique/catalogue;
<div class="catalogue-content">
	<div id="openCatNav" class="mobile">
		<div class="hamburger mobile-cat-nav" id="hamburger-4">
			<span class="line"></span>
			<span class="line"></span>
			<span class="line"></span>
		</div>
	</div>
	<aside class="catalogue-left-nav">
		<div class="categories-title">
			<p id="categories-title" clangid="categories"></p>
		</div>
		<button class="catalogue-button accordion">
			<p><span clangid="clothes"></span> <span class="btn-ind"></span></p>
			<div class="catalogue-sub">
				<ul>
					<li>
						<a navid="catalogue/clothes/trousers" clangid="trousers"></a>
					</li>
					<li>
						<a navid="catalogue/clothes/jumpers" clangid="jumpers"></a>
					</li>
					<li>
						<a navid="catalogue/clothes/cardigans" clangid="cardigans"></a>
					</li>
				</ul>
			</div>
		</button>
		<button class="catalogue-button accordion">
			<p><span clangid="accessories"></span> <span class="btn-ind"></span></p>
			<div class="catalogue-sub">
				<ul>
					<li>
						<a navid="catalogue/accessories/mittens" clangid="mittens"></a>
					</li>
					<li>
						<a navid="catalogue/accessories/headwear" clangid="headwear"></a>
					</li>
					<li>
						<a navid="catalogue/accessories/socks" clangid="socks"></a>
					</li>
					<li>
						<a navid="catalogue/accessories/tippets" clangid="tippets"></a>
					</li>
					<li>
						<a navid="catalogue/accessories/gloves" clangid="gloves"></a>
					</li>
					<li>
						<a navid="catalogue/accessories/headscarves" clangid="headscarves"></a>
					</li>
					<li>
						<a navid="catalogue/accessories/shawls" clangid="shawls"></a>
					</li>
				</ul>
			</div>
		</button>
		<button class="catalogue-button">
			<a navid="catalogue/accessories/plaids">
				<p clangid="for_home"></p>
			</a>
		</button>
		<button class="catalogue-button accordion">
			<p><span clangid="bijouterie"></span> <span class="btn-ind"></span></p>
			<div class="catalogue-sub">
				<ul>
					<li>
						<a navid="catalogue/accessories/bracelets" clangid="bracelets"></a>
					</li>
					<li>
						<a navid="catalogue/accessories/brooches" clangid="brooches"></a>
					</li>
					<li>
						<a navid="catalogue/accessories/necklaces" clangid="necklaces"></a>
					</li>
					<li>
						<a navid="catalogue/accessories/pendants" clangid="pendants"></a>
					</li>
					<li>
						<a navid="catalogue/accessories/earrings" clangid="earrings"></a>
					</li>
				</ul>
			</div>
		</button>
		<button class="catalogue-button">
			<a navid="catalogue/sale">
				<p clangid="sales"></p>
			</a>
		</button>
	</aside>
	<div class="catalogue-top-nav">
		<div class="catalogue-button-top-nav">
			<p clangid="sorting"></p>
			<select class="sorting">
				<option value="1" selected>
					<p clangid="by_default"></p>
				</option>
				<option value="2">
					<p clangid="price_decreasing"></p>
				</option>
				<option value="3">
					<p clangid="price_increasing"></p>
				</option>
				<option value="4">
					<p clangid="alphabetical"></p>
				</option>
				<option value="5">
					<p clangid="new_first"></p>
				</option>
			</select>
		</div>
	</div>
	<div class="catalogue-page flex wrap">
		<!--
		<div class="product-wrapper">
			<div class="product-photo">
				<img src="/public/images/gallery/img filler 5x7.jpg" alt="" width="100%">
				<div class="sale-catalogue"><p>Акция</p></div> ???
			</div>
		</div>
		<div class="product-wrapper">
			<div class="product-photo">
				<img src="/public/images/gallery/img filler 5x7.jpg" alt="" width="100%">
				<div class="new-catalogue"><p>Новинки</p></div> ???
			</div>
		</div>
		-->
	</div>
</div>