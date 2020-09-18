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

//resize
$(window).ready(function () {
    // console.log($(window).width())
    if ($(window).width() <= 1024) {
        console.log("mobile")
        $(".navigation").detach().appendTo(".mobile-menu-wrapper")
        $(".countries").detach().appendTo(".mobile-menu-wrapper")
        $(".buttons-top-nav").detach().appendTo(".mobile-menu-wrapper")        
    }else {
        $(".buttons-top-nav").detach().prependTo(".nav-top-cont")
        $(".logo").detach().prependTo(".nav-top-cont")
        $(".countries").detach().prependTo(".nav-top-cont")
        $(".navigation").detach().prependTo(".nav")
    }
}).resize(function () {
    // console.log($(window).width())
    if ($(window).width() <= 1024) {
        console.log("mobile")
        $(".navigation").detach().appendTo(".mobile-menu-wrapper")
        $(".countries").detach().appendTo(".mobile-menu-wrapper")
        $(".buttons-top-nav").detach().appendTo(".mobile-menu-wrapper")
    }else {
        console.log("desktop")
        $(".buttons-top-nav").detach().prependTo(".nav-top-cont")
        $(".logo").detach().prependTo(".nav-top-cont")
        $(".countries").detach().prependTo(".nav-top-cont")
        $(".navigation").detach().prependTo(".nav")
    }
})


let icon = document.getElementById("hamburger-1");
let mobileMenu = document.getElementById("mobile-menu");

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      if (icon.classList.contains("is-active")) {
        mobileMenu.classList.add("open")
      }
      else {
        mobileMenu.classList.remove("open")
      }
    });
});



//resize end