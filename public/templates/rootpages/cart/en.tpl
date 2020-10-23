Styles: cart;
Scripts: unique/cart;
Title: Cart;
<div class="content-wrapper-full-width">
	<div class="content-title-2">
		<h2>Корзина</h2>
	</div>
	<div class="cart-content flex nowrap">
		<div class="cart-column-left"></div>
		<div class="cart-column-right">
			<div class="payment-content">
				<div class="payment-details flex wrap">
					<div class="payment-details-item flex nowrap">
						<p>Товаров на:</p>
						<p class="payment-sum js-payment-sum"></p>
					</div>
					<div class="payment-details-item flex nowrap">
						<p>Включая НДС:</p>
						<p class="payment-vat js-payment-vat"></p>
					</div>
					<div class="payment-details-item flex nowrap">
						<p>Итого:</p>
						<p class="payment-final-sum js-payment-final-sum"></p>
					</div>
				</div>
				<div class="payment-order flex wrap">
					<button class="js-payment-pay">Оплатить</button>
					<button class="js-payment-back">Назад в магазин</button>
				</div>
			</div>
		</div>
	</div>
</div>