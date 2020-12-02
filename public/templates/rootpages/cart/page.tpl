Styles: cart, order, suggestions;
Scripts: unique/cart, common/suggestions;
Description: Корзина;
Keywords: корзина шерсть купить;
<div id="cart-page" class="content-wrapper-full-width js-cart-page">
	<div class="content-title-2">
		<h2 clangid="cart_title"></h2>
	</div>
	<div class="cart-content flex nowrap">
		<div class="cart-column-left"></div>
		<div class="cart-column-right">
			<div class="payment-content">
				<div class="payment-details flex wrap">
					<div class="payment-details-item flex nowrap">
						<p clangid="cart_sum"></p>
						<p class="payment-sum js-payment-sum"></p>
					</div>
					<div class="payment-details-item flex nowrap">
						<p clangid="cart_vat"></p>
						<p class="payment-vat js-payment-vat"></p>
					</div>
					<div class="payment-details-item flex nowrap">
						<p clangid="cart_final_sum"></p>
						<p class="payment-final-sum js-payment-final-sum"></p>
					</div>
				</div>
				<div class="payment-order flex wrap">
					<a navid="order" style="width:100%;">
						<button class="js-payment-pay" clangid="cart_submit_order"></button>
					</a>
					<a navid="catalogue" style="width:100%;">
						<button class="js-payment-back" clangid="cart_back"></button>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="order-page" class="js-order-page">
	<div class="content-wrapper-full-width">
		<div class="title">
			<h2 clangid="order_title"></h2>
		</div>
		<div class="order-wrapper">
			<div id="trigger"></div>
			<div class="left-column js-left-column">
				<div class="in-order-wrapper">
					<div class="title">
						<h2 clangid="order_items"></h2>
					</div>
					<input type="hidden" autocomplete="off" userdata="cart"/>
					<div class="product-card-wrapper js-order-item-list"></div>
				</div>
				<div class="buyer-wrapper">
					<div class="buyer-content">
						<div class="title">
							<h2 clangid="order_buyer"></h2>
						</div>
						<form class="buyer-personal">
							<div class="name">
								<label>
									<span>*</span><span clangid="order_name"></span>
									<input type="text" name="name" userdata="full_name" required/>
								</label>
							</div>
							<div class="email">
								<label>
									<span>*</span><span clangid="order_email"></span>
									<input type="email" name="email" userdata="email" required/>
								</label>
							</div>
							<div class="phone">
								<label>
									<span>*</span><span clangid="order_phone"></span>
									<input type="tel" name="phone" userdata="phone_number" required/>
								</label>
							</div>
						</form>
					</div>
				</div>
				<div class="adress-wrapper">
					<div class="adress-content">
						<div class="title">
							<h2 clangid="order_region"></h2>
						</div>
						<input type="hidden" autocomplete="off" userdata="address"/>
						<input type="hidden" autocomplete="off" userdata="postal_code"/>
						<form class="adress-form">
							<div class="geopos">
								<label>
									<span class="required">*</span><span clangid="order_address"></span>
									<input type="text" name="address"/>
								</label>
							</div>
							<div class="index">
								<label>
									<span>*</span><span clangid="order_postal_code"></span>
									<input type="text" name="postal_code"/>
								</label>
							</div>
						</form>
					</div>
				</div>
				<div class="delivery-wrapper">
					<div class="delivery-content">
						<div class="title">
							<h2 clangid="order_delivery"></h2>
						</div>
						<input type="hidden" autocomplete="off" userdata="delivery_type"/>
						<div class="delivery-btn-wrapper">
							<button class="deliver-btn js-delivery-type-btn" delivery-type="pickup">
								<div>
									<div class="delivery-ind">
										<img src="/public/images/icons/hand-bag.png" alt="" width="100%"/>
									</div>
									<input type="checkbox" name="" id="">
								</div>
								<div class="delivery-type-name">
									<p clangid="order_pickup"></p>
								</div>
							</button>
							<button class="deliver-btn js-delivery-type-btn" delivery-type="courier">
								<div>
									<div class="delivery-ind">
										<img src="/public/images/icons/map.png" alt="" width="100%"/>
									</div>
									<input type="checkbox" name="" id="">
								</div>
								<div class="delivery-type-name">
									<p clangid="order_courier"></p>
								</div>
							</button>
							<button class="deliver-btn js-delivery-type-btn" delivery-type="ems">
								<div>
									<div class="delivery-ind">
										<img src="/public/images/icons/truck.png" alt="" width="100%"/>
									</div>
									<input type="checkbox" name="" id="">
								</div>
								<div class="delivery-type-name">
									<p clangid="order_ems"></p>
								</div>
							</button>
						</div>
						<div class="delivery-description">
							<div class="delivery-description-wrapper js-delivery-type-description" delivery-type="pickup" hidden>
								<div class="delivery-description-title">
									<h2 clangid="order_pickup"></h2>
								</div>
								<p clangid="order_pickup_description"></p>
								<div class="delivery-price">
									<h2 clangid="order_delivery_price"></h2>
									<p class="js-delivery-price"></p>
								</div>
							</div>
							<div class="delivery-description-wrapper js-delivery-type-description" delivery-type="courier" hidden>
								<div class="delivery-description-title">
									<h2 clangid="order_courier"></h2>
								</div>
								<p clangid="order_courier_description"></p>
								<!-- <input type="text" id="delivery-adress" placeholder="Введите адрес доставки"> -->
								<div class="delivery-price">
									<h2 clangid="order_delivery_price"></h2>
									<p class="js-delivery-price"></p>
								</div>
							</div>
							<div class="delivery-description-wrapper js-delivery-type-description" delivery-type="ems" hidden>
								<div class="delivery-description-title">
									<h2 clangid="order_ems"></h2>
								</div>
								<p clangid="order_ems_description"></p>
								<div class="delivery-price">
									<h2 clangid="order_delivery_price"></h2>
									<p class="js-delivery-price"></p>
								</div>
							</div>
							<!-- <form action="" class="delivery-form"> -->
								<!-- <label for="delivery-text"><span>*</span><span>Адрес доставки</span></label> -->
								<!-- <textarea name="" id="delivery-text" cols="30" rows="10" required></textarea> -->
							<!-- </form> -->
						</div>
					</div>
				</div>
				<div class="payment-wrapper">
					<div class="payment-content">
						<div class="title">
							<h2 clangid="order_payment"></h2>
						</div>
						<input type="hidden" autocomplete="off" userdata="payment_type"/>
						<div class="payment-btn-wrapper">
							<button class="payment-btn js-payment-type-btn" payment-type="card">
								<div>
									<div class="payment-ind">
										<img src="/public/images/icons/bank-card.png" alt="" width="100%"/>
									</div>
									<input type="checkbox"/>
								</div>
								<div class="payment-type-name">
									<p clangid="order_payment_card"></p>
								</div>
							</button>
							<button class="payment-btn js-payment-type-btn" payment-type="cash">
								<div>
									<div class="payment-ind">
										<img src="/public/images/icons/bill.png" alt="" width="100%"/>
									</div>
									<input type="checkbox"/>
								</div>
								<div class="payment-type-name">
									<p clangid="order_payment_cash"></p>
								</div>
							</button>
						</div>
						<div class="payment-description">
							<div class="payment-description-wrapper js-payment-type-description" payment-type="card" hidden>
								<div class="payment-description-title">
									<h2 clangid="order_payment_card"></h2>
								</div>
								<p clangid="order_payment_card_description"></p>
							</div>
							<div class="payment-description-wrapper js-payment-type-description" payment-type="cash" hidden>
								<div class="payment-description-title">
									<h2 clangid="order_payment_cash"></h2>
								</div>
								<p clangid="order_payment_cash_description"></p>
							</div>
						</div>
					</div>
				</div>
				<div class="end-of-order-wrapper js-end-of-order-wrapper">
					<div class="comment-order">
						<div class="comment-description">
							<div class="title">
								<h2 clangid="order_comment"></h2>
							</div>
							<p clangid="order_comment_description"></p>
						</div>
						<textarea cols="30" rows="10" name="comment" userdata="comment" clangattrid="order_comment_textarea"></textarea>
					</div>
					<div class="order-agreement">
						<form action="">
							<input type="checkbox" id="agreed" class="custom-checkbox js-agreement-checkbox">
							<label for="agreed">
								<div>
									<p clangid="order_age_agree"></p>
									<p clangid="order_checkout"></p>
								</div>
							</label>
						</form>
					</div>
					<div class="order-btn-cont js-submit-order-btn-wrapper">
						<button class="js-submit-order-btn">
							<span class="btn-ind"><img src="/public/images/icons/right-arrow.png" alt="" width="100%"/></span>
							<span class="btn-text" clangid="order_submit_button"></span>
						</button>
					</div>
				</div>
			</div>
			<div class="right-column js-right-column">
				<div class="all-price-wrapper" id="slickPrice">
					<div class="title">
						<h2 clangid="order_your_order"></h2>
					</div>
					<div class="all-products">
						<div class="all-price-row">
							<p clangid="order_sum"></p>
							<p class="js-order-raw-price"></p>
						</div>
					</div>
					<div class="all-price-delivery">
						<div class="all-price-row">
							<p clangid="order_delivery_sum"></p>
							<p class="js-order-delivery-price"></p>
						</div>
					</div>
					<div class="full-price-wrapper">
						<div class="all-price-row">
							<p clangid="order_final_sum"></p>
							<p class="js-order-final-price"></p>
						</div>
						<!-- <button>Оформить заказ</button> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</div>