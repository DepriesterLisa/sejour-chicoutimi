window.addEventListener('DOMContentLoaded', function() {

	var mySwiper = new Swiper ('.main-slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
    });

    var mySwiper = new Swiper ('.secondary-slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
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