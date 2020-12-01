app.menu = {
	desktopMenus: $(".js-desktop-menu-points").find("[menu]"),
	mobileMenus: $("#mobile-menu").find("[menu]"),
	submenus: $(".js-submenus-container").children("div"),
	mobileMenu: $("#mobile-menu"),
	closeSubmenusTimer: undefined,
	closeSubmenus() {
		this.desktopMenus.removeClass("active");
		this.mobileMenus.add(this.mobileMenus.find("span")).removeClass("active");
		this.submenus.height(0);
		$(window).off(".navmenu");
	},
	actualize(element) {
		$(element).addClass("active");
		let menu = element.getAttribute("menu");
		this.mobileMenus.filter(`[menu="${menu}"]`).find("span").addClass("active");
		let submenu = $(`#${menu}-sub`);
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
		"click.navmenu": (evt) => {
			if(evt.currentTarget.classList.contains("active")) {
				app.menu.closeSubmenus();
				return;
			}
			
			app.menu.closeSubmenus();
			app.menu.actualize(evt.currentTarget);
			
			$(window).off(".navmenu").on({
				"click.navmenu": (evt) => {
					if(app.menu.mobileMenus.find("span").parent().add(app.menu.submenus).has(evt.target).length === 0) app.menu.closeSubmenus();
				}
			});
		}
	});
	app.menu.mobileMenus.find("span").on({
		"click.navmenu": (evt) => {
			app.menu.mobileMenus.find("span").removeClass("active").filter(evt.currentTarget).addClass("active");
		}
	});
	app.menu.submenus.on({
		"mouseenter.navmenu": () => { clearTimeout(app.menu.closeSubmenusTimer); },
		"mouseleave.navmenu": () => { app.menu.closeSubmenusTimer = setTimeout(() => { app.menu.closeSubmenus(); }, 50); }
	});
	
	$("#hamburger-1").on({
		"click.navmenu": (evt) => {
			let isActive = $("#hamburger-1").toggleClass("is-active").hasClass("is-active");
			app.menu.mobileMenu.toggleClass("open", isActive);
			app.menu.closeSubmenus();
			
			$(window).off(".navmenu");
		}
	});
	$(".js-submenus-container [navid]").add(app.menu.desktopMenus).add(app.menu.mobileMenu.find("ul [navid]")).on({
		"click.navmenu": (evt) => {
			$("#hamburger-1").removeClass("is-active");
			app.menu.mobileMenu.removeClass("open");
			app.menu.closeSubmenus();
			
			$(window).off(".navmenu");
		}
	});
	
	app.menu.updateCartItemsCount();
});