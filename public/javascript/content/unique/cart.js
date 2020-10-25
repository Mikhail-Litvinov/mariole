$(window).on("onload.init_unique/cart", () => {
	app.cart = {
		list: [],
		updateList(newList, callback) {
			if(!app.templates.cart) {
				$.when(
					$.getJSON("/public/templates/subtemplates/cart/localization.json"),
					$.get("/public/templates/subtemplates/cart/item.tpl")
				).then((localization, item) => {
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
		},
		formatPrice(rawPrice) { return `${(rawPrice / 100).toFixed(2)}&nbsp;${app.translation.currency.sign}`; }
	};
	
	app.cart.updateList(undefined, () => {
		app.cart.buildList();
		app.cart.calculateFinalSum();
		for(product of app.cart.list) {
			$(`.product-card[article="${product.data.article}"]`)
					.find(".js-product-title:first")
					.html(product.language.name);
		}
	});
	
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