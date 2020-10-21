app.menu = {
	menus: $(".nav-list").find("li > .menu-btn"),
	subMenus: $(".sub-menu-container").children("div.sub-nav"),
	mobileMenu: $("#mobile-menu"),
	closeSubmenusTimer: undefined,
	closeSubmenus() {
		this.menus.removeClass("active");
		this.subMenus.height(0);
	},
	actualize(element) {
		$(element).addClass("active");
		$(`#${element.id}-sub`).height($(`#${element.id}-sub`).get(0).scrollHeight + "px");
	}
};

$(window).on("onresize.menu", () => {
	if(app.main.isMobile || app.main.isLowWidth) {		
		$(".navigation").detach().prependTo(".mobile-menu-wrapper");
		$(".countries, .buttons-top-nav").detach().appendTo(".mobile-menu-wrapper");
		$(".logo").detach().prependTo(".icon-container");
		$(".modal-search-bg").addClass("digital-search").removeClass("desktop-search");
		app.menu.menus.off(".navmenu").on("click.navmenu", (evt) => {
			app.menu.closeSubmenus();
			app.menu.actualize(evt.currentTarget);
		});
		$(window).off(".navmenu").on("mouseup.navmenu", (evt) => {
			if(!app.menu.menus.add(app.menu.subMenus).is(evt.target)) app.menu.subMenus.height(0);
		});
		$(".sub-list-element").off(".navmenu").on("click.navmenu", () => {
			app.menu.closeSubmenus();
			app.menu.mobileMenu.removeClass("open");
			$(".hamburger").removeClass("is-active");
		});
	} else {
		$(".navigation").detach().appendTo(".nav");
		$(".countries").detach().prependTo(".nav-top-cont");
		$(".logo, .buttons-top-nav").detach().appendTo(".nav-top-cont");
		$(".modal-search-bg").addClass("desktop-search").removeClass("digital-search");		
		app.menu.menus.off(".navmenu").on("mouseenter.navmenu mouseleave.navmenu", (evt) => {
			switch(evt.type) {
				case "mouseenter": app.menu.actualize(evt.currentTarget); break;
				case "mouseleave": app.menu.closeSubmenusTimer = setTimeout(() => { app.menu.closeSubmenus(); }, 50); break;
			}
		});
		app.menu.subMenus.off(".navmenu").on("mouseenter.navmenu mouseleave.navmenu", (evt) => {
			switch(evt.type) {
				case "mouseenter": clearTimeout(app.menu.closeSubmenusTimer); break;
				case "mouseleave": app.menu.closeSubmenus(); break;
			}
		});
		$(".sub-list-element").off(".navmenu").on("click.navmenu", () => { app.menu.closeSubmenus(); });
	}
	$("#content").css("padding-top", $("#headerContainer").height());
});

$(window).on("onload.app_menu", () => {
	$(".hamburger").off(".navmenu").on("click.navmenu", (evt) => {
		app.menu.mobileMenu.toggleClass("open", $(evt.currentTarget).toggleClass("is-active").hasClass("is-active"));
	});
});