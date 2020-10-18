catalogueItemTemplate = window["catalogueItemTemplate"];
sortingMethod = "default";

function updateCatalogueSelection(newPath, newList) {
	if(!catalogueItemTemplate) {
		$.get("/tpl/pages/catalogue_item.tpl", (data) => {
			catalogueItemTemplate = data;
			updateCatalogueSelection(newPath, newList);
		});
		return;
	} else if(!newList) {
		let link = `/data/database/product_query/${translator.language.code}/${newPath[1] ?? ""}/${newPath[2] ?? ""}`;
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
			comparator = (first, second) => second.prices[translator.currency.name] - first.prices[translator.currency.name];
			break;
		case "price_0-1":
			comparator = (first, second) => first.prices[translator.currency.name] - second.prices[translator.currency.name];
			break;
		case "alphabetic_A-Z":
			comparator = (first, second) => (first.language.name > second.language.name) ? 1 : ((first.language.name < second.language.name) ? -1 : 0);
			break;
		default:
			comparator = (first, second) => first > second;
	}
	catalogueProductList.sort(comparator);
}

function buildSortedProductList() {
	let newCataloguePage = $("<div>");
	catalogueProductList.forEach((product) => {
		let item = $(catalogueItemTemplate);
		item.children("a").attr("navid", `product-page/${product.data.article}`);
		item.find(".product-photo > img").attr("src", `/img/products-images/${product.images[0]}.jpg`);
		item.find(".product-title > p").html(product.language.name);
		item.find(".product-price > p").html((product.prices[translator.currency.name] / 100).toFixed(2) + ` ${translator.currency.sign}`);
		newCataloguePage.append(item);
	});
	$(".catalogue-page").html(newCataloguePage.html());
	wrapPageLinks("#content .product-wrapper > a[navid]");
}

function closeAllSubmenus() {
	$(".accordion").removeClass("active");
	$(".catalogue-sub").height("0px");
}

$(window).on("onresize.content", () => {
	$(".catalogue-button-top-nav").detach().appendTo(`.catalogue-${(isMobile || isLowWidth) ? "left" : "top"}-nav`);
});

$(window).on("onunload.content", () => {
	catalogueProductList = undefined;
	sortingMethod = undefined;
});

$(window).on("onload.catalogue", () => {
	$(".sorting").nSelect();
	
	$(".accordion").click(function () {
		let isActive = $(this).toggleClass("active").hasClass("active");
		
		closeAllSubmenus();
		
		let height = (isActive ? $(this).children(".catalogue-sub")[0].scrollHeight : 0) + "px";
		$(this).toggleClass("active", isActive).children(".catalogue-sub").height(height);
	});
	$("#hamburger-4").click(() => { $(".catalogue-left-nav").toggleClass("opened"); });
	$(".catalogue-button:not(.accordion)").click(closeAllSubmenus);
	
	let sortingMethodList = ["default", "price_1-0", "price_0-1", "alphabetic_A-Z", "new"];
	$("#content ul.nselect__list > li").each((index, element) => {
		$(element).click(() => { performNewSortingMethod(sortingMethodList[index]); });
	});
	
	$(window).on({
		"oncountrychange.content": () => { performNewSortingMethod(sortingMethod); },
		"onlanguagechange.content": () => { updateCatalogueSelection(path); }
	});
});
