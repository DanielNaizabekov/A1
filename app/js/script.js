$(function() {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		dots: true
	});

	$('.slick-next').html('&darr;');
	$('.slick-prev').html('&uarr;');
	$('.slick-dots li').html('');
});