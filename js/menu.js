let menu = $(".nav-list > li > .menu-btn");
let subMenu = $(".sub-menu-container > div.sub-nav");
let mobileMenu = $("#mobile-menu");
let closeMainSubmenusTimer;

function closeAllMainSubmenus() {
	menu.removeClass("active");
	subMenu.height(0);
}

function actualizeMainMenu(element) {
	$(element).addClass("active");
	$(`#${element.id}-sub`).height($(`#${element.id}-sub`).get(0).scrollHeight + "px");
}

$(window).resize(() => {
	$("#content").css("padding-top", $("#headerContainer").height());
	if (isMobile || isLowWidth) {
		$(".navigation").detach().prependTo(".mobile-menu-wrapper");
		$(".countries, .buttons-top-nav").detach().appendTo(".mobile-menu-wrapper");
		$(".modal-search-bg").addClass("digital-search").removeClass("desktop-search");
		menu.off("click.navmenu").on("click.navmenu", (evt) => {
			closeAllMainSubmenus();
			actualizeMainMenu(evt.currentTarget);
		});
		$(document).off("mouseup.navmenu").on("mouseup.navmenu", (evt) => { if(!menu.add(subMenu).is(evt.target)) subMenu.height(0); });
		$(".sub-list-element").off("click.navmenu").on("click.navmenu", () => {
			closeAllMainSubmenus();
			mobileMenu.removeClass("open");
			$("#hamburger-1").removeClass("is-active");
		});
	} else {
		$(".navigation").detach().appendTo(".nav");
		$(".countries").detach().prependTo(".nav-top-cont");
		$(".buttons-top-nav").detach().appendTo(".nav-top-cont");
		$(".modal-search-bg").addClass("desktop-search").removeClass("digital-search");		
		menu.off("mouseenter.navmenu mouseleave.navmenu").on("mouseenter.navmenu mouseleave.navmenu", (evt) => {
			switch(evt.type) {
				case "mouseenter": actualizeMainMenu(evt.currentTarget); break;
				case "mouseleave": closeMainSubmenusTimer = setTimeout(closeAllMainSubmenus, 50); break;
			}
		});
		subMenu.off("mouseenter.navmenu mouseleave.navmenu").on("mouseenter.navmenu mouseleave.navmenu", (evt) => {
			switch(evt.type) {
				case "mouseenter": clearTimeout(closeMainSubmenusTimer); break;
				case "mouseleave": closeAllMainSubmenus(); break;
			}
		});
		$(".sub-list-element").off("click.navmenu").on("click.navmenu", closeAllMainSubmenus);
	}
});

$(() => {
	$("#hamburger-1").on("click.navmenu", (evt) => {
		mobileMenu.toggleClass("open", $(evt.currentTarget).toggleClass("is-active").hasClass("is-active"));
	});
	$(window).resize();
});