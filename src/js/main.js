window.addEventListener('DOMContentLoaded', function() {
console.log('test');
	var mySwiper = new Swiper ('.main-slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			768: {
		      slidesPerView: 1,
		    }
		}
    });

    var mySwiper = new Swiper ('.secondary-slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		autoHeight: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
    });

	var burgerMenu = document.querySelector('.burger-menu'),
		navigation = document.querySelector('.navigation');

    burgerMenu.addEventListener('click', function() {
    	navigation.classList.toggle('open');
    })

});