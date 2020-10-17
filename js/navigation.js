pages = {};
path = [];
defaultPathRoot = "home";

function switchContent(newPage) {
	let newPath = getPagePath(newPage);
	processError404(newPath[0]);
	
	newPath[0] = validateUnavailablePathRoot(newPath[0]); // Check if page root doesn't exist
	routePagePath(newPath, newPath[0]); // Load needed page or update the current page's content
	
	let uri = "/" + newPath.join("/"); // Build new uri
	newPage ? history.pushState(null, null, uri) : history.replaceState(null, null, uri); // Update history point
	path = newPath;
}

function getPagePath(page) {
	let path = (page ?? location.pathname.slice(1)).split("/"); // Explode given or current address to array by /
	path[0] = validateEmptyPathRoot(path[0]); // Check if path is null
	return path;
}

function validateEmptyPathRoot(pathRoot) {
	return pathRoot.length ? pathRoot : defaultPathRoot;
}

function validateUnavailablePathRoot(pathRoot) {
	return pages.includes(pathRoot) ? pathRoot : defaultPathRoot;
}

function processError404(pathRoot) {
	pages.includes(pathRoot) ? $("#error-404-modal").remove() : $("#error-404-modal").show();
}

function routePagePath(newPath) {
	if(path[0] != newPath[0]) { // If new path root is different
		scrollTo(0, 0); // Scroll page to the start
		$(window).trigger("onunload.content").off("onscriptsloadend .content");
		$.get(`/tpl/pages/roots/${newPath[0]}.tpl`, (data) => {
			$("#content").html(data);
			$("title").html($("#content > [title]").attr("title")); // Set website title as written in the page root's HTML
			wrapPageLinks("#content [navid]");
			$(window).on("onscriptsloadend", () => { updateContentSelection(newPath); });
		});
	} else updateContentSelection(newPath);
}

function updateContentSelection(newPath) {
	switch(newPath[0]) {
		case "catalogue":
			updateCatalogueSelection(newPath);
			break;
		case "news":
			updateNewsSelection();
			break;
	}
}

function wrapPageLinks(selector) {
	return $(selector).each((index, element) => {
		$(element).attr("href", "/" + $(element).attr("navid")).off("click.navlink").on("click.navlink", (evt) => {
			switchContent($(element).attr("navid"));
			evt.preventDefault();
		});
	});
}

function loadAvailablePagesList(callback) {
	$.getJSON("/data/pages_list", (response) => {
		pages = response;
		callback();
	});
}

function loadScripts(list) {
	$.when.apply($, list.map((name) => $.getScript(`/js/${name}.js`))).then(() => {
		for(let script of list) $(window).trigger(`onload.${script}`);
		$(window).trigger("onscriptsloadend").trigger("onresize.content");
	});
}

$(window).on("navigate", () => {
	loadAvailablePagesList(switchContent);
	wrapPageLinks("[navid]");
	addEventListener("popstate", () => { switchContent() }); // Bind forward/back actions to switchContent
});