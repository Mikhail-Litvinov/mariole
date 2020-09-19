let modalLang = document.getElementById("modal-lang");
let btnLang = document.getElementById("btn-lang");
let modalCountry = document.getElementById("modal-country");
let closeModalCountry = document.getElementById("close-country");
let btnCountry = document.getElementById("btn-country");
let modalSearch = document.getElementById("modal-search");
let closeSearch = document.getElementById("close-search");
let btnSearch = document.getElementById("open-search");

let closeTimer = null;

function openLang() {
    modalLang.style.display = "flex";
    closeTimer = setTimeout (() => {
        modalLang.classList.add("open");
    }, 50)
}
function closeLang() {
    modalLang.classList.remove("open");
    closeTimer = setTimeout (() => {
        modalLang.style.display = "none"
    }, 300)
}

function openCountry() {
    if (btnCountry.classList.contains("active")) {
        modalCountry.style.display = "block"
        closeTimer = setTimeout (() => {
            modalCountry.classList.add("open");
        }, 50)
    }
}

document.getElementById("close-country").onclick = function closeCountry() {
    btnCountry.classList.remove("active");
    modalCountry.classList.remove("open");
    closeTimer = setTimeout (() => {
        modalCountry.style.display = "none"
    }, 300)
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

