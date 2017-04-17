$(document).ready(function() {

	// ВЫравнивание блоков по высоте
	//$(".service-item h4").equalHeights(); 

	// toggle menu
	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".menu").slideToggle();
		return false;
	});


	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	//Слайдер  https://gist.github.com/KudelAndrei/fca3e6e73e1e0aa21996a12af58c9069
	$(".sl-header").slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.sl-nav',
		prevArrow: '<div class="sl-arrow sl-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', 
		nextArrow: '<div class="sl-arrow sl-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>', 
		responsive: [
			{
				breakpoint: 880,
				settings: {
					arrows: false
				}
			}
		]
	});
	// навигация по верхнему слайдеру
	$(".sl-nav").slick({
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.sl-header',
		centerMode: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1100,
			settings: {
				arrows: false,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 700,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}]
	});

	// слайдер portfolio
	$(".sl-portfolio").slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="sl-arrow sl-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', 
		nextArrow: '<div class="sl-arrow sl-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>', 
		responsive: [
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					arrows: false,
					slidesToShow: 2
				},
			},
			{
				breakpoint: 500,
				settings: {
					arrows: false,
					slidesToShow: 1
				},
			}
		]
	});
	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};



});
