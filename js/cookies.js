app.cookies = {
	base: {
		get(name) {
			let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
			return matches ? decodeURIComponent(matches[1]) : undefined;
		},
		set(name, value, options = {}) {
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
		remove(name) {
			this.set(name, "", { "max-age": -1 });
		},
	},
	cart: {
		getItems() {
			let result = new Map();
			if(app.cookies.base.get("cart")) {
				for(let item of app.cookies.base.get("cart").split("_")) {
					let record = item.split("-");
					result.set(+record[0], +record[1]);
				}
			}
			return result;
		},
		updateItems(newCart) {
			let result = [];
			for(let [article, count] of newCart) if(count) result.push(`${article}-${count}`);
			app.cookies.base.set("cart", result.join("_"));
		},
		addItem(article, count) {
			this.updateItems(this.getItems().set(article, count));
		},
		removeItem(article) {
			this.addItem(article, null);
		}
	}
};