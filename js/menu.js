let menu = [document.getElementById("home"), document.getElementById("gallery"), document.getElementById("clothes"), 
document.getElementById("accessories"), document.getElementById("news")];

let subMenu = [document.getElementById("home-sub"), document.getElementById("gallery-sub"), 
document.getElementById("clothes-sub"), document.getElementById("accessories-sub"), document.getElementById("news-sub")];

let closeMenu = null;

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


$(window).ready(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() <= 1024) {
        $(".navigation").detach().appendTo(".mobile-menu-wrapper");
        $(".countries").detach().appendTo(".mobile-menu-wrapper");
        $(".buttons-top-nav").detach().appendTo(".mobile-menu-wrapper");
        $(".modal-search-bg").addClass("digital-search") ;
        $(".modal-search-bg").removeClass("desktop-search");
        $(".menu-btn").click(function () {
            $(menu).removeClass("active");
            $(subMenu).height(0);
            $(this).addClass("active");
            $(`#${this.id}-sub`).height($(`#${this.id}-sub`).get(0).scrollHeight + "px");
        });
        $(document).mouseup(function (outClick){
            if (!$(".menu-btn").is(outClick.target) &&
            $(".menu-btn").has(outClick.target).length === 0 && !$(subMenu).is(outClick.target) &&
            $(subMenu).has(outClick.target).length === 0) {
                $(subMenu).height(0)
            }
        });
        $(".sub-list-element").click(function () {
            $(subMenu).height(0);
            $(menu).removeClass("active");
            mobileMenu.classList.remove("open")
            $(".hamburger").removeClass("is-active")
        });   
    }else {
        // padding main //

        $(document).ready(function () {
            $("#content").css("padding-top", $("#headerContainer").height()+10);
        })

        //padding main end //
        $(".buttons-top-nav").detach().prependTo(".nav-top-cont");
        $(".logo").detach().prependTo(".nav-top-cont");
        $(".countries").detach().prependTo(".nav-top-cont");
        $(".navigation").detach().prependTo(".nav");
        $(".modal-search-bg").removeClass("digital-search");
        $(".modal-search-bg").addClass("desktop-search");
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
        });

        $(subMenu).hover(() => {
            clearTimeout(closeMenu)
        }, () => {
            $(subMenu).height(0);
            $(menu).removeClass("active");
        });

        $(".sub-list-element").click(function () {
            $(subMenu).height(0);
            $(menu).removeClass("active");
        });
    }
}).resize(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() <= 1024) {
        $(".navigation").detach().appendTo(".mobile-menu-wrapper");
        $(".countries").detach().appendTo(".mobile-menu-wrapper");
        $(".buttons-top-nav").detach().appendTo(".mobile-menu-wrapper");
        $(".modal-search-bg").addClass("digital-search");
        $(".modal-search-bg").removeClass("desktop-search");
        $(".menu-btn").click(function () {
            $(menu).removeClass("active");
            $(subMenu).height(0);
            $(this).addClass("active");
            $(`#${this.id}-sub`).height($(`#${this.id}-sub`).get(0).scrollHeight + "px");
        })
        $(document).mouseup(function (outClick){
            if (!$(".menu-btn").is(outClick.target) &&
            $(".menu-btn").has(outClick.target).length === 0 && !$(subMenu).is(outClick.target) &&
            $(subMenu).has(outClick.target).length === 0) {
                $(subMenu).height(0)
            }
        });
        $(".sub-list-element").click(function () {
            $(subMenu).height(0);
            $(menu).removeClass("active");
            mobileMenu.classList.remove("open")
            $(".hamburger").removeClass("is-active")
        });
    } else {
        // padding main //

        $(document).ready(function () {
        $("#content").css("padding-top", $("#headerContainer").height()+10);
        })

        //padding main end //
        $(".buttons-top-nav").detach().prependTo(".nav-top-cont");
        $(".logo").detach().prependTo(".nav-top-cont");
        $(".countries").detach().prependTo(".nav-top-cont");
        $(".navigation").detach().prependTo(".nav");
        $(".modal-search-bg").removeClass("digital-search");
        $(".modal-search-bg").addClass("desktop-search");
        $(".menu-btn").hover(function () {
            $(this).addClass("active");
            for (let i = 0; i < menu.length; i++) {
                if ($(menu[i]).hasClass("active")) {
                    $(subMenu[i]).height(subMenu[i].scrollHeight + "px");
                }
            };
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
    }
})




