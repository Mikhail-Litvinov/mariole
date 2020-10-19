Math.bound = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
Math.cycle = (num, border) => border ? +Math.abs((num >= 0 ? num : num - Math.floor(num / border) * border) % border).toFixed(8) : num;

app = {
	cachedScripts: [],
	templates: {},
	loadScripts(list, type = "init") {
		let uniqueDeferredList = list.filter((name) => !this.cachedScripts.includes(name));
		uniqueDeferredList = uniqueDeferredList.map((name) => {
			this.cachedScripts.push(name);
			return $.ajax({
				url: `/js/${name}.js`,
				dataType: "script",
				cache: true
			});
		});
		
		$.when.apply($, uniqueDeferredList).then(() => {
			for(let name of list) $(window).trigger(`onload.${type}_${name}`);
			$(window).trigger("onscriptsloadend").trigger("onresize.content");
		});
	},
	main: {
		updateMobileFlags() {
			app.main.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			app.main.isLowWidth = $(window).width() <= 1024;
			$(window).trigger("onresize");
		}
	}
};

$(window).on({
	"onscriptsloadend.app": () => { $(window).resize(() => { app.main.updateMobileFlags(); }).resize(); },
	"onload.app_wow": () => {
		new WOW({
			"live": true,
			"boxClass": "wow", // Class hiding an element until it should be showed on a display ("wow" by default)
			"offset": 20 // Pixels from the lowest border of a display to the upper border of an element, needed for starting animation (0 by default)
		}).init();
	}
});

app.loadScripts(["cookies", "menu", "modals", "translation", "navigation", "wow"], "app");