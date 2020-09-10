let menu = [document.getElementById("home"), document.getElementById("about"), 
document.getElementById("gallery"), document.getElementById("women"), 
document.getElementById("men"), document.getElementById("children"), document.getElementById("blog")];

let subMenu = [document.getElementById("main-sub"), document.getElementById("about-sub"), 
document.getElementById("gallery-sub"), document.getElementById("forwomen-sub"), 
document.getElementById("formen-sub"), document.getElementById("baby-sub"), document.getElementById("blog-sub")];

let closeMenu = null;

$(".menu-btn").hover(function () {
    $(this).addClass("active")
    for (let i = 0; i < menu.length; i++) {
        if ($(menu[i]).hasClass("active")) {
            $(subMenu[i]).addClass("active")
        }
    }
}, function closeSub() {
    closeMenu = setTimeout(() => {
            $(subMenu).removeClass("active")
            $(menu).removeClass("active")  
    }, 50)
})

$(subMenu).hover(function () {
    clearTimeout(closeMenu)
}, function () {
    $(subMenu).removeClass("active")
    $(menu).removeClass("active")
})

//submenu end

