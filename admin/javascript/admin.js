let langBtn = $('.lang-choose')
let productCreate = $('.productCreate')

$(langBtn).click(function () {
    for (let i = 0; i < langBtn.length; i++) {
        $(langBtn).removeClass("active");
        $(this).toggleClass("active");
        if ($(langBtn[i]).hasClass("active")) {
            $(productCreate[i]).height($(this).get(0).scrollHeight + "px")
        }
    }
})