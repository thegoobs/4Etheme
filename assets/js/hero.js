$(document).ready(function() {
	if ($("header").attr("image")) {
		let url = $("header").attr("image");
		$("header").css({
			background: "linear-gradient(rgba(42,42,42,.7),rgba(42,42,42,.7)), url(" + url + ")"
		});
	}

	else {
		console.log("WARNING: If you want a hero image on this jekyll site, add metadata 'site.hero_image' with an image URL.");
	}
})