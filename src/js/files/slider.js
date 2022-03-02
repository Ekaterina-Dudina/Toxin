$(document).ready(function () {
	$('.slider-room-card').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		speed: 1000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.main__slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeeed: 4000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.registration__slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

});
