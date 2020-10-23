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
	routePagePath(newPath, forceUpdate = false) {
		if((this.path[0] != newPath[0]) || forceUpdate) { // If new path root is different
			scrollTo(0, 0); // Scroll page to the start
			$(window).trigger("onunload.content").off(".content");
			$.ajax({
				url: `/public/templates/rootpages/${newPath[0]}/${app.translation.language.code}.tpl`,
				cache: true,
				success: (data) => {
					$("#content").html(this.processContent(data));
					this.wrapPageLinks("#content a[navid]");
					$(window).one("onscriptsloadend", () => { this.updateContentSelection(newPath); });
				}
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
	processContent(data) {
		let styles = data.match(/Styles: (.+?);/);
		this.performContentStyles(styles ? styles[1].split(", ") : []);
		
		let scripts = data.match(/Scripts: (.+?);/);
		if(scripts) this.performContentScripts(scripts[1].split(", "));
		
		let title = data.match(/Title: (.+?);/);
		if(title) this.performContentTitle(title[1]);
		
		return data.replace(/(Styles|Scripts|Title): .+?;/g, "");
	},
	performContentStyles(styles) {
		let head = $("head:first");
		head.children("link[content-style]").remove();
		if(!styles.length) return;
		
		for(let style of styles) {
			head.append(app.templates.navigation.getStyle(style));
		}
	},
	performContentScripts(scripts) {
		if(scripts) app.loadScripts(scripts);
	},
	performContentTitle(title) {
		$("head:first").children("title:first").html(`Mario'le | ${title}`);
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

$(window).one("navigate", () => {
	app.templates.navigation = {
		_style: "<link content-style rel=\"stylesheet\" href=\"/public/css/content/${style}.css\"/>",
		getStyle(style) {
			return this._style
				.replace("${style}", style);
		}
	};
	app.navigation.loadAvailablePagesList(() => { app.navigation.switchContent(); });
	app.navigation.wrapPageLinks("[navid]");
	$(window).on({
		"popstate": () => { app.navigation.switchContent(); },
		"onlanguagechange.navigation": () => { app.navigation.routePagePath(app.navigation.path, true); }
	});
});