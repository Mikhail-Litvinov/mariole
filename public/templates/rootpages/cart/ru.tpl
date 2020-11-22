Styles: cart, order, suggestions;
Scripts: unique/cart, common/suggestions;
Title: Корзина;
<div id="cart-page" class="content-wrapper-full-width js-cart-page">
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
					<a navid="order" style="width:100%;"><button class="js-payment-pay">Оформить</button></a>
					<a navid="catalogue" style="width:100%;"><button class="js-payment-back">Назад в магазин</button></a>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="order-page" class="js-order-page">
	<div class="content-wrapper-full-width">
		<div class="title">
			<h2>Оформление заказа</h2>
		</div>
		<div class="order-wrapper">
			<div id="trigger"></div>
			<div class="left-column js-left-column">
				<div class="in-order-wrapper">
					<div class="title">
						<h2>Товары в заказе</h2>
					</div>
					<input type="hidden" autocomplete="off" userdata="cart"/>
					<div class="product-card-wrapper js-order-item-list"></div>
				</div>
				<div class="buyer-wrapper">
					<div class="buyer-content">
						<div class="title">
							<h2>1. Покупатель</h2>
						</div>
						<form class="buyer-personal">
							<div class="name">
								<label>
									<span>*</span><span>Ф.И.О.</span>
									<input type="text" name="name" userdata="full_name" required/>
								</label>
							</div>
							<div class="email">
								<label>
									<span>*</span><span>E-mail</span>
									<input type="email" name="email" userdata="email" required/>
								</label>
							</div>
							<div class="phone">
								<label>
									<span>*</span><span>Телефон</span>
									<input type="tel" name="phone" userdata="phone_number" required/>
								</label>
							</div>
						</form>
					</div>
				</div>
				<div class="adress-wrapper">
					<div class="adress-content">
						<div class="title">
							<h2>2. Регион доставки</h2>
						</div>
						<input type="hidden" autocomplete="off" userdata="address"/>
						<input type="hidden" autocomplete="off" userdata="postal_code"/>
						<form class="adress-form">
							<div class="geopos">
								<label>
									<span class="required">*</span><span>Местоположение</span>
									<input type="text" name="address"/>
								</label>
							</div>
							<div class="index">
								<label>
									<span>*</span><span>Индекс</span>
									<input type="text" name="postal_code"/>
								</label>
							</div>
						</form>
					</div>
				</div>
				<div class="delivery-wrapper">
					<div class="delivery-content">
						<div class="title">
							<h2>3. Доставка</h2>
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
									<p>Самовывоз</p>
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
									<p>Доставка курьером</p>
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
									<p>Почта России (EMS)</p>
								</div>
							</button>
						</div>
						<div class="delivery-description">
							<div class="delivery-description-wrapper js-delivery-type-description" delivery-type="pickup" hidden>
								<div class="delivery-description-title">
									<h2>Самовывоз</h2>
								</div>
								<p>Вы сами можете забрать заказа по адресу: <br/>
									здесь будет адрес
								</p>
								<div class="delivery-price">
									<h2>Стоимость:</h2>
									<p class="js-delivery-price"></p>
								</div>
							</div>
							<div class="delivery-description-wrapper js-delivery-type-description" delivery-type="courier" hidden>
								<div class="delivery-description-title">
									<h2>Доставка курьером</h2>
								</div>
								<p>Доставка по Москве. <br/>
									Осуществляется в течение дня, в удобное для вас время с 11:00 до 20:00
								</p>
								<!-- <input type="text" id="delivery-adress" placeholder="Введите адрес доставки"> -->
								<div class="delivery-price">
									<h2>Стоимость:</h2>
									<p class="js-delivery-price"></p>
								</div>
							</div>
							<div class="delivery-description-wrapper js-delivery-type-description" delivery-type="ems" hidden>
								<div class="delivery-description-title">
									<h2>Почта России (EMS)</h2>
								</div>
								<p>Посылкой можно отправить вещи по России. У каждой посылки есть трек-номер для
									отслеживания. <br/>
									С его помощью вы всегда можете узнать местонахождение и статус посылки
								</p>
								<div class="delivery-price">
									<h2>Стоимость:</h2>
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
							<h2>4. Оплата</h2>
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
									<p>Оплата картой</p>
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
									<p>Оплата наличными</p>
								</div>
							</button>
						</div>
						<div class="payment-description">
							<div class="payment-description-wrapper js-payment-type-description" payment-type="card" hidden>
								<div class="payment-description-title">
									<h2>Оплата картой</h2>
								</div>
								<p>Оплата производится банковской картой через сервис Yandex.Касса<br/>
									Подтверждением вашей оплаты является электронное почтовое уведомление, пришедшее после
									оплаты.
								</p>
							</div>
							<div class="payment-description-wrapper js-payment-type-description" payment-type="cash" hidden>
								<div class="payment-description-title">
									<h2>Оплата наличными</h2>
								</div>
								<p>Оплата производится наличными курьеру.<br/>
									Подтверждением является фискальный чек и накладная.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="end-of-order-wrapper js-end-of-order-wrapper">
					<div class="comment-order">
						<div class="comment-description">
							<div class="title">
								<h2>Комментарий к заказу</h2>
							</div>
							<p>Вы можете указать дополнительную
								информацию к заказу:</p>
						</div>
						<textarea cols="30" rows="10" name="comment" userdata="comment" placeholder="Комментарий к заказу"></textarea>
					</div>
					<div class="order-agreement">
						<form action="">
							<input type="checkbox" id="agreed" class="custom-checkbox js-agreement-checkbox">
							<label for="agreed">
								<div>
									<p>Я подтверждаю, что я старше 18 лет и принимаю условия работы сайта и даю добровольное
										согласие на обработку своих персональных данных.</p>
									<p>В соответствии с ФЗ №54-ФЗ кассовый чек при заказе с доставкой будет предоставлен в
										электронном виде на указанный при оформлении заказа номер телефона или адрес электронной
										почты.</p>
								</div>
							</label>
						</form>
					</div>
					<div class="order-btn-cont js-submit-order-btn-wrapper">
						<button class="js-submit-order-btn">
							<span class="btn-ind"><img src="/public/images/icons/right-arrow.png" alt="" width="100%"/></span>
							<span class="btn-text">Оформить заказ</span>
						</button>
					</div>
				</div>
			</div>
			<div class="right-column js-right-column">
				<div class="all-price-wrapper" id="slickPrice">
					<div class="title">
						<h2>Ваш заказ</h2>
					</div>
					<div class="all-products">
						<div class="all-price-row">
							<p>Товаров на</p>
							<p class="js-order-raw-price"></p>
						</div>
					</div>
					<div class="all-price-delivery">
						<div class="all-price-row">
							<p>Доставка</p>
							<p class="js-order-delivery-price">бесплатно</p>
						</div>
					</div>
					<div class="full-price-wrapper">
						<div class="all-price-row">
							<p>Итого</p>
							<p class="js-order-final-price"></p>
						</div>
						<!-- <button>Оформить заказ</button> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</div>