Styles: order;
Scripts: unique/order;
Title: Заказ;
<div class="content-wrapper-full-width">
	<div class="title">
		<h2>Оформление заказа</h2>
	</div>
	<div class="order-wrapper">
		<div id="trigger">
		</div>
		<div class="left-column">
			<div class="in-order-wrapper">
				<div class="title">
					<h2>Товары в заказе</h2>
				</div>
				<div class="product-card-wrapper">
					<div class="product-card">
						<div class="in-order-img">
							<img src="/public/images/products-images/2ef76f8c529568658473f503cb512d101da14415.jpg"
								alt="" width="100%">
						</div>
						<div class="in-order-content">
							<div class="flex-column">
								<div class="product-name">
									<a>
										<h2>Название продукта</h2>
									</a>
								</div>
								<div class="product-price">
									<p>12 000</p>
								</div>
							</div>
							<div class="flex-column">
								<div class="product-color">
									<p>Цвет:</p>
									<p>белый</p>
								</div>
								<div class="product-size">
									<p>Размер:</p>
									<p>26/28</p>
								</div>
							</div>
							<div class="flex-column in-order-quantity">
								<p>1шт</p>
							</div>
							<div class="flex-column in-order-price">
								<p>12 000</p>
							</div>
						</div>
					</div>
					<div class="product-card">
						<div class="in-order-img">
							<img src="/public/images/products-images/2ef76f8c529568658473f503cb512d101da14415.jpg"
								alt="" width="100%">
						</div>
						<div class="in-order-content">
							<div class="flex-column">
								<div class="product-name">
									<a>
										<h2>Название продукта</h2>
									</a>
								</div>
								<div class="product-price">
									<p>12 000</p>
								</div>
							</div>
							<div class="flex-column">
								<div class="product-color">
									<p>Цвет:</p>
									<p>белый</p>
								</div>
								<div class="product-size">
									<p>Размер:</p>
									<p>26/28</p>
								</div>
							</div>
							<div class="flex-column in-order-quantity">
								<p>1шт</p>
							</div>
							<div class="flex-column in-order-price">
								<p>12 000</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="buyer-wrapper">
				<div class="buyer-content">
					<div class="title">
						<h2>1. Покупатель</h2>
					</div>
					<form class="buyer-personal">
						<div class="name">
							<label for="buyer-name"><span>*</span><span>Ф.И.О.</span></label>
							<input type="name" id="buyer-name" required>
						</div>
						<div class="email">
							<label for="buyer-email"><span>*</span><span>Email</span></label>
							<input type="email" id="buyer-email" required>
						</div>
						<div class="phone">
							<label for="buyer-phone"><span>*</span><span>Телефон</span></label>
							<input type="number" id="buyer-phone" pattern="\+?[0-9\s\-\(\)]+" required>
						</div>
					</form>
				</div>
			</div>
			<div class="adress-wrapper">
				<div class="adress-content">
					<div class="title">
						<h2>2. Регион доставки</h2>
					</div>
					<form class="adress-form">
						<div class="geopos">
							<label for="position"><span>*</span><span>Местоположение</span></label>
							<input type="text" id="position">
						</div>
						<div class="index">
							<label for="index"><span>*</span><span>Индекс</span></label>
							<input type="text" id="index">
						</div>
					</form>
				</div>
			</div>
			<div class="delivery-wrapper">
				<div class="delivery-content">
					<div class="title">
						<h2>3. Доставка</h2>
					</div>
					<div class="delivery-btn-wrapper">
						<button class="deliver-btn selected">
							<div>
								<div class="delivery-ind">
									<img src="/public/images/icons/map.png" alt="" width="100%">
								</div>
								<input type="checkbox" name="" id="">
							</div>
							<div class="delivery-type-name">
								<p>Доставка курьером</p>
							</div>
						</button>
						<button class="deliver-btn">
							<div>
								<div class="delivery-ind">
									<img src="/public/images/icons/hand-bag.png" alt="" width="100%">
								</div>
								<input type="checkbox" name="" id="">
							</div>
							<div class="delivery-type-name">
								<p>Самовывоз</p>
							</div>
						</button>
						<button class="deliver-btn" hidden>
							<div>
								<div class="delivery-ind">
									<img src="/public/images/icons/truck.png" alt="" width="100%">
								</div>
								<input type="checkbox" name="" id="">
							</div>
							<div class="delivery-type-name">
								<p>Почта России (EMS)</p>
							</div>
						</button>
					</div>
					<div class="delivery-description">
						<div class="delivery-description-wrapper">
							<div class="delivery-description-title">
								<h2>Доставка курьером</h2>
							</div>
							<p>Доставка по Москве. <br>
								Осуществляется в течение дня, в удобное для вас время с 11:00 до 20:00
							</p>
						</div>
						<div class="delivery-description-wrapper" hidden>
							<div class="delivery-description-title">
								<h2>Самовывоз</h2>
							</div>
							<p>Вы сами можете забрать заказа по адресу: <br>
								здесь будет адрес
							</p>
						</div>
						<div class="delivery-description-wrapper" hidden>
							<div class="delivery-description-title">
								<h2>Почта России (EMS)</h2>
							</div>
							<p>Посылкой можно отправить вещи по России. У каждой посылки есть трек-номер для
								отслеживания. <br>
								С его помощью вы всегда можете узнать местонахождение и статус посылки
							</p>
						</div>
						<div class="delivery-price">
							<h2>Стоимость:</h2>
							<p>0 руб.</p>
						</div>
						<form action="" class="delivery-form">
							<label for="delivery-text"><span>*</span><span>Адрес доставки</span></label>
							<textarea name="" id="delivery-text" cols="30" rows="10" required></textarea>
						</form>
					</div>
				</div>
			</div>
			<div class="payment-wrapper">
				<div class="payment-content">
					<div class="title">
						<h2>4. Оплата</h2>
					</div>
					<div class="payment-btn-wrapper">
						<button class="payment-btn selected">
							<div>
								<div class="payment-ind">
									<img src="/public/images/icons/bank-card.png" alt="" width="100%">
								</div>
								<input type="checkbox" name="" id="">
							</div>
							<div class="payment-type-name">
								<p>Оплата картой</p>
							</div>
						</button>
						<button class="payment-btn">
							<div>
								<div class="payment-ind">
									<img src="/public/images/icons/bill.png" alt="" width="100%">
								</div>
								<input type="checkbox" name="" id="">
							</div>
							<div class="payment-type-name">
								<p>Оплата наличными</p>
							</div>
						</button>
					</div>
					<div class="payment-description">
						<div class="payment-description-wrapper">
							<div class="payment-description-title">
								<h2>Оплата картой</h2>
							</div>
							<p>Оплата производится банковской картой через сервис Yandex.Касса<br>
								Подтверждением вашей оплаты является электронное почтовое уведомление, пришедшее после
								оплаты.
							</p>
						</div>
						<div class="payment-description-wrapper" hidden>
							<div class="payment-description-title">
								<h2>Оплата наличными</h2>
							</div>
							<p>Оплата производится наличными курьеру.<br>
								Подтверждением является фискальный чек и накладная.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="end-of-order-wrapper">
				<div class="comment-order">
					<div class="comment-description">
						<div class="title">
							<h2>Комментарий к заказу</h2>
						</div>
						<p>Вы можете указать дополнительную
							информацию к заказу:</p>
					</div>
					<textarea name="" id="" cols="30" rows="10" placeholder="Комментарий к заказу"></textarea>
				</div>
				<div class="order-agreement">
					<form action="">
						<input type="checkbox" name="" id="" class="custom-checkbox">
						<span class="custom-checkbox">
							<span class="check-mark"><img src="/public/images/icons/check-mark.png" alt="" width="100%"></span>
						</span>
						<label for="">
							<p>Я подтверждаю, что я старше 18 лет и принимаю условия работы сайта и даю добровольное
								согласие на обработку своих персональных данных.</p>
							<p>В соответствии с ФЗ №54-ФЗ кассовый чек при заказе с доставкой будет предоставлен в
								электронном виде на указанный при оформлении заказа номер телефона или адрес электронной
								почты.</p>
						</label>
					</form>
				</div>
				<div class="order-btn-cont">
					<button><span class="btn-ind"><img src="/public/images/icons/right-arrow.png" alt="" width="100%"></span><span class="btn-text">Оформить заказ</span></button>
				</div>
			</div>
		</div>
		<div class="right-column">
			<div class="all-price-wrapper" id="slickPrice">
				<div class="title">
					<h2>Ваш заказ</h2>
				</div>
				<div class="all-products">
					<div class="all-price-row">
						<p>Товаров на</p>
						<p>24 000 руб.</p>
					</div>
				</div>
				<div class="all-price-delivery">
					<div class="all-price-row">
						<p>Доставка</p>
						<p>бесплатно</p>
					</div>
				</div>
				<div class="full-price-wrapper">
					<div class="all-price-row">
						<p>Итого</p>
						<p>24 000 руб.</p>
					</div>
					<button>Оформить заказ</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
	// init controller
	var controller = new ScrollMagic.Controller();
	$(function () { // wait for document ready
				// build scene
				var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
								.setPin("#slickPrice")
								.addTo(controller);
			});
</script>