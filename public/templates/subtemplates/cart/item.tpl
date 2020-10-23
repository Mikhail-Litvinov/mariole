<div class="product-card flex nowrap" article="${article}">
	<div class="product-card-photo">
		<img src="/public/images/products-images/${img}.jpg" alt="" width="100%">
	</div>
	<div class="product-card-content flex wrap">
		<div class="flex-row width-100 first">
			<div class="product-card-title">
				<a navid="product/${article}" class="js-product-title"></a>
			</div>
			<div class="product-card-price">
				<p class="js-product-price"></p>
			</div>
		</div>
		<div class="flex-row width-100 wrap">
			<div class="product-card-quantity flex nowrap">
				<button class="decrease-quantity js-product-decrease-quantity">-</button>
				<p class="quantity js-product-quantity">${quantity}</p>
				<button class="increase-quantity js-product-increase-quantity">+</button>
			</div>
			<div class="product-card-del flex">
				<button class="js-product-delete">Удалить</button>
			</div>
		</div>
	</div>
</div>