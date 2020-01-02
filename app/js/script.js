$(function() {
	//===stopPropogations===
	$('.menu, .header-search-wrap input').on('click', function(event) {
		event.stopPropagation();
	});
	//===stopPropogations===

	//===removeActiveStyles===
	$('body').on('click', function() {
		$('.menu').removeClass('menu-active');
		$('.header-search-wrap').removeClass('search-input-active');
	});
	//===removeActiveStyles===



	//===menu===
	$('.menu__btn').on('click', function() {
		$('.menu').toggleClass('menu-active');
	});
	//===menu===



	//===header-search===
	$('.header-search-form').on('submit', function(event) {
		event.preventDefault();

		let headerSearchValue = $(this).find('input').val();

		if (headerSearchValue) {
			console.log(headerSearchValue);
			$(this)[0].reset();
		}
	});

	$('.header-search-btn').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();

		let headerSearchValue = $(this).parent().find('input').val();
		$(this).parent().toggleClass('search-input-active');

		if(headerSearchValue) {
			console.log(headerSearchValue);
			$(this).parent().find('form')[0].reset();
		}
	});
	//===header-search===



	//===header slider===
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		dots: true,
		responsive: [
		{
			breakpoint: 600,
			settings: {
				dots: false
			}
		}
		]
	});

	$('.slick-next').html('&darr;');
	$('.slick-prev').html('&uarr;');
	$('.slick-dots li').html('');
	//===header slider===



	//===categories===
	$('.categories-title, .menu-categories').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('categories-title-active');
		$(this).parent().find('.categories-list').slideToggle(200);
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