// $(document).ready(function () {
//     $(".catalogue-top-nav").css("width", $(window).width()-$(".catalogue-left-nav").width())
// })
// , function closeCat() {
//     $(".catalogue-button").removeClass("active");
//     $(".catalogue-sub").height(0);
// }

let catalogueSub = [$(".catalogue-sub")]
let catalogueBtn = [$(".catalogue-button")]


$(".catalogue-button").click(function () {
    $(this).toggleClass("active");
    for (let n = 0; n < catalogueBtn.length; n++) {
        if ($(catalogueBtn[n]).hasClass("active")) {
            $(catalogueSub[n]).height(catalogueSub[n].scrollHeight + "px");
        }
    }
})