let pages; // Array containing available pages

addEventListener("popstate", () => { showContent() }); // Bind forward/back action to showContent

$(document).ready(() => { showContent() }); // Execute showContent when page is loaded

function showContent(page) {
	page = validatePage(page ?? location.pathname.slice(1), page ? history.pushState : history.replaceState);

	$("#content").load(`tpl/pages/${page}.tpl`); // Load the page to a content container
}

function validatePage(page, action) {
	page = pages.includes(page) ? page : "home"; // If page is provided then use it, else "home"
	action.bind(history)(null, null, `/${page}`); // If page is given, then make a new history point, else rewrite current history point
	
	return page; // Return valid page
}

function loadPagesList(rawList) {
	pages = rawList.map(item => item.replace(".tpl", "")); // Make a new list without ".tpl" at the end
}