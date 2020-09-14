let pages;

addEventListener("popstate", () => { showContent() });

$(document).ready(() => { showContent() });

function showContent(page) {
	return;
	page = validatePage(page ?? location.pathname.slice(1), page ? history.pushState : history.replaceState);

	$("#content").load(`pages/${page}.html`);
}

function validatePage(page, action) {
	page = pages.includes(page) ? page : "home";
	action.bind(history)(null, null, `/${page}`);
	
	return page;
}

function loadPagesList(rawList) {
	pages = rawList.slice(2).map(item => item.slice(0, -5));
}