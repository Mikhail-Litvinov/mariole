app.menu = {
	desktopMenus: $(".js-desktop-menu-points").find("[menu]"),
	mobileMenus: $("#mobile-menu").find("[menu]"),
	submenus: $(".js-submenus-container").children("div"),
	mobileMenu: $("#mobile-menu"),
	closeSubmenusTimer: undefined,
	closeSubmenus() {
		this.desktopMenus.removeClass("active");
		this.mobileMenus.removeClass("active");
		this.submenus.height(0);
	},
	actualize(element) {
		$(element).addClass("active");
		let submenu = $(`#${element.getAttribute("menu")}-sub`);
		submenu.height(submenu[0].scrollHeight + "px");
	},
	updateCartItemsCount(newCount = app.cookies.cart.getItems().size) {
		$(".cart-quantity-wrapper").html(newCount === 0 ? "" : newCount);
	}
};

$(window).on("onresize.menu", () => {
	// if(app.main.isMobile || app.main.isLowWidth) {		
		// // $(".navigation").detach().prependTo(".mobile-menu-wrapper");
		// // $(".countries, .buttons-top-nav").detach().appendTo(".mobile-menu-wrapper");
		// // $(".logo").detach().prependTo(".icon-container");
		// // $(".modal-search-bg").addClass("digital-search").removeClass("desktop-search");
		// app.menu.menus.off(".navmenu").on("click.navmenu", (evt) => {
			// app.menu.closeSubmenus();
			// app.menu.actualize(evt.currentTarget);
		// });
		// $(window).off(".navmenu").on("mouseup.navmenu", (evt) => {
			// if(!app.menu.menus.add(app.menu.subMenus).is(evt.target)) app.menu.subMenus.height(0);
		// });
		// $(".sub-list-element").off(".navmenu").on("click.navmenu", () => {
			// app.menu.closeSubmenus();
			// app.menu.mobileMenu.removeClass("open");
			// $(".hamburger").removeClass("is-active");
		// });
	// } else {
		// // $(".navigation").detach().appendTo(".nav");
		// // $(".countries").detach().prependTo(".nav-top-cont");
		// // $(".logo, .buttons-top-nav").detach().appendTo(".nav-top-cont");
		// // $(".modal-search-bg").addClass("desktop-search").removeClass("digital-search");		
		// app.menu.menus.off(".navmenu").on("mouseenter.navmenu mouseleave.navmenu", (evt) => {
			// switch(evt.type) {
				// case "mouseenter": app.menu.actualize(evt.currentTarget); break;
				// case "mouseleave": app.menu.closeSubmenusTimer = setTimeout(() => { app.menu.closeSubmenus(); }, 50); break;
			// }
		// });
		// app.menu.subMenus.off(".navmenu").on("mouseenter.navmenu mouseleave.navmenu", (evt) => {
			// switch(evt.type) {
				// case "mouseenter": clearTimeout(app.menu.closeSubmenusTimer); break;
				// case "mouseleave": app.menu.closeSubmenus(); break;
			// }
		// });
		// $(".sub-list-element").off(".navmenu").on("click.navmenu", () => { app.menu.closeSubmenus(); });
	// }
	
	if(app.main.isMobile || app.main.isLowWidth) {
		let desktop = $("#desktop-menu").hide();
		let mobile = $("#mobile-menu").show();
		$("#modal-lang").detach().appendTo(mobile.find(".js-lang-selector"));
	} else {
		let desktop = $("#desktop-menu").show();
		let mobile = $("#mobile-menu").hide();
		$("#modal-lang").detach().appendTo(desktop.find(".js-lang-selector"));
	}
	
	$("#content").css("padding-top", $("#headerContainer").height());
});

$(window).on("onload.app_menu", () => {
	app.menu.desktopMenus.on({
		"mouseenter.navmenu": (evt) => { app.menu.actualize(evt.currentTarget); },
		"mouseleave.navmenu": () => { app.menu.closeSubmenusTimer = setTimeout(() => { app.menu.closeSubmenus(); }, 50); }
	});
	app.menu.mobileMenus.on({
		"click.navmenu": (evt) => { app.menu.actualize(evt.currentTarget); }
	});
	app.menu.submenus.on({
		"mouseenter.navmenu": () => { clearTimeout(app.menu.closeSubmenusTimer); },
		"mouseleave.navmenu": () => { app.menu.closeSubmenusTimer = setTimeout(() => { app.menu.closeSubmenus(); }, 50); }
	});
	
	$(".hamburger").off(".navmenu").on("click.navmenu", (evt) => {
		app.menu.mobileMenu.toggleClass("open", $(evt.currentTarget).toggleClass("is-active").hasClass("is-active"));
		app.menu.closeSubmenus();
	});
	
	app.menu.updateCartItemsCount();
});