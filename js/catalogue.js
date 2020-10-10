catalogueProductList = [];
catalogueItemTemplate = null;
sortingMethod = "default";

function updateCatalogueSelection(newPath, newList) {
	if(!catalogueItemTemplate) {
		$.get("/tpl/pages/catalogue-item.tpl", (data) => {
			catalogueItemTemplate = data;
			updateCatalogueSelection(newPath, newList);
		});
		return;
	} else if(!newList) {
		let link = `/data/database/product_query/${language.get("lang-code")}/${newPath[1] ?? ""}/${newPath[2] ?? ""}`;
		$.getJSON(link, (data) => { updateCatalogueSelection(newPath, data); });
		return;
	}
	
	catalogueProductList = newList;
	performNewSortingMethod(sortingMethod);
}

function performNewSortingMethod(newMethod) {
	sortingMethod = newMethod;
	sortProductList();
	buildSortedProductList();
}

function sortProductList() {
	let compatator;
	switch(sortingMethod) {
		case "price_1-0":
			comparator = (first, second) => second[countries.curname] - first[countries.curname];
			break;
		case "price_0-1":
			comparator = (first, second) => first[countries.curname] - second[countries.curname];
			break;
		case "alphabetic_A-Z":
			comparator = (first, second) => (first["name"] > second["name"]) ? 1 : ((first["name"] < second["name"]) ? -1 : 0);
			break;
		default:
			comparator = (first, second) => first > second;
	}
	catalogueProductList.sort(comparator);
}

function buildSortedProductList() {
	let newCataloguePage = $("<div>");
	catalogueProductList.forEach((product) => {
		let item = $(catalogueItemTemplate).removeClass("new-product-wrapper");
		item.attr("navid", `product-page/${product["article"]}`);
		item.find(".product-photo > img").attr("src", `/img/products-images/${product["i0"]}.jpg`);
		item.find(".product-title > p").html(product["name"]);
		item.find(".product-price > p").html(`${product[countries.curname]} ${countries.cursign}`);
		newCataloguePage.append(item);
	});
	$("div.catalogue-page").html(newCataloguePage.html());
	wrapPageLinks("#content div.product-wrapper");
}

function closeAllSubmenus() {
	$(".accordion").removeClass("active");
	$(".catalogue-sub").height("0px");
}

// TODO: убрать этот срам
$(window).ready(function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() <= 1024) {
		$(".catalogue-button-top-nav").detach().appendTo(".catalogue-left-nav")
	} else {
		$(".catalogue-button-top-nav").detach().appendTo(".catalogue-top-nav")
	}
}).resize(function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() <= 1024) {
		$(".catalogue-button-top-nav").detach().appendTo(".catalogue-left-nav")
	} else {
		$(".catalogue-button-top-nav").detach().appendTo(".catalogue-top-nav")
	}
})

$(() => {
	$(".sorting").nSelect();
	
	$(".accordion").click(function () {
		let isActive = $(this).toggleClass("active").hasClass("active");
		
		closeAllSubmenus();
		
		let height = (isActive ? $(this).children(".catalogue-sub")[0].scrollHeight : 0) + "px";
		$(this).toggleClass("active", isActive).children(".catalogue-sub").height(height);
	});
	
	$(".hamburger").click(function() { $(this).toggleClass("is-active"); });
	$("#hamburger-4").click(() => { $(".catalogue-left-nav").toggleClass("opened"); });
	$(".catalogue-button:not(.accordion)").click(closeAllSubmenus);
	
	let sortingMethodList = ["default", "price_1-0", "price_0-1", "alphabetic_A-Z", "new"];
	$("#content ul.nselect__list > li").each((index, element) => {
		$(element).click(() => { performNewSortingMethod(sortingMethodList[index]); });
	});
	
	$(window).on("oncountrychange", () => { performNewSortingMethod(sortingMethod); });
	$(window).on("onlanguagechange", () => { updateCatalogueSelection(path); });
});
