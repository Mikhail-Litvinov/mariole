app.navigation = {
	cachedScripts: [],
	pages: [],
	path: [],
	defaultPathRoot: "home",
	switchContent(newPage) {
		let newPath = this.getPagePath(newPage);
		this.processError404(newPath[0]);
		
		newPath[0] = this.validateUnavailablePathRoot(newPath[0]); // Check if page root doesn't exist
		this.routePagePath(newPath); // Load needed page or update the current page's content
		
		let uri = "/" + newPath.join("/"); // Build new uri
		newPage ? history.pushState(null, null, uri) : history.replaceState(null, null, uri); // Update history point
		this.path = newPath;
	},
	getPagePath(page) {
		let path = (page ?? location.pathname.slice(1)).split("/"); // Explode given or current address to array by /
		path[0] = this.validateEmptyPathRoot(path[0]); // Check if this.path is null
		return path;
	},
	validateEmptyPathRoot(pathRoot) {
		return pathRoot.length ? pathRoot : this.defaultPathRoot;
	},
	validateUnavailablePathRoot(pathRoot) {
		return this.pages.includes(pathRoot) ? pathRoot : this.defaultPathRoot;
	},
	processError404(pathRoot) {
		this.pages.includes(pathRoot) ? $("#error-404-modal").remove() : $("#error-404-modal").show();
	},
	routePagePath(newPath) {
		if(this.path[0] != newPath[0]) { // If new this.path root is different
			scrollTo(0, 0); // Scroll page to the start
			$(window).trigger("onunload.content").off("onscriptsloadend .content");
			$("#content").load(`/tpl/pages/roots/${newPath[0]}.tpl`, () => {
				$("title").html($("#content > [title]").attr("title")); // Set website title as written in the page root's HTML
				this.wrapPageLinks("#content a[navid]");
				$(window).on("onscriptsloadend", () => { this.updateContentSelection(newPath); });
			});
		} else this.updateContentSelection(newPath);
	},
	updateContentSelection(newPath) {
		switch(newPath[0]) {
			case "catalogue":
				app.catalogue.updateSelection(newPath);
				break;
			case "news":
				app.news.updateSelection();
				break;
		}
	},
	wrapPageLinks(selector) {
		for(let element of document.querySelectorAll(selector)) { // Not jQuery because of 6-time speed difference
			element.setAttribute("href", "/" + element.getAttribute("navid"));
			element.onclick = (evt) => {
				this.switchContent(element.getAttribute("navid"));
				evt.preventDefault()
			};
		}
	},
	loadAvailablePagesList(callback) {
		$.getJSON("/data/pages_list", (response) => {
			this.pages = response;
			callback();
		});
	}
};

function loadScripts(list) {
	let uniqueDeferredList = list.filter((name) => !app.navigation.cachedScripts.includes(name));
	uniqueDeferredList.forEach((name) => { app.navigation.cachedScripts.push(name); });
	uniqueDeferredList = uniqueDeferredList.map((name) => $.getScript(`/js/${name}.js`));
	
	$.when.apply($, uniqueDeferredList).then(() => {
		for(let name of list) $(window).trigger(`onload.init_${name}`);
		$(window).trigger("onscriptsloadend").trigger("onresize.content");
	});
}

$(window).on("navigate", () => {
	app.navigation.loadAvailablePagesList(() => { app.navigation.switchContent(); });
	app.navigation.wrapPageLinks("[navid]");
	addEventListener("popstate", () => { app.navigation.switchContent() }); // Bind forward/back actions to switchContent
});