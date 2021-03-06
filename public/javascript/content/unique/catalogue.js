$(window).on("onload.init_unique/catalogue", () => {
	app.catalogue = {
		list: [],
		sortingMethod: "default",
		updateSelection(newPath, newList) {
			if(!app.templates.catalogue) {
				$.when(
					$.get("/public/templates/subtemplates/catalogue/item.tpl")
				).then((item) => {
					app.templates.catalogue = {
						_item: item,
						getItem(article, img, title, price, currency) {
							return this._item
								.replace(/\${article}/gi, article)
								.replace("${img}", img)
								.replace("${title}", title)
								.replace("${price}", price)
								.replace("${currency}", currency);
						}
					};
					this.updateSelection(newPath, newList);
				});
				return;
			} else if(!newList) {
				let link = `/data/database/product_query/${app.translation.language.code}/${newPath[1] ?? ""}/${newPath[2] ?? ""}`;
				$.getJSON(link, (data) => { this.updateSelection(newPath, data); });
				return;
			}
			
			app.navigation.performContentTitle(
				app.translation.language.get("catalogue-footer")
				+ " - "
				+ app.translation.language.get(newPath[1] + "-menu")
			);
			
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
			let currencyName = app.translation.currency.name;
			switch(this.sortingMethod) {
				case "price_1-0":
					comparator = (first, second) => second.prices[currencyName] - first.prices[currencyName];
					break;
				case "price_0-1":
					comparator = (first, second) => first.prices[currencyName] - second.prices[currencyName];
					break;
				case "alphabetic_A-Z":
					comparator = (first, second) => {
						if(first.language.name > second.language.name) return 1;
						else if(first.language.name < second.language.name) return -1;
						else return 0;
					}
					break;
				default:
					comparator = (first, second) => first > second;
			}
			this.list.sort(comparator);
		},
		buildList() {
			let newCatalogueList = "";
			for(let product of this.list) {
				newCatalogueList += app.templates.catalogue.getItem(
					product.data.article,
					product.images[0],
					product.language.name,
					(product.prices[app.translation.currency.name] / 100).toFixed(2),
					app.translation.currency.sign
				);
			}
			$(".catalogue-page").html(newCatalogueList);
			app.navigation.wrapPageLinks(".product-wrapper > a[navid]");
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
	$("#hamburger-4").click((evt) => {
		$(evt.currentTarget).toggleClass("is-active");
		$(".catalogue-left-nav").toggleClass("opened");
	});
	$(".catalogue-button:not(.accordion)").on("click.catalogue", () => { app.catalogue.closeSubmenus(); });
	
	let sortingMethodList = ["default", "price_1-0", "price_0-1", "alphabetic_A-Z", "new"];
	$("#content").find("ul.nselect__list > li").each((index, element) => {
		$(element).click(() => { app.catalogue.performNewSortingMethod(sortingMethodList[index]); });
	});
	
	$(window).on({
		"oncountrychange.content": () => { app.catalogue.performNewSortingMethod(app.catalogue.sortingMethod); },
		//"onlanguagechange.content": () => { app.catalogue.updateSelection(app.navigation.path); },
		"onresize.content": () => {
			$(".catalogue-button-top-nav").detach().appendTo(`.catalogue-${(app.main.isMobile || app.main.isLowWidth) ? "left" : "top"}-nav`);
		},
		"onunload.content": () => { app.catalogue = undefined; }
	});
	
	app.scrollmagic.update();
});
