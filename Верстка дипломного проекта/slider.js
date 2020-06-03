
var mySwiper = new Swiper ('.swiper-container', {
  
	slidesPerView: 1,
	spaceBetween: 5,
    loop:true,
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  
   breakpoints: {
    // when window width is >= 480px
    767: {
      slidesPerView:2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1360: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})