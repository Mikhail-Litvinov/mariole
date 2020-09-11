let menu = [document.getElementById("home"), document.getElementById("about"), 
document.getElementById("gallery"), document.getElementById("women"), 
document.getElementById("men"), document.getElementById("baby"), document.getElementById("news")];

let subMenu = [document.getElementById("home-sub"), document.getElementById("about-sub"), 
document.getElementById("gallery-sub"), document.getElementById("women-sub"), 
document.getElementById("men-sub"), document.getElementById("baby-sub"), document.getElementById("news-sub")];

let closeMenu = null;

$(".menu-btn").hover(() => {
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

//submenu end