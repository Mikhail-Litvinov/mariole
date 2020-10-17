cookies = {
	get: (name) => {
		let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	},
	set: (name, value, options = {}) => {
		options = {
			"path": "/",
			"max-age": 60*60*24*31, // One month
			...options
		};
		if(options["expires"] instanceof Date) options["expires"] = options["expires"].toUTCString();
		let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
		for(let optionKey in options) updatedCookie += `; ${optionKey}` + ((options[optionKey] !== true) ? `=${options[optionKey]}` : "");
		document.cookie = updatedCookie;
	},
	remove: (name) => {
		cookies.set(name, "", { "max-age": -1 });
	},
	getItemsInCart: () => {
		let result = new Map();
		if(cookies.get("cart")) {
			for(let item of cookies.get("cart").split("_")) {
				let record = item.split("-");
				result.set(+record[0], +record[1]);
			}
		}
		return result;
	},
	updateItemsInCart: (newCart) => {
		let result = [];
		for(let [article, count] of newCart) if(count) result.push(`${article}-${count}`);
		cookies.set("cart", result.join("_"));
	},
	addItemToCart: (article, count) => {
		cookies.updateItemsInCart(cookies.getItemsInCart().set(article, count));
	},
	removeItemFromCart: (article) => {
		cookies.addItemToCart(article, null);
	}
};