
$('.sorting').nSelect();

function closeAllSubmenus() {
	$(".accordion").removeClass("active");
	$(".catalogue-sub").height("0px");
}

$(".accordion").click(function () {
    let isActive = $(this).toggleClass("active").hasClass("active");
    let height = (isActive ? $(this).children(".catalogue-sub")[0].scrollHeight : 0) + "px";
	
	closeAllSubmenus();
	
    $(this).toggleClass("active", isActive).children(".catalogue-sub").height(height);
});

$(".catalogue-button:not(.accordion)").click(closeAllSubmenus);

$(window).ready(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() <= 1024) {
        $(".catalogue-button-top-nav").detach().appendTo(".catalogue-left-nav")
    } else {
        $(".catalogue-button-top-nav").detach().appendTo(".catalogue-top-nav")
    }
}).resize(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() <= 1024) {
        $(".catalogue-button-top-nav").detach().appendTo(".catalogue-left-nav")
    } else {
        $(".catalogue-button-top-nav").detach().appendTo(".catalogue-top-nav")
    }
})

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

$("#hamburger-4").click(function () {
    $(".catalogue-left-nav").toggleClass("opened")
})
  