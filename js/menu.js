let menu = [document.getElementById("home"), document.getElementById("gallery"), document.getElementById("clothes"), 
document.getElementById("accessories"), document.getElementById("news")];

let subMenu = [document.getElementById("home-sub"), document.getElementById("gallery-sub"), 
document.getElementById("clothes-sub"), document.getElementById("accessories-sub"), document.getElementById("news-sub")];

let closeMenu = null;

$(".menu-btn").hover(function () {
    $(this).addClass("active")
    for (let i = 0; i < menu.length; i++) {
        if ($(menu[i]).hasClass("active")) {
            $(subMenu[i]).height(subMenu[i].scrollHeight + "px");
        }
    }
}, function closeSub() {
    closeMenu = setTimeout(() => {
            $(subMenu).height(0);
            $(menu).removeClass("active"); 
    }, 50)
})

$(subMenu).hover(() => {
    clearTimeout(closeMenu)
}, () => {
    $(subMenu).height(0);
    $(menu).removeClass("active");
})

$(".sub-list-element").click(function () {
    $(subMenu).height(0);
    $(menu).removeClass("active");
})

//submenu end