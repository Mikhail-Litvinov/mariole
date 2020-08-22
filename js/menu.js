// submenu
let menuBtns = document.getElementsByClassName("menu-btn");
let main = document.getElementById("main");
let mainSub = document.getElementById("main-sub");
var i;

function openSubmenu(evt, buttonID) {
    for (i = 0; i < menuBtns.length; i++) {
        menuBtns[i].className = menuBtns[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active"
    if (main.classList.contains("active")) {
        mainSub.className += " active";
    }
}

function closeSub() {
    for (i = 0; i < menuBtns.length; i++) {
        menuBtns[i].className = menuBtns[i].className.replace(" active", "");
    }

    mainSub.classList.remove("active");
}
//submenu end