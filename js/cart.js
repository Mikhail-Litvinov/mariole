cartItemTemplate = window["cartItemTemplate"];

function updateCartList(newList, handler) {
	if(!cartItemTemplate) {
		$.get("/tpl/pages/cart_item.tpl", (data) => {
			cartItemTemplate = data;
			updateCartList(newList, handler);
		});
		return;
	} else if(!newList) {
		let cartItems = Array.from(cookies.getItemsInCart().keys()).join("-");
		let link = `/data/database/product_query/${translator.language.code}/cart/${cartItems}`; // TODO
		$.getJSON(link, (data) => { updateCartList(data, handler); });
		return;
	}
	
	cartProductsList = newList;
	handler();
}

function changeProductQuantity(article, delta) {
	let cookiesCart = cookies.getItemsInCart();
	let newQuantity = cookiesCart.get(article) + delta;
	if(newQuantity > 0) {
		cookies.updateItemsInCart(cookiesCart.set(article, newQuantity));
		$(`.product-card[article="${article}"] .quantity`).html(newQuantity);
		calculateFinalSum();
	} else deleteProductFromCart(article);
}

function deleteProductFromCart(article) {
	cookies.removeItemFromCart(article);
	$(`.product-card[article="${article}"]`).remove();
	cartProductsList = cartProductsList.filter((product) => product.data.article != article);
	calculateFinalSum();
}

function buildCartList() {
	let newCartList = $("<div>");
	let cookieCart = cookies.getItemsInCart();
	cartProductsList.forEach((product) => {
		let article = product.data.article;
		let item = $(cartItemTemplate).attr("article", article);
		item.find(".product-card-title > a").attr("navid", `product-page/${article}`);
		item.find(".product-card-photo > img").attr("src", `/img/products-images/${product.images[0]}.jpg`);
		item.find(".quantity").html(cookieCart.get(article));
		item.find(".decrease-quantity").click(() => { changeProductQuantity(article, -1); });
		item.find(".increase-quantity").click(() => { changeProductQuantity(article, 1); });
		item.find(".product-card-del > button").click(() => { deleteProductFromCart(article); });
		newCartList.append(item);
	});
	newCartList.children().detach().appendTo($(".cart-column-left").html(""));
	wrapPageLinks(".product-card-title a[navid]");
	$(window).trigger("oncountrychange.content").trigger("onlanguagechange.content");
}

function calculateFinalSum() {
	let cookiesCart = cookies.getItemsInCart();
	let sum = 0;
	cartProductsList.forEach((product) => { sum += product.prices[translator.currency.name] * (cookiesCart.get(product.data.article) ?? 0); });
	let vat = 0; // TODO: later
	let finalSum = sum + vat;
	
	$(".payment-sum").html(`${(sum / 100).toFixed(2)} ${translator.currency.sign}`);
	$(".payment-vat").html(`${(vat / 100).toFixed(2)} ${translator.currency.sign}`);
	$(".payment-final-sum").html(`${(finalSum / 100).toFixed(2)} ${translator.currency.sign}`);
}

$(window).on("onresize.content", () => {
	/* do something when resize */
});

$(window).on("onunload.content", () => {
	cartProductsList = undefined;
});

$(window).on("onload.cart", () => {
	$(window).on({
		"oncountrychange.content": () => {
			cartProductsList.forEach((product) => {
				$(`.product-card[article="${product.data.article}"]`)
					.find(".product-card-price > p")
					.html((product.prices[translator.currency.name] / 100).toFixed(2) + ` ${translator.currency.sign}`);
			});
			calculateFinalSum();
		},
		"onlanguagechange.content": () => {
			updateCartList(undefined, () => {
				cartProductsList.forEach((product) => {
					$(`.product-card[article="${product.data.article}"]`)
							.find(".product-card-title > a")
							.html(product.language.name);
				});
			});
		}
	});
	updateCartList(undefined, () => {
		buildCartList();
		calculateFinalSum();
	});
});
