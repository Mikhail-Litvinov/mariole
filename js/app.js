Math.bound = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
Math.cycle = (num, border) => border ? +Math.abs((num >= 0 ? num : num - Math.floor(num / border) * border) % border).toFixed(8) : num;

app = {
	cachedScripts: [],
	templates: {},
	loadScripts(list, type = "init") {
		let uniqueDeferredList = list.reduce((accumulator, script) => {
			if(!this.cachedScripts.includes(script)) { // If script isn't loaded already
				this.cachedScripts.push(script);
				accumulator.push($.ajax({ // Create new Deferred
					url: `/js/${script}.js`,
					dataType: "script",
					cache: true
				}));
			}
			return accumulator;
		}, []);
		
		$.when.apply($, uniqueDeferredList).then(() => {
			for(let name of list) $(window).trigger(`onload.${type}_${name}`);
			$(window).trigger("onscriptsloadend").trigger("onresize.content");
		});
	},
	main: {
		updateMobileFlags() {
			this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			this.isLowWidth = $(window).outerWidth() <= 1024;
			$(window).trigger("onresize");
		}
	}
};

$(window).one({
	"onscriptsloadend.app": () => { $(window).resize(() => { app.main.updateMobileFlags(); }).resize(); },
	"onload.app_wow": () => {
		new WOW({
			"live": true,
			"boxClass": "wow", // Class hiding an element until it should be showed on a display ("wow" by default)
			"offset": 20 // Pixels from the lowest border of a display to the upper border of an element, needed for starting animation (0 by default)
		}).init();
	}
});

app.loadScripts(["cookies", "menu", "modals", "translation", "navigation"], "app");