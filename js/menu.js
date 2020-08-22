// submenu
let menuBtns = document.getElementsByClassName("menu-btn");
let main = document.getElementById("main");
let about = document.getElementById("about");
let gallery = document.getElementById("gallery");
let forWomen = document.getElementById("forwomen");
let forMen = document.getElementById("formen");
let baby = document.getElementById("baby");
let blog = document.getElementById("blog");
let mainSub = document.getElementById("main-sub");
let aboutSub = document.getElementById("about-sub");
let gallerySub = document.getElementById("gallery-sub");
let forWomenSub = document.getElementById("forwomen-sub");
let forMenSub = document.getElementById("formen-sub");
let babySub = document.getElementById("baby-sub");
let blogSub = document.getElementById("blog-sub");
var i;

for (var i=0; i<menuBtns.length; i++) {
        menuBtns[i].addEventListener('mouseenter', openSubMenu);
        menuBtns[i].addEventListener('mouseleave', closeSubMenu);
    }

function openSubMenu() {
    this.className += " active";
    if (main.classList.contains("active")) {
        mainSub.classList.add("active");
    }
    if (about.classList.contains("active")) {
        aboutSub.className += " active";
    }
    if (gallery.classList.contains("active")) {
        gallerySub.className += " active";
    }
    if (forWomen.classList.contains("active")) {
    forWomenSub.className += " active";
    }
    if (forMen.classList.contains("active")) {
    forMenSub.className += " active";
    }
    if (baby.classList.contains("active")) {
    babySub.className += " active";
    }
    if (blog.classList.contains("active")) {
    blogSub.className += " active";
    }
}

function closeSubMenu() {
    this.classList.remove("active");
    mainSub.classList.remove("active");
    aboutSub.classList.remove("active");
    gallerySub.classList.remove("active");
    forWomenSub.classList.remove("active");
    forMenSub.classList.remove("active");
    babySub.classList.remove("active");
    blogSub.classList.remove("active");
}
//submenu end



