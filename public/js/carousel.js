import { showAlertMessage } from './showAlert.js'

const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 60,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.js-button-next',
      prevEl: '.js-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      576: {
        // autoplay: false,
      }
    }
});