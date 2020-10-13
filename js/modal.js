closeModalTimeout = 50;
closeModalTimeout = 300;
closeModal404Timeout = 700;
escapeKeycode = 27;

function toggleLangModal() { $("#btn-lang").hasClass("active") ? closeLangModal() : openLangModal(); }

function openLangModal() {
	$("#btn-lang").addClass("active");
	$("#modal-lang").css("display", "flex");
	setTimeout(() => { $("#modal-lang").addClass("open"); }, closeModalTimeout);
}
function closeLangModal() {
	$("#btn-lang").removeClass("active");
	$("#modal-lang").removeClass("open");
	setTimeout(() => { $("#modal-lang").css("display", "none"); }, closeModalTimeout);
}

function openCountryModal() {
	$("#btn-country").addClass("active");
	$("#modal-country").css("display", "block");
	setTimeout(() => { $("#modal-country").addClass("open"); }, closeModalTimeout);
}

function closeCountryModal() {
	$("#btn-country").removeClass("active");
	$("#modal-country").removeClass("open");
	setTimeout(() => { $("#modal-country").css("display", "none"); }, closeModalTimeout);
}

function openSearchModal() {
	$("#open-search").addClass("active");
	$("#modal-search").addClass("open");
}

function closeSearchModal() {
	$("#open-search").removeClass("active");
	$("#modal-search").removeClass("open");
}

function close404Modal() {
	$("#error-404-modal").addClass("active");
	setTimeout(() => { $("#error-404-modal").remove(); }, closeModal404Timeout);
}

function onKeyDown(evt) {
	if(evt.keyCode == escapeKeycode) {
		closeLangModal();
		closeCountryModal();
		closeSearchModal();
		close404Modal();
	}
}

$(() => {
    $("#btn-lang").click(toggleLangModal);

	$("#btn-country").click(openCountryModal);
	$("#close-country").click(closeCountryModal);

	$("#open-search").click(openSearchModal);
	$("#close-search").click(closeSearchModal);

	$("#close-error-404").click(close404Modal);

	$(window).on("keydown.modal", onKeyDown);
});