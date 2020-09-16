let modalLang = document.getElementById("modal-lang");
let btnLang = document.getElementById("btn-lang");
let modalCountry = document.getElementById("modal-country");
let closeModalCountry = document.getElementById("close-country");
let btnCountry = document.getElementById("btn-country");
let modalSearch = document.getElementById("modal-search");
let closeSearch = document.getElementById("close-search");
let btnSearch = document.getElementById("open-search");

function openLang() {
    modalLang.classList.add("open");
}
function closeLang() {
    modalLang.classList.remove("open");
}

function openCountry() {
    if (btnCountry.classList.contains("active")) {
        modalCountry.classList.add("open");
    }
}

document.getElementById("close-country").onclick = function closeCountry() {
    btnCountry.classList.remove("active");
    modalCountry.classList.remove("open");
}

function SearchModalOpen() {
    modalSearch.classList.add("open");
}

closeSearch.onclick = function SearchModalClose() {
    btnSearch.classList.remove("active");
    modalSearch.classList.remove("open");
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

// modalCountry.onclick = function WinCloseCountry() {
//     btnCountry.classList.remove("active");
//     modalCountry.classList.remove("open");
// }

$(() => {
    $("#close-error-404").click(() => {
        $("#error-404-modal").addClass("active");
        setTimeout($("#error-404-modal").remove, 700);
    });
});