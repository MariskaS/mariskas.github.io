
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
});

