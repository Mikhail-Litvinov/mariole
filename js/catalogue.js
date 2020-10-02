
$(".accordion").click(function () {
    let isActive = $(this).toggleClass("active").hasClass("active");
    let height = (isActive ? $(this).children(".catalogue-sub")[0].scrollHeight : 0) + "px";
    
    $(".accordion").removeClass("active");
    $(this).toggleClass("active", isActive);
    
    $(".accordion > .catalogue-sub").height("0px");
    $(".accordion.active > .catalogue-sub").height(height);
});