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
		let path = (page ?? location.pathname.slice(1)).toLowerCase().split("/"); // Explode given or current address to array by /
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
				url: `/public/templates/rootpages/getter.php`,
				data: {
					"page_name": newPath[0],
					"page": 1,
					"language": app.translation.language.code
				},
				dataType: "json",
				cache: true,
				success: (data) => {
					$("#content").html(this.processContent(data.page));
					this.wrapPageLinks("#content a[navid]");
					app.translation.language.translateContent(data.translation);
					this.performContentTitle(data.translation?.title);
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
				app.news.updateSelection(newPath);
				break;
			case "gallery":
				app.gallery.route(newPath[1]);
				break;
		}
	},
	processContent(data) {
		let styles = data.match(/Styles: (.+?);/);
		this.performContentStyles(styles ? styles[1].split(", ") : []);
		
		let scripts = data.match(/Scripts: (.+?);/);
		if(scripts) this.performContentScripts(scripts[1].split(", "));
		
		let description = data.match(/Description: (.+?);/);
		let keywords = data.match(/Keywords: (.+?);/);
		this.performContentMetas({
			description: description ? description[1] : null,
			keywords: description ? keywords[1] : null
		});
		
		return data.replace(/(Styles|Scripts|Description|Keywords): .+?;/g, "");
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
		if(title) $("head:first").children("title:first").html(`Mario'le | ${title}`);
	},
	performContentMetas(values) {
		let metas = $("head:first").children("meta");
		for(let metaName in values) {
			let metaValue = values[metaName];
			if(metaValue) metas.filter(`[name="${metaName}"]`).attr("content", metaValue);
		}
	},
	wrapPageLinks(selector) {
		for(let element of document.querySelectorAll(selector)) { // Not jQuery because of 6-time speed difference
			element.setAttribute("href", "/" + element.getAttribute("navid"));
			element.onclick = (evt) => {
				if(evt.altKey || evt.ctrlKey || evt.shiftKey) return;
				
				this.switchContent(element.getAttribute("navid"));
				evt.preventDefault();
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
		"onlanguagechange.navigation": () => {
			$.ajax({
				url: `/public/templates/rootpages/getter.php`,
				data: {
					"page_name": app.navigation.path[0],
					"language": app.translation.language.code
				},
				dataType: "json",
				cache: true,
				success: (data) => {
					app.translation.language.translateContent(data.translation);
					app.navigation.performContentTitle(data.translation?.title);
				}
			});
		}
	});
});