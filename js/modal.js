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

$(function createError() {
    let timerEror = null;
    $('header').prepend('<div class="alert-wrapper flex wrap flex-align-middle" id="errorModal"><div class="alert-content flex wrap flex-align-middle"><span id="closeError"></span><div class="error-title"><h2>ОШИБКА 404</h2></div><div class="error-description"><p>Вероятно, запрашиваемая страница не существует.</p><p>Пожалуйста, измените поисковой запрос или перезагрузите страницу.</p></div></div></div>')
    $("#closeError").click( function () {
        $("#errorModal").addClass("active")
        timerEror = setTimeout(() => {
            $("#errorModal").remove();
        },700)
    })
})