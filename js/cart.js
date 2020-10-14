cartProductsList = undefined;
cartItemTemplate = undefined;

function updateCartList(newList) {
	if(!cartItemTemplate) {
		$.get("/tpl/pages/cart_item.tpl", (data) => {
			cartItemTemplate = data;
			updateCartList(newList);
		});
		return;
	} else if(!newList) {
		let cartItems = Array.from(cookies.getItemsInCart().keys()).join("-");
		let link = `/data/database/product_query/${language.get("lang-code")}/cart/${cartItems}`; // TODO
		$.getJSON(link, (data) => { updateCartList(data); });
		return;
	}
	
	cartProductsList = newList;
	buildCartList();
	calculateFinalSum();
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
	calculateFinalSum();
}

function performNewCartCountry() {
	buildCartList();
	calculateFinalSum();
}

function performNewCartLanguage() {
	updateCartList();
}

function buildCartList() {
	let newCartList = $("<div>");
	let cookieCart = cookies.getItemsInCart();
	cartProductsList.forEach((product) => {
		let article = product["article"];
		let item = $(cartItemTemplate).attr("article", article);
		item.find(".product-card-title").attr("navid", `product-page/${article}`);
		item.find(".product-card-photo > img").attr("src", `/img/products-images/${product["i0"]}.jpg`);
		item.find(".product-card-title > a").html(product["name"]);
		item.find(".product-card-price > p").html(`${product[countries.curname]} ${countries.cursign}`);
		item.find(".quantity").html(cookieCart.get(article));
		item.find(".decrease-quantity").click(() => { changeProductQuantity(article, -1); });
		item.find(".increase-quantity").click(() => { changeProductQuantity(article, 1); });
		item.find(".product-card-del > button").click(() => { deleteProductFromCart(article); });
		newCartList.append(item);
	});
	newCartList.children().detach().appendTo($(".cart-column-left").html(""));
	wrapPageLinks("#content .product-card .product-card-title");
}

function calculateFinalSum() {
	let cookiesCart = cookies.getItemsInCart();
	let sum = 0.0;
	cartProductsList.forEach((product) => {
		sum += product[countries.curname] * (cookiesCart.get(product["article"]) ?? 0);
	});
	sum = +sum.toFixed(2);
	let vat = +(0.0).toFixed(2); // TODO: later
	let finalSum = +(sum + vat).toFixed(2);
	
	$(".payment-sum").html(`${sum} ${countries.cursign}`);
	$(".payment-vat").html(`${vat} ${countries.cursign}`);
	$(".payment-final-sum").html(`${finalSum} ${countries.cursign}`);
}

$(window).on("onresize.content", () => {
	/* do something when resize */
});

$(() => {
	updateCartList();
	$(window).off("oncountrychange.cart").on("oncountrychange.cart", performNewCartCountry);
	$(window).off("onlanguagechange.cart").on("onlanguagechange.cart", performNewCartLanguage);
});
