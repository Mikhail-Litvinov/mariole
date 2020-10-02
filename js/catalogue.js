
let catalogueSub = $(".catalogue-sub");
let catalogueBtn =$(".accordion");


$(".catalogue-button").click(function () {
    let isActive = $(this).toggleClass("active").hasClass("active");
    let height = (isActive ? $(this).children(".catalogue-sub")[0].scrollHeight : 0) + "px";
    
    $(".catalogue-button").removeClass("active");
    $(this).toggleClass("active", isActive);
    
    $(".catalogue-button > .catalogue-sub").height("0px");
    $(".catalogue-button.active > .catalogue-sub").height(height);
});