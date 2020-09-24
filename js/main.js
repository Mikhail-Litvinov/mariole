//open language/country //



document.getElementById("btn-lang").onclick = function changeLang() {
    let btnLang = document.getElementById("btn-lang");
    btnLang.classList.toggle("active");
    if (btnLang.classList.contains("active")) {
        openLang();
    }
    // if (!btnLang.classList.contains("active")) {
    else {
        closeLang();
    }
}

document.getElementById("btn-country").onclick=function changeCountry() {
    let btnCountry = document.getElementById("btn-country");
    btnCountry.classList.toggle("active");
    if (btnCountry.classList.contains("active")) {
        openCountry();
    }
}

//open language/country end//

//open search//

document.getElementById("open-search").onclick=function openSearch() {
    let btnSearch = document.getElementById("open-search");
    btnSearch.classList.toggle("active");
    if (btnSearch.classList.contains("active")) {
    SearchModalOpen();
    }
}

//open search end//

//scrollbar//

$(function() {
	$("body").overlayScrollbars({
        overflowBehavior : {
            x : "hidden",
            y : "scroll"
        },
    });
});

//scrollbar end//