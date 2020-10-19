$(window).on("onload.init_cart", () => {
	app.cart = {
		list: [],
		updateList(newList, callback) {
			if(!app.templates.cart) {
				$.when(
					$.get("/tpl/pages/cart_item.tpl")
				).then((item) => {
					app.templates.cart = {
						_item: item,
						getItem(article, img, quantity) {
							return this._item
								.replace(/\${article}/gi, article)
								.replace("${img}", img)
								.replace("${quantity}", quantity);
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
				app.cookies.cart.updateItems(cookiesCart.set(article, newQuantity));
				$(`.product-card[article="${article}"] .quantity`).html(newQuantity);
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
				let item = $(app.templates.cart.getItem(
					article,
					product.images[0],
					cookieCart.get(article)
				));
				item.find(".decrease-quantity").click(() => { this.changeProductQuantity(article, -1); });
				item.find(".increase-quantity").click(() => { this.changeProductQuantity(article, 1); });
				item.find(".product-card-del > button").click(() => { this.deleteProduct(article); });

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
			
			$(".payment-sum").html(this.formatPrice(sum));
			$(".payment-vat").html(this.formatPrice(vat));
			$(".payment-final-sum").html(this.formatPrice(finalSum));
		},
		formatPrice(rawPrice) { return `${(rawPrice / 100).toFixed(2)}&nbsp;${app.translation.currency.sign}`; }
	};
	
	app.cart.updateList(undefined, () => {
		app.cart.buildList();
		app.cart.calculateFinalSum();
	});
	
	$(window).on({
		"oncountrychange.content": () => {
			let currencyName = app.translation.currency.name
			for(product of app.cart.list) {
				$(`.product-card[article="${product.data.article}"]`)
					.find(".product-card-price > p")
					.html(app.cart.formatPrice(product.prices[currencyName]));
			}
			app.cart.calculateFinalSum();
		},
		"onlanguagechange.content": () => {
			app.cart.updateList(undefined, () => {
				for(product of app.cart.list) {
					$(`.product-card[article="${product.data.article}"]`)
							.find(".product-card-title > a")
							.html(product.language.name);
				}
			});
		},
		"onresize.content": () => { /* something */ },
		"onunload.content": () => { app.cart = undefined; }
	});
});