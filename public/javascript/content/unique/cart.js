$(window).on("onload.init_unique/cart", () => {
	app.cart = {
		orderSubmitBtn: undefined,
		SMScene: undefined,
		list: [],
		crawler: {
			crawl() {
				let data = {};
				for(let element of document.querySelectorAll("[userdata]")) {
					data[element.getAttribute("userdata")] = element.value;
				}
				return data;
			}
		},
		updateList(newList, callback) {
			if(!app.templates.cart) {
				$.when(
					$.getJSON("/public/templates/subtemplates/cart/localization.json"),
					$.get("/public/templates/subtemplates/cart/item.tpl"),
					$.get("/public/templates/subtemplates/cart/order_item.tpl"),
					$.getJSON("/public/templates/subtemplates/cart/delivery.json")
				).then((localization, item, orderItem, delivery) => {
					app.templates.cart = {
						_localization: localization[0],
						getLocalization(id) {
							return this._localization[app.translation.language.code][id];
						},
						_item: item[0],
						createItem(article, img, quantity) {
							return this._item
								.replace(/\${article}/gi, article)
								.replace("${img}", img)
								.replace("${quantity}", quantity)
								.replace("${delete_text}", this.getLocalization("delete_text"));
						},
						_orderItem: orderItem[0],
						createOrderItem(article, name, image, price, quantity, fullPrice, params) {
							return this._orderItem
								.replace("${article}", article)
								.replace("${name}", name)
								.replace("${image}", image)
								.replace("${price}", price)
								.replace("${quantity}", quantity)
								.replace("${full_price}", fullPrice)
								.replace("${params}", params);
						},
						_delivery: delivery[0],
						getDeliveryData(addressData) {
							let data = [];
							for(let entryName in this._delivery) {
								let entry = this._delivery[entryName];
								let city = addressData.city.toLowerCase();
								let region = addressData.region.toLowerCase();
								if(
									!(entry.deny.cities.includes(city) || entry.deny.regions.includes(region))
									&& (entry.allow.cities[0] == "*" || entry.allow.regions[0] == "*"
									|| entry.allow.cities.includes(city)
									|| entry.allow.regions.includes(region))
								) {
									data.push({
										"type": entryName,
										"costs": entry.costs,
										"payments": entry.payment
									});
								}
							}
							return data;
						}
					};
					for(let element of document.querySelectorAll(".js-delivery-type-description")) {
						let prices = app.templates.cart._delivery[element.getAttribute("delivery-type")].costs;
						let price = this.formatPrice(prices[app.translation.currency.name]);
						element.querySelector(".js-delivery-price").innerHTML = price;
					}
					this.updateList(newList, callback);
				});
				return;
			} else if(!newList) {
				let cartItems = Array.from(app.cookies.cart.getItems().keys()).join("-");
				let link = `/data/database/product_query/${app.translation.language.code}/cart/${cartItems}`;
				$.getJSON(link, (data) => { this.updateList(data, callback); });
				return;
			}
			
			this.list = newList;
			callback();
		},
		changeProductQuantity(article, delta) {
			let cookiesCart = app.cookies.cart.getItems();
			let newQuantity = cookiesCart.get(article) + delta;
			if(newQuantity > 0) {
				app.cookies.cart.changeItem(article, newQuantity);
				$(`.product-card[article="${article}"] .js-product-quantity`).html(newQuantity);
				this.calculateFinalSum();
			} else this.deleteProduct(article);
		},
		deleteProduct(article) {
			app.cookies.cart.removeItem(article);
			$(`.product-card[article="${article}"]`).remove();
			this.list = this.list.filter((product) => product.data.article != article);
			this.calculateFinalSum();
			app.menu.updateCartItemsCount(this.list.length);
		},
		buildList() {
			let newCartList = $("<div>");
			let cookieCart = app.cookies.cart.getItems();
			for(product of this.list) {
				let article = product.data.article;
				let item = $(app.templates.cart.createItem(
					article,
					product.images[0],
					cookieCart.get(article)
				));
				item.find(".js-product-decrease-quantity:first").click(() => { this.changeProductQuantity(article, -1); });
				item.find(".js-product-increase-quantity:first").click(() => { this.changeProductQuantity(article, 1); });
				item.find(".js-product-delete:first").click(() => { this.deleteProduct(article); });

				newCartList.append(item);
			};
			newCartList.children().detach().appendTo($(".cart-column-left").html(""));
			app.navigation.wrapPageLinks(".product-card-title a[navid]");
			$(window).trigger("oncountrychange.content").trigger("onlanguagechange.content");
		},
		calculateFinalSum() {
			let cookiesCart = app.cookies.cart.getItems();
			
			let currencyName = app.translation.currency.name;
			let sum = this.list.reduce((sum, product) => sum + product.prices[currencyName] * (cookiesCart.get(product.data.article) ?? 0), 0);
			let vat = 0; // TODO: later
			let finalSum = sum + vat;
			
			$(".js-payment-sum").html(this.formatPrice(sum));
			$(".js-payment-vat").html(this.formatPrice(vat));
			$(".js-payment-final-sum").html(this.formatPrice(finalSum));
			return {
				sum: sum,
				vat: vat,
				finalSum: finalSum
			};
		},
		formatPrice(rawPrice) { return `${(rawPrice / 100).toFixed(2)}&nbsp;${app.translation.currency.sign}`; },
		buildOrderList() {
			let newOrderList = "";
			let cookieCart = app.cookies.cart.getItems();
			
			document.querySelector("[userdata=\"cart\"]").value = JSON.stringify(Array.from(cookieCart));
			
			for(let product of this.list) {
				let params = "";
				for(let param of product.params) {
					params += `<div class="product-${param.id}"><p>${param.name}:</p><p>${param.value}&nbsp;${param.unit ?? ""}</p></div>`;
				}
				
				let article = product.data.article;
				let price = product.prices[app.translation.currency.name];
				let quantity = cookieCart.get(article);
				let item = app.templates.cart.createOrderItem(
					article,
					product.language.name,
					product.images[0],
					this.formatPrice(price),
					quantity,
					this.formatPrice(price * quantity),
					params
				);
				newOrderList += item;
			}
			$(".js-order-item-list").html(newOrderList);
			app.navigation.wrapPageLinks(".js-order-item-name > a[navid]");
			
			this.calculateFinalOrderSum(this.calculateFinalSum());
		},
		calculateFinalOrderSum(prices) {
			let price = prices.finalSum;
			let delivery = prices.deliverySum ?? 0;
			let finalPrice = price + delivery;
			
			$(".js-order-raw-price").html(this.formatPrice(price));
			$(".js-order-delivery-price").html(this.formatPrice(delivery));
			$(".js-order-final-price").html(this.formatPrice(finalPrice));
		},
		bindAutocompletes() {
			// let delayedFetch = (type, field, callback) => {
				// clearTimeout(field.timer);
				// field.timer = setTimeout(() => {
					// fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/" + type, {
						// method: "POST",
						// mode: "cors",
						// headers: {
							// "Content-Type": "application/json",
							// "Accept": "application/json",
							// "Authorization": "Token 7c5272e224601f8a36fd147a354c266eb2494cd9"
						// },
						// body: JSON.stringify({ query: field.value })
					// }).then(response => response.text()).then(result => callback(result)).catch(error => console.log("error", error));
				// }, 500);
			// };
			// $("[userdata=\"email\"]").on("input", (evt) => {
				// let field = evt.currentTarget;
				// if(field.value.length > 3) {
					// delayedFetch("email", field, (result) => {
						// console.log(JSON.parse(result).suggestions.map(entry => entry.value));
					// });
				// }
			// });
			// $("[userdata=\"full_name\"]").on("input", (evt) => {
				// let field = evt.currentTarget;
				// if(field.value.length > 3) {
					// delayedFetch("fio", field, (result) => {
						// console.log(JSON.parse(result).suggestions.map(entry => entry.value));
					// })
				// }
			// });
			// $("[userdata=\"address\"]").on("input", (evt) => {
				// let field = evt.currentTarget;
				// if(field.value.length > 3) {
					// delayedFetch("address", field, (result) => {
						// console.log(JSON.parse(result).suggestions);
					// })
				// }
			// });
			$("input[name=\"address\"]").suggestions({
				token: "7c5272e224601f8a36fd147a354c266eb2494cd9",
				type: "ADDRESS",
				onSelect: (suggestion) => {
					console.log(suggestion);
					
					let fullAddress = `${suggestion.data.country}, ${suggestion.data.region_with_type}, ${suggestion.value}`;
					document.querySelector("[userdata=\"address\"]").value = fullAddress;
					document.querySelector("[userdata=\"postal_code\"]").value = suggestion.data.postal_code;
					document.querySelector("[name=\"postal_code\"]").value = suggestion.data.postal_code;
					
					let delivery = app.templates.cart.getDeliveryData(suggestion.data);
					
					$("[delivery-type]").hide().filter(".js-delivery-type-btn").removeClass("selected");
					for(let entry of delivery) {
						$(`.js-delivery-type-btn[delivery-type="${entry.type}"]`).show();
					}
				}
			});
		},
		toggleOrderSubmitBtn() {
			if(document.querySelector(".js-agreement-checkbox").checked == true) {
				$(".js-end-of-order-wrapper").append(this.orderSubmitBtn);
			} else {
				this.orderSubmitBtn = $(".js-submit-order-btn-wrapper").detach();
			}
		}
	};
	
	app.cart.updateList(undefined, () => {
		app.cart.buildList();
		app.cart.calculateFinalSum();
		for(product of app.cart.list) {
			$(`.product-card[article="${product.data.article}"]`)
					.find(".js-product-title:first")
					.html(product.language.name);
		}
		
		if(app.navigation.path[1] === "order") {
			$(".js-cart-page").hide();
			$(".js-order-page").show();
			app.cart.buildOrderList();
		} else {
			$(".js-cart-page").show();
			$(".js-order-page").hide();
		}
	});
	
	$(".js-submit-order-btn").click(() => {
		console.log(app.cart.crawler.crawl());
		alert("Перенаправление на страницу оплаты...");
	});
	
	app.cart.bindAutocompletes();
	app.cart.toggleOrderSubmitBtn();
	
	$(".js-agreement-checkbox").click(() => { app.cart.toggleOrderSubmitBtn(); });
	$(".js-delivery-type-btn").click((evt) => {
		let deliveryType = evt.currentTarget.getAttribute("delivery-type");
		
		document.querySelector("[userdata=\"delivery_type\"]").value = deliveryType;
		
		$(".js-delivery-type-btn").removeClass("selected").filter(evt.currentTarget).addClass("selected");
		$(".js-delivery-type-description").hide().filter(`[delivery-type="${deliveryType}"]`).show();
		
		$(".js-payment-type-btn").removeClass("selected");
		let paymentMethods = app.templates.cart._delivery[deliveryType].payment;
		for(let element of $(".js-payment-type-btn")) {
			if(paymentMethods.includes(element.getAttribute("payment-type"))) $(element).show();
			else $(element).hide();
		}
		$(".js-payment-type-description").hide();
		
		let deliveryPrice = app.templates.cart._delivery[deliveryType].costs[app.translation.currency.name];
		app.cart.calculateFinalOrderSum({ deliverySum: deliveryPrice, ...app.cart.calculateFinalSum() });
	});
	$(".js-payment-type-btn").click((evt) => {
		let paymentType = evt.currentTarget.getAttribute("payment-type");
		
		document.querySelector("[userdata=\"payment_type\"]").value = paymentType;
		
		$(".js-payment-type-btn").removeClass("selected").filter(evt.currentTarget).addClass("selected");
		$(".js-payment-type-description").hide().filter(`[payment-type="${paymentType}"]`).show();
	});
	
	app.cart.SMScene = app.scrollmagic.fix("#trigger", "#slickPrice");
	
	$(window).on({
		"oncountrychange.content": () => {
			let currencyName = app.translation.currency.name
			for(product of app.cart.list) {
				$(`.product-card[article="${product.data.article}"]`)
					.find(".js-product-price:first")
					.html(app.cart.formatPrice(product.prices[currencyName]));
			}
			app.cart.calculateFinalSum();
		},
		// "onlanguagechange.content": () => {
			// app.cart.updateList(undefined, () => {
				// for(product of app.cart.list) {
					// $(`.product-card[article="${product.data.article}"]`)
							// .find(".product-card-title > a")
							// .html(product.language.name);
				// }
			// });
		// },
		"onresize.content": () => {
			if(app.main.isMobile || app.main.isLowWidth) {
				$(".js-right-column").detach().insertBefore(".js-left-column");
				app.cart.SMScene.enabled(false);
			} else {
				$(".js-right-column").detach().insertAfter(".js-left-column");
				app.cart.SMScene.enabled(true);
			}
		},
		"onunload.content": () => { app.cart = undefined; }
	});
});