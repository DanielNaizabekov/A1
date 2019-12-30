$(function() {
	//===slider===
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
	//===slider===



	//===categories===
	$('.categories-title').on('click', function() {
		$('.categories-list').slideToggle(200);
	})
	//===categories===



	// ===aside slider===
	$('.aside-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	$('.aside-slider .slick-next').html('&rarr;');
	$('.aside-slider .slick-prev').html('&larr;');
	// ===aside slider===
});