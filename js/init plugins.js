//owl carousel//

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1500,
        autoplayTimeout:8000,
        nav:true,
        tauchDrag:true,
        items:1,
        dots:false,
        navtext:false
    });
    });

    $(window).ready(function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() <= 1024) {
            $(".carousel-wrapper").css("height", $(window).height() -  $("#headerContainer").height())
        }else {
            $(".carousel-wrapper").css("height", $(window).height() -  $("#headerContainer").height())
        }
    }).resize(function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() <= 1024) {
            $(".carousel-wrapper").css("height", $(window).height() -  $("#headerContainer").height())
        }else {
            $(".carousel-wrapper").css("height", $(window).height() -  $("#headerContainer").height())
        }
    })
//owl carousel end//