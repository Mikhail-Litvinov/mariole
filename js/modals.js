modals = {
	timeouts: {
		open: 50,
		close: 300,
		close404: 700
	},
	escapeKeycode: 27,
	toggleLang: (state) => {
		$("#btn-lang").toggleClass("active", state);
		if(state) {
			$("#modal-lang").css("display", "flex");
			setTimeout(() => { $("#modal-lang").addClass("open"); }, modals.timeouts.open);
		} else {
			$("#modal-lang").removeClass("open");
			setTimeout(() => { $("#modal-lang").css("display", "none"); }, modals.timeouts.close);
		}
	},
	toggleCountry: (state) => {
		$("#btn-country").toggleClass("active", state);
		if(state) {
			$("#modal-country").css("display", "block");
			setTimeout(() => { $("#modal-country").addClass("open"); }, modals.timeouts.open);
		} else {
			$("#modal-country").removeClass("open");
			setTimeout(() => { $("#modal-country").css("display", "none"); }, modals.timeouts.close);
		}
	},
	toggleSearch: (state) => {
		$("#open-search").toggleClass("active", state);
		$("#modal-search").toggleClass("open", state);
	},
	close404: () => {
		$("#error-404-modal").addClass("active");
		setTimeout(() => { $("#error-404-modal").remove(); }, modals.timeouts.close404);
	},
	onKeyDown: (evt) => {
		if(evt.keyCode == modals.escapeKeycode) {
			modals.toggleLang(false);
			modals.toggleCountry(false);
			modals.toggleSearch(false);
			modals.close404();
		}
	}
};

$(() => {
    $("#btn-lang").click(() => { modals.toggleLang(!$("#btn-lang").hasClass("active")); });
	$("#btn-country").click(() => { modals.toggleCountry(true); });
	$("#close-country, .country-btn").click(() => { modals.toggleCountry(false); });
	$("#open-search").click(() => { modals.toggleSearch(true); });
	$("#close-search").click(() => { modals.toggleSearch(false); });
	$("#close-error-404").click(modals.close404);
	
	$(window).on("keydown.modal", modals.onKeyDown);
});