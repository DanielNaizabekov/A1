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



	//===header form===
	$('.subscribe__form').on('submit', function(event) {
		event.preventDefault();
		let name = $(this).find('input[name="name"]').val();
		Swal.fire({
			title: 'Your subscription is successful!',
			text: `Your name is: ${name}`,
			icon: 'success',
			confirmButtonText: 'ok',
			showClass: {
				popup: 'animated zoomIn faster'
			},
			hideClass: {
				popup: 'animated zoomOut faster'
			},
			customClass: {
				confirmButton: 'header-form-modal-btn',
				title: 'header-form-modal-title'
			}
		})
	});
	//===header form===



	//===categories===
	$('.categories-title, .menu-categories').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('categories-title-active');
		$(this).parent().find('.categories-list').slideToggle(200);
	});
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



	// ===recomended posts slider===
	$('.recomended-posts-list').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 375,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});

	$('.recomended-posts-list .slick-next').html('&rarr;');
	$('.recomended-posts-list .slick-prev').html('&larr;');


	//===sider's width resize===
	function postsSliderResize () {
		let postList = document.querySelector('.post-list');
		let recomendedPosts = postList.nextElementSibling;

		if(recomendedPosts) {
			recomendedPosts.style.width = 300 + 'px';
			let postListWidth = postList.offsetWidth;
			recomendedPosts.style.width = +postListWidth + 'px';
		};
	};
	postsSliderResize();

	window.addEventListener('resize', () => {
		postsSliderResize();
	});
	//===sider's width resize===
	// ===recomended posts slider===




	//===heart animation===
	$('.like-btn').on('click', function() {

		let counterLikes = $(this).find('.counter-likes');
		let counterLikesValue = counterLikes.text();

		let heartImg = $(this).find('.heart-img');
		let heartBg = $(this).find('.heart-bg');

		if(+counterLikesValue === 0) {
			counterLikes.text('1');
			heartImg.removeClass('pulse')
			heartImg.addClass('bounceIn')

			heartBg.addClass('fadeIn');
			heartBg.attr('fill', 'red');
		}else{
			counterLikes.text('0');
			heartImg.removeClass('bounceIn')
			heartImg.addClass('pulse')

			heartBg.removeClass('fadeIn');
			heartBg.attr('fill', '#fff');
		}
	});
	//===heart animation===



	//===star animation===
	let clicked = false;

	for(let i = 0; i < $('.icon-star').length; i++) {
		$('.icon-star:eq('+ i +')').attr('data-id', i);
	};

	$('.icon-star').hover(function() {
		let id = $(this).attr('data-id');
		if(clicked === true) {
			return null;
		} else{
			for(let i = 0; i <= id; i++) {
				$('.icon-star:eq('+ i +')').css('color', 'orange');
			};
		}
	},
	function() {
		if(clicked === true) {
			return null;
		} else{
			$('.icon-star').css('color', '#999')
			let id = $(this).attr('data-id');
			for(let i = 0; i < id; i++) {
				$('.icon-star:eq('+ i +')').css('color', 'orange');
			};
		}
	}
	);

	$('.rating').hover(function() {
		if(clicked === true) {
			return null;
		} else{
			$('.icon-star').css('color', '#999')
		}
	});

	$('.icon-star').on('click', function() {
		clicked = true;
		$('.icon-star').css('color', '#999')
		let id = $(this).attr('data-id');

		for(let i = 0; i <= id; i++) {
			$('.icon-star:eq('+ i +')').css('color', '#ff0010');
		};
	});
	//===star animation===



	//===ajax===
	$('.read-more-btn').on('click', function(event) {
		let userId = [
			$(this).parent().find('a[href="about-page.html"]').attr('data-user-id'),
			$(this).parent().find('a[href="about-page.html"]').attr('data-post-id')
		];

		sessionStorage.setItem('userId', userId);
	});


	let userId = sessionStorage.getItem('userId');
	if(userId) {
		userId = userId.split(',');

		fetch(`https://decoblog-4df8b.firebaseio.com/${userId[0]}/${userId[1]}.json`)
		.then(response => response.json())
		.then(response => writeData(response))
	};


	function writeData (response) {
		$('#posts-category').html(response.category);
		$('#posts-title').html(response.title);
		$('#posts-name').html(response.name);
		$('#posts-date').html(response.date);
		$('#posts-icon').addClass(`icon-${response.icon}`)

		if(response.img === '#') {
			$('.icon-pinterest').css('display', 'none');
			$('#posts-img').parent().css('display', 'none');
		} else{
			$('#posts-img').attr('src', response.img);
		};

		$('.overlay').toggleClass('overlay_active');
	};
	//===ajax===



	//===header slider pretty===
	setTimeout(() => {
		$('.slider-item').css('display', 'block');
		$('.menu').css('display', 'block');
	}, 10);
	//===header slider pretty===



	//===menu__btn-position===
	function setPosition() {
		let windowWidth = document.documentElement.clientWidth;
		let navOffset = document.querySelector('.nav').offsetLeft;
		let menuBtn = document.querySelector('.menu__btn');
		let menuWidth = menuBtn.parentElement.offsetWidth;
		let menuOpen = false;

		if(windowWidth > 1505 && windowWidth < 2150) {
			menuBtn.style.left = navOffset + menuWidth + 'px';

			menuBtn.onclick = () => {
				if(menuOpen === false) {
					menuOpen = true;
					menuBtn.style.left = menuWidth - menuBtn.offsetWidth + 'px';
				} else{
					menuOpen = false;
					menuBtn.style.left = navOffset + menuWidth + 'px';
				};
			};
		};

		if(windowWidth > 2150) {
			menuBtn.style.left = navOffset + menuWidth + 'px';

			menuBtn.onclick = () => {
				if(menuOpen === false) {
					menuOpen = true;
					menuBtn.style.left = navOffset + 'px';
				} else{
					menuOpen = false;
					menuBtn.style.left = navOffset + menuWidth + 'px';
				};
			};
		};
	};
	setPosition();

	window.addEventListener('resize', () => {
		windowWidth = document.documentElement.clientWidth;
		setPosition();
	});
	//===menu__btn-position===
});