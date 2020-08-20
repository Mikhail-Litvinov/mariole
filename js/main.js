//open language//

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

//open language end//
