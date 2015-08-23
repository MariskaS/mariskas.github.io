$(function () {

	var router = new kendo.Router(); //router - маршрутизатор(управляет маршрутами приложения)

	/* Top menu */

	router.route("/addressHelp", function () {
		$.ajax({
			url: "template/addressHelp/addressHelp.html",
			success: function (data) {
				// hide preloader
				// render content

				var addressHelp = new kendo.View(
					data, { model: kendo.observable({ foo: "Адресная помощь" }) });

				$("#view").html(addressHelp.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/fullHelp", function () {
		$.ajax({
			url: "template/fullHelp/fullHelp.html",
			success: function (data) {
				// hide preloader
				// render content

				var fullHelp = new kendo.View(
					data, { model: kendo.observable({ foo: "Общая помощь" }) });

				$("#view").html(fullHelp.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/crystalPeople", function () {
		$.ajax({
			url: "template/crystalPeople/crystalPeople.html",
			success: function (data) {
				// hide preloader
				// render content

				var crystalPeople = new kendo.View(
					data, { model: kendo.observable({ foo: "Помощь Хрустальным людям" }) });

				$("#view").html(crystalPeople.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/finhelp", function () {
		$.ajax({
			url: "template/finHelp/finhelp.html",
			success: function (data) {
				// hide preloader
				// render content

				var finhelp = new kendo.View(
					data, { model: kendo.observable({ foo: "Финансовая помощь" }) });

				$("#view").html(finhelp.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/volonter", function () {
		$.ajax({
			url: "template/volonter/volonter.html",
			success: function (data) {
				// hide preloader
				// render content

				var volonter = new kendo.View(
					data, { model: kendo.observable({ foo: "Как стать волонтером ?" }) });

				$("#view").html(volonter.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});


	/* Left menu */
	router.route("/thanks", function () {
		$.ajax({
			url: "template/thanks/thanks.html",
			success: function (data) {
				// hide preloader
				// render content

				var thanks = new kendo.View(
					data, { model: kendo.observable({ foo: "Благодарности" }) });

				$("#view").html(thanks.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/news", function () {
		$.ajax({
			url: "template/news/news.html",
			success: function (data) {
				// hide preloader
				// render content

				var news = new kendo.View(
					data, { model: kendo.observable({ foo: "Новости" }) });

				$("#view").html(news.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/events", function () {
		$.ajax({
			url: "template/events/events.html",
			success: function (data) {
				// hide preloader
				// render content

				var events = new kendo.View(
					data, { model: kendo.observable({ foo: "Мероприятия" }) });

				$("#view").html(events.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/reports", function () {
		$.ajax({
			url: "template/reports/reports.html",
			success: function (data) {
				// hide preloader
				// render content

				var reports = new kendo.View(
					data, { model: kendo.observable({ foo: "Отчетная документакия фонда" }) });

				$("#view").html(reports.render())
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});

	router.route("/directory", function () {
		$.ajax({
			url: "template/directory/directory.html",
			success: function (data) {
				// hide preloader
				// render content

				var directory = new kendo.View(
					data, { model: kendo.observable({ foo: "Полезные материалы" }) });

				$("#view").html(directory.render());

				$('.sidebar-right-doc').on("click", "li > a", function(){ //вешаем обработчик на .sidebar-right-doc через on это позволит функции находить вновь созданные li через js
					$(".sidebar-right-doc li").removeClass('active');
					$(this).closest('li').addClass('active');
				});
			},
			error: function () {
				// hide preloader
				// show error
			}
		});
	});


	router.start();

	/* Top menu */
	$("#addressHelp").click(function (e) {
		e.preventDefault();
		router.navigate("/addressHelp");
	});

	$("#fullHelp").click(function (e) {
		e.preventDefault();
		router.navigate("/fullHelp");
	});

	$("#crystalPeople").click(function (e) {
		e.preventDefault();
		router.navigate("/crystalPeople");
	});

	$("#finhelp").click(function (e) {
		e.preventDefault();
		router.navigate("/finhelp");
	});

	$("#volonter").click(function (e) {
		e.preventDefault();
		router.navigate("/volonter");
	});



	/* Left menu */
	$("#thanks").click(function (e) {
		e.preventDefault();
		router.navigate("/thanks");
	});

	$("#news").click(function (e) {
		e.preventDefault();
		router.navigate("/news");
	});

	$("#events").click(function (e) {
		e.preventDefault();
		router.navigate("/events");
	});

	$("#reports").click(function (e) {
		e.preventDefault();
		router.navigate("/reports");
	});

	$("#directory").click(function (e) {
		e.preventDefault();
		router.navigate("/directory");
	});

});