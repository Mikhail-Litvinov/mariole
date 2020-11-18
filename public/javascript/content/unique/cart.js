$(window).on("onload.init_unique/cart", () => {
	app.cart = {
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
					$.get("/public/templates/subtemplates/cart/order_item.tpl")
				).then((localization, item, orderItem) => {
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
						}
					};
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
			let delivery = 0;
			let finalPrice = price + delivery;
			
			$(".js-order-raw-price").html(this.formatPrice(price));
			$(".js-order-delivery-price").html(this.formatPrice(delivery));
			$(".js-order-final-price").html(this.formatPrice(finalPrice));
		},
		bindAutocompletes() {
			let delayedFetch = (type, field, callback) => {
				clearTimeout(field.timer);
				field.timer = setTimeout(() => {
					fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/" + type, {
						method: "POST",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							"Accept": "application/json",
							"Authorization": "Token 7c5272e224601f8a36fd147a354c266eb2494cd9"
						},
						body: JSON.stringify({ query: field.value })
					}).then(response => response.text()).then(result => callback(result)).catch(error => console.log("error", error));
				}, 500);
			};
			$("[userdata=\"email\"]").on("input", (evt) => {
				let field = evt.currentTarget;
				if(field.value.length > 3) {
					delayedFetch("email", field, (result) => {
						console.log(JSON.parse(result).suggestions.map(entry => entry.value));
					});
				}
			});
			$("[userdata=\"full_name\"]").on("input", (evt) => {
				let field = evt.currentTarget;
				if(field.value.length > 3) {
					delayedFetch("fio", field, (result) => {
						console.log(JSON.parse(result).suggestions.map(entry => entry.value));
					})
				}
			});
			$("[userdata=\"address\"]").on("input", (evt) => {
				let field = evt.currentTarget;
				if(field.value.length > 3) {
					delayedFetch("address", field, (result) => {
						console.log(JSON.parse(result).suggestions);
					})
				}
			});
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
	
	app.cart.bindAutocompletes();
	
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
		"onresize.content": () => { /* something */ },
		"onunload.content": () => { app.cart = undefined; }
	});
});