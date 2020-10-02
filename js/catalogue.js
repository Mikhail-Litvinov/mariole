
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

