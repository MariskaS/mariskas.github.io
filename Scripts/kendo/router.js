$(function () {

	var router = new kendo.Router(); //router - маршрутизатор(управляет маршрутами приложения)

	router.route("/template", function () {
		// show preloader
		$.ajax({
			url: "/template/aboutUs.html",
			success: function (data) {
				// hide preloader
				// render content

				var aboutUs = new kendo.View(
				data, { model: kendo.observable({ foo: "О нас" }) });

				$("#view").html(aboutUs.render());
				$("body").removeClass('home');
				$("body").addClass('no-slider');
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.start();

	$("#aboutUs").click(function (e) {
		e.preventDefault();
		router.navigate("/template");
	});
});
