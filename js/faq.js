$(".faq-btn").click(function () {
    $(this).toggleClass("oppened");
    if ($(".faq-btn").hasClass("oppened")) {
        $(this).children(".faq-content").height($(".faq-content").get(0).scrollHeight + "px")
    }
    else {
        $(this).children(".faq-content").height(0)
    }
})