let modalLang = document.getElementById("modal-lang");
let modalCountry = document.getElementById("modal-country");
let closeModalCountry = document.getElementById("close-country");
let btnCountry = document.getElementById("btn-country");

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

// modalCountry.onclick = function WinCloseCountry() {
//     btnCountry.classList.remove("active");
//     modalCountry.classList.remove("open");
// }

