const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');


burger.addEventListener('click', () => {
	burger.classList.toggle('toggle')

	nav.classList.toggle('nav-active')

})



const slider = document.querySelector('.cards-section');

let mySwiper;


if (slider !== null) {
	function mobileSlider() {
		if (window.innerWidth <= 1100 && slider.dataset.mobile == 'false') {
			mySwiper = new Swiper(slider, {
				slidesPerView: 'auto',
				// loop: true,
				// centeredSlides: true,	
				loop: false,
				slideClass: 'card',

			});
			slider.dataset.mobile = 'true';
		}

		if (window.innerWidth > 1100) {
			slider.dataset.mobile = 'false';
			if (slider.classList.contains('swiper-container-initialized')) {
				mySwiper.destroy();
			}
		}
	}

	mobileSlider()

	window.addEventListener('resize', () => {
		mobileSlider();
	});
}
