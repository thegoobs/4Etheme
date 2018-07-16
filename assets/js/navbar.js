var i = 0;
$(".navbar-burger").click(function() {
	$("nav ul").css("display", "block");
	$("nav ul").animate({
		height: (++i % 2) ? "125px" : "0px"
	}, function() {
		if (!(i % 2)) {
			$(this).css("display", "none");
		}
	});
});

$(window).resize(function() {
	if ($(window).width() >= 768) {
		$("nav ul").removeAttr("style");
	}
	else {
		i = 0;
	}
})