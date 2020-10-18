app.modals = {
	timeouts: {
		open: 50,
		close: 300,
		close404: 700
	},
	escapeKeycode: 27,
	toggleLang(state) {
		$("#btn-lang").toggleClass("active", state);
		if(state) {
			$("#modal-lang").css("display", "flex");
			setTimeout(() => { $("#modal-lang").addClass("open"); }, this.timeouts.open);
		} else {
			$("#modal-lang").removeClass("open");
			setTimeout(() => { $("#modal-lang").css("display", "none"); }, this.timeouts.close);
		}
	},
	toggleCountry(state) {
		$("#btn-country").toggleClass("active", state);
		if(state) {
			$("#modal-country").css("display", "block");
			setTimeout(() => { $("#modal-country").addClass("open"); }, this.timeouts.open);
		} else {
			$("#modal-country").removeClass("open");
			setTimeout(() => { $("#modal-country").css("display", "none"); }, this.timeouts.close);
		}
	},
	toggleSearch(state) {
		$("#open-search").toggleClass("active", state);
		$("#modal-search").toggleClass("open", state);
	},
	close404() {
		$("#error-404-modal").addClass("active");
		setTimeout(() => { $("#error-404-modal").remove(); }, this.timeouts.close404);
	},
	onKeyDown(evt) {
		if(evt.keyCode == this.escapeKeycode) {
			this.toggleLang(false);
			this.toggleCountry(false);
			this.toggleSearch(false);
			this.close404();
		}
	}
};

$(() => {
    $("#btn-lang").click(() => { app.modals.toggleLang(!$("#btn-lang").hasClass("active")); });
	$("#btn-country").click(() => { app.modals.toggleCountry(true); });
	$("#close-country, .country-btn").click(() => { app.modals.toggleCountry(false); });
	$("#open-search").click(() => { app.modals.toggleSearch(true); });
	$("#close-search").click(() => { app.modals.toggleSearch(false); });
	$("#close-error-404").click(() => { app.modals.close404(); });
	
	$(window).on({
		"keydown.modal": (evt) => { app.modals.onKeyDown(evt); }
	});
});