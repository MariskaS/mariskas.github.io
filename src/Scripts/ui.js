
$(function () {
// 4 Bootstrap

	//if nav-bar fix top
	$('#mainNav').affix({
		offset: {
			top: 100
		}
	});

	//tooltip
	$('[data-toggle="tooltip"]').tooltip();

	//popover
	$('[data-toggle="popover"]').popover();

// END Bootstrap

//show menu right or left
	$("#menuLeft").click(function (e) {
		e.preventDefault();
		$("body").toggleClass("show-sidebar-left");
	});

	//carousel
		$('.carousel').carousel({
			interval: 6000
		});

	//hover-img
	$(".hover-img img")
		.mouseover(function() {
			var src = $(this).attr("src").match(/[^\.]+/) + "-hover.jpg";
			$(this).attr("src", src);
			$(this).animate({'opacity':.7}, 1000);
		})
		.mouseout(function() {
			var src = $(this).attr("src").replace("-hover.jpg", ".jpg");
			$(this).attr("src", src);
			$(this).animate({'opacity': 1}, 1000);
		});
});

