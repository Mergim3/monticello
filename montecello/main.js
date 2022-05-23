
const swiper = new Swiper('.monticello-slider', {
  direction: 'vertical',
  loop: true,
  
  pagination: {
    el: '.swiper-pagination ',
  },

});


const swiperTwo = new Swiper(".newsswipetwo", {
  slidesPerView: 3,
  spaceBetween:20,
  centeredSlider: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel:true,
  keyboard:true,
});



