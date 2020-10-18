$(window).on("onload.init_cart", () => {
	app.cart = {
		list: [],
		updateList(newList, callback) {
			if(!app.templates.cartItem) {
				$.get("/tpl/pages/cart_item.tpl", (data) => {
					app.templates.cartItem = data;
					this.updateList(newList, callback);
				});
				return;
			} else if(!newList) {
				let cartItems = Array.from(app.cookies.cart.getItems().keys()).join("-");
				let link = `/data/database/product_query/${app.translation.language.code}/cart/${cartItems}`; // TODO
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
			this.list.forEach((product) => {
				let article = product.data.article;
				let item = $(app.templates.cartItem).attr("article", article);
				item.find(".product-card-title > a").attr("navid", `product-page/${article}`);
				item.find(".product-card-photo > img").attr("src", `/img/products-images/${product.images[0]}.jpg`);
				item.find(".quantity").html(cookieCart.get(article));
				item.find(".decrease-quantity").click(() => { this.changeProductQuantity(article, -1); });
				item.find(".increase-quantity").click(() => { this.changeProductQuantity(article, 1); });
				item.find(".product-card-del > button").click(() => { this.deleteProduct(article); });
				newCartList.append(item);
			});
			newCartList.children().detach().appendTo($(".cart-column-left").html(""));
			app.navigation.wrapPageLinks(".product-card-title a[navid]");
			$(window).trigger("oncountrychange.content").trigger("onlanguagechange.content");
		},
		calculateFinalSum() {
			let cookiesCart = app.cookies.cart.getItems();
			let sum = 0;
			this.list.forEach((product) => { sum += product.prices[app.translation.currency.name] * (cookiesCart.get(product.data.article) ?? 0); });
			let vat = 0; // TODO: later
			let finalSum = sum + vat;
			
			$(".payment-sum").html(`${(sum / 100).toFixed(2)} ${app.translation.currency.sign}`);
			$(".payment-vat").html(`${(vat / 100).toFixed(2)} ${app.translation.currency.sign}`);
			$(".payment-final-sum").html(`${(finalSum / 100).toFixed(2)} ${app.translation.currency.sign}`);
		}
	};
	
	app.cart.updateList(undefined, () => {
		app.cart.buildList();
		app.cart.calculateFinalSum();
	});
	
	$(window).on({
		"oncountrychange.content": () => {
			app.cart.list.forEach((product) => {
				$(`.product-card[article="${product.data.article}"]`)
					.find(".product-card-price > p")
					.html((product.prices[app.translation.currency.name] / 100).toFixed(2) + ` ${app.translation.currency.sign}`);
			});
			app.cart.calculateFinalSum();
		},
		"onlanguagechange.content": () => {
			app.cart.updateList(undefined, () => {
				app.cart.list.forEach((product) => {
					$(`.product-card[article="${product.data.article}"]`)
							.find(".product-card-title > a")
							.html(product.language.name);
				});
			});
		},
		"onresize.content": () => { /* something */ },
		"onunload.content": () => { app.cart = undefined; }
	});
});