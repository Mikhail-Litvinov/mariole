$("script:not([id])").remove();

Math.bound = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
Math.cycle = (num, border) => border ? +Math.abs((num >= 0 ? num : num - Math.floor(num / border) * border) % border).toFixed(8) : num;

app = {
	activeScripts: [],
	cachedScripts: [],
	templates: {},
	loadScripts(list, type = "init", folder = "content") {
		if(type == "init") this.activeScripts = list;
		let uniqueDeferredList = list.reduce((accumulator, script) => {
			if(!this.cachedScripts.includes(script)) { // If script isn't loaded already
				this.cachedScripts.push(script);
				accumulator.push($.ajax({ // Create new Deferred
					url: `/public/javascript/${folder}/${script}.js`,
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
});

app.loadScripts([
	"scrollmagic/plugins/debug.addIndicators",
	"scrollmagic/plugins/animation.gsap",
	"scrollmagic",
	"cookies",
	"menu",
	"modals",
	"translation", 
	"navigation"
], "app", "app");