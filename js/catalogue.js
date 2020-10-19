$(window).on("onload.init_catalogue", () => {
	app.catalogue = {
		list: [],
		sortingMethod: "default",
		updateSelection(newPath, newList) {
			if(!app.templates.catalogueItem) {
				$.get("/tpl/pages/catalogue_item.tpl", (data) => {
					app.templates.catalogueItem = data;
					this.updateSelection(newPath, newList);
				});
				return;
			} else if(!newList) {
				let link = `/data/database/product_query/${app.translation.language.code}/${newPath[1] ?? ""}/${newPath[2] ?? ""}`;
				$.getJSON(link, (data) => { this.updateSelection(newPath, data); });
				return;
			}
			
			this.list = newList;
			this.performNewSortingMethod(this.sortingMethod);
		},
		performNewSortingMethod(newMethod) {
			this.sortingMethod = newMethod;
			this.sortList();
			this.buildList();
		},
		sortList() {
			let compatator;
			switch(this.sortingMethod) {
				case "price_1-0":
					comparator = (first, second) => second.prices[app.translation.currency.name] - first.prices[app.translation.currency.name];
					break;
				case "price_0-1":
					comparator = (first, second) => first.prices[app.translation.currency.name] - second.prices[app.translation.currency.name];
					break;
				case "alphabetic_A-Z":
					comparator = (first, second) => (first.language.name > second.language.name) ? 1 : ((first.language.name < second.language.name) ? -1 : 0);
					break;
				default:
					comparator = (first, second) => first > second;
			}
			this.list.sort(comparator);
		},
		buildList() {
			let newCataloguePage = $("<div>");
			this.list.forEach((product) => {
				let item = $(app.templates.catalogueItem);
				item.children("a").attr("navid", `product-page/${product.data.article}`);
				item.find(".product-photo > img").attr("src", `/img/products-images/${product.images[0]}.jpg`);
				item.find(".product-title > p").html(product.language.name);
				item.find(".product-price > p").html((product.prices[app.translation.currency.name] / 100).toFixed(2) + ` ${app.translation.currency.sign}`);
				newCataloguePage.append(item);
			});
			$(".catalogue-page").html(newCataloguePage.html());
			app.navigation.wrapPageLinks("#content .product-wrapper > a[navid]");
		},
		closeSubmenus() {
			$(".accordion").removeClass("active");
			$(".catalogue-sub").height("0px");
		}
	};

	$(".sorting").nSelect();
	
	$(".accordion").on("click.catalogue", function () {
		let isActive = $(this).toggleClass("active").hasClass("active");
		
		app.catalogue.closeSubmenus();
		
		let height = (isActive ? $(this).children(".catalogue-sub")[0].scrollHeight : 0) + "px";
		$(this).toggleClass("active", isActive).children(".catalogue-sub").height(height);
	});
	$("#hamburger-4").click(() => { $(".catalogue-left-nav").toggleClass("opened"); });
	$(".catalogue-button:not(.accordion)").on("click.catalogue", () => { app.catalogue.closeSubmenus(); });
	
	let sortingMethodList = ["default", "price_1-0", "price_0-1", "alphabetic_A-Z", "new"];
	$("#content").find("ul.nselect__list > li").each((index, element) => {
		$(element).click(() => { app.catalogue.performNewSortingMethod(sortingMethodList[index]); });
	});
	
	$(window).on({
		"oncountrychange.content": () => { app.catalogue.performNewSortingMethod(app.catalogue.sortingMethod); },
		"onlanguagechange.content": () => { app.catalogue.updateSelection(app.navigation.path); },
		"onresize.content": () => {
			$(".catalogue-button-top-nav").detach().appendTo(`.catalogue-${(app.main.isMobile || app.main.isLowWidth) ? "left" : "top"}-nav`);
		},
		"onunload.content": () => { app.catalogue = undefined; }
	});
});
