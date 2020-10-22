<div class="product-card flex nowrap" article="${article}">
	<div class="product-card-photo">
		<img src="/public/images/products-images/${img}.jpg" alt="" width="100%">
	</div>
	<div class="product-card-content flex wrap">
		<div class="flex-row width-100 first">
			<div class="product-card-title">
				<a navid="product/${article}"></a>
			</div>
			<div class="product-card-price">
				<p></p>
			</div>
		</div>
		<div class="flex-row width-100 wrap">
			<div class="product-card-quantity flex nowrap">
				<button class="decrease-quantity">-</button>
				<p class="quantity">${quantity}</p>
				<button class="increase-quantity">+</button>
			</div>
			<div class="product-card-del flex">
				<button>Удалить</button>
			</div>
		</div>
	</div>
</div>