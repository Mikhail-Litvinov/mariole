Styles: cart;
Scripts: unique/cart;
Title: Cart;
<div class="content-wrapper-full-width">
	<div class="content-title-2">
		<h2>Cart</h2>
	</div>
	<div class="cart-content flex nowrap">
		<div class="cart-column-left"></div>
		<div class="cart-column-right">
			<div class="payment-content">
				<div class="payment-details flex wrap">
					<div class="payment-details-item flex nowrap">
						<p>Products for:</p>
						<p class="payment-sum js-payment-sum"></p>
					</div>
					<div class="payment-details-item flex nowrap">
						<p>Including VAT:</p>
						<p class="payment-vat js-payment-vat"></p>
					</div>
					<div class="payment-details-item flex nowrap">
						<p>Total:</p>
						<p class="payment-final-sum js-payment-final-sum"></p>
					</div>
				</div>
				<div class="payment-order flex wrap">
					<button class="js-payment-pay">Pay</button>
					<button class="js-payment-back">Back to the shop</button>
				</div>
			</div>
		</div>
	</div>
</div>