var swiper = new Swiper(".offer_swiper", {
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
    clickable: true
  },
});

var swiper = new Swiper(".banner_swiper", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".banner_button_next",
    prevEl: ".banner_button_prev",
    clickable: true
  },
});