let openTimeout = 50;
let closeTimeout = 300;
let close404Timeout = 700;
let escapeKeycode = 27;

let modalLang = document.getElementById("modal-lang");
let btnLang = document.getElementById("btn-lang");
let modalCountry = document.getElementById("modal-country");
let closeModalCountry = document.getElementById("close-country");
let btnCountry = document.getElementById("btn-country");
let modalSearch = document.getElementById("modal-search");
let closeSearch = document.getElementById("close-search");
let btnSearch = document.getElementById("open-search");

function toggleLangModal() { $("#btn-lang").hasClass("active") ? closeLangModal() : openLangModal(); }

function openLangModal() {
	$("#btn-lang").addClass("active");
	$("#modal-lang").css("display", "flex");
	setTimeout(() => { $("#modal-lang").addClass("open"); }, openTimeout);
}
function closeLangModal() {
	$("#btn-lang").removeClass("active");
	$("#modal-lang").removeClass("open");
	setTimeout(() => { $("#modal-lang").css("display", "none"); }, closeTimeout);
}

function openCountryModal() {
	$("#btn-country").addClass("active");
	$("#modal-country").css("display", "block");
	setTimeout(() => { $("#modal-country").addClass("open"); }, openTimeout);
}

function closeCountryModal() {
	$("#btn-country").removeClass("active");
	$("#modal-country").removeClass("open");
	setTimeout(() => { $("#modal-country").css("display", "none"); }, closeTimeout);
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
	setTimeout(() => { $("#error-404-modal").remove(); }, close404Timeout);
}

document.addEventListener('keydown', function (esc) {
    if (esc.keyCode === 27) {
        if (btnSearch.classList.contains("active")) {
            btnSearch.classList.remove("active");
            modalSearch.classList.remove("open");
        }
        if (btnCountry.classList.contains("active")) {
            btnCountry.classList.remove("active");
            modalCountry.classList.remove("open");
        }
        if (btnLang.classList.contains("active")) {
            btnLang.classList.remove("active");
            modalLang.classList.remove("open");
        }
    }
  }); 

  function onKeyDown(evt) {
	if(evt.keyCode == escapeKeycode) {
		closeLangModal();
		closeCountryModal();
		closeSearchModal();
		close404Modal();
	}
}

// modalCountry.onclick = function WinCloseCountry() {
//     btnCountry.classList.remove("active");
//     modalCountry.classList.remove("open");
// }

$(() => {
    $("#btn-lang").click(toggleLangModal);

	$("#btn-country").click(openCountryModal);
	$("#close-country").click(closeCountryModal);

	$("#open-search").click(openSearchModal);
	$("#close-search").click(closeSearchModal);

	$("#close-error-404").click(close404Modal);

	$(document).on("keydown", onKeyDown);
    $("#close-error-404").click(() => {
        $("#error-404-modal").addClass("active");
        setTimeout($("#error-404-modal").remove, 700);
    });
});