var swiper = new Swiper('.testimonial', {
	slidesPerView: 1,
	spaceBetween: 10,
	// using "ratio" endpoints
	breakpoints: {
		'@0.75': {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		'@1.00': {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		'@1.50': {
			slidesPerView: 2,
			spaceBetween: 70,
		},
	},
	autoplay: {
		delay: 2000,
	},
	loop: true,
	effect: 'slide',
	pagination: {
		el: '.swiper-pagination',
	},
	
});


var swiper = new Swiper('.brands', {
    slidesPerView: 4,
	spaceBetween: 20,
	loop: true,
	autoplay: {
		delay: 1000,
	},
	breakpoints: {
		'@0.75': {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		'@1.00': {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		'@1.50': {
			slidesPerView: 6,
			spaceBetween: 40,
		},
	},
  });
















/* 
const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 2000,
	  },
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  }); */