Styles: jquery.nselect, catalogue;
Scripts: common/jquery.nselect, unique/catalogue;
Title: Catalogue;
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
			<p id="categories-title">Categories</p>
		</div>
		<button class="catalogue-button accordion">
			<p>Clothes <span class="btn-ind"></span></p>
			<div class="catalogue-sub">
				<ul>
					<li>
						<a navid="catalogue/clothes/trousers">Trousers</a>
					</li>
					<li>
						<a navid="catalogue/clothes/jumpers">Jumpers</a>
					</li>
					<li>
						<a navid="catalogue/clothes/cardigans">Cardigans</a>
					</li>
				</ul>
			</div>
		</button>
		<button class="catalogue-button accordion">
			<p>Accessories <span class="btn-ind"></span></p>
			<div class="catalogue-sub">
				<ul>
					<li>
						<a navid="catalogue/accessories/mittens">Mittens</a>
					</li>
					<li>
						<a navid="catalogue/accessories/headwear">Headwear</a>
					</li>
					<li>
						<a navid="catalogue/accessories/socks">Socks</a>
					</li>
					<li>
						<a navid="catalogue/accessories/tippets">Tippets</a>
					</li>
					<li>
						<a navid="catalogue/accessories/gloves">Gloves</a>
					</li>
					<li>
						<a navid="catalogue/accessories/headscarves">Headscarves</a>
					</li>
					<li>
						<a navid="catalogue/accessories/shawls">Shawls</a>
					</li>
				</ul>
			</div>
		</button>
		<button class="catalogue-button">
			<a navid="catalogue/accessories/plaids">
				<p>For the house</p>
			</a>
		</button>
		<button class="catalogue-button accordion">
			<p>Bijouterie <span class="btn-ind"></span></p>
			<div class="catalogue-sub">
				<ul>
					<li>
						<a navid="catalogue/accessories/bracelets">Bracelets</a>
					</li>
					<li>
						<a navid="catalogue/accessories/brooches">Brooches</a>
					</li>
					<li>
						<a navid="catalogue/accessories/necklaces">Necklaces</a>
					</li>
					<li>
						<a navid="catalogue/accessories/pendants">Pendants</a>
					</li>
					<li>
						<a navid="catalogue/accessories/earrings">Earrings</a>
					</li>
				</ul>
			</div>
		</button>
		<button class="catalogue-button">
			<a navid="catalogue/sale">
				<p>Sales</p>
			</a>
		</button>
	</aside>
	<div class="catalogue-top-nav">
		<div class="catalogue-button-top-nav">
			<p>Sorting:</p>
			<select class="sorting">
				<option value="1" selected>
					<p>By default</p>
				</option>
				<option value="2">
					<p>Price: decreasing</p>
				</option>
				<option value="3">
					<p>Price: increasing</p>
				</option>
				<option value="4">
					<p>Alphabetical (A-Z)</p>
				</option>
				<option value="5">
					<p>New first</p>
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