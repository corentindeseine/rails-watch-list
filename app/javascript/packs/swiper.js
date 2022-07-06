import Swiper, { Navigation } from 'swiper'
Swiper.use([Navigation])
import 'swiper/swiper-bundle.min.css'


document.addEventListener("turbolinks:load", () => {

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loop: false,

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // responsive
    breakpoints: {
      // when window width is >= 600px
      300: {
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        spaceBetween: -40,
        grabCursor: true,
        loop: false,
        centeredSlides: false

      },
      // when window width is >= 900px
      700: {
        slidesPerView: 2.2,
        slidesPerGroup: 2,
        grabCursor: true,
        loop: false,
        centeredSlides: false

      },
      // when window width is >= 1200px
      900: {
        slidesPerView: 4.2,
        slidesPerGroup: 4,
        grabCursor: false,
        loop: false,
        spaceBetween: 10,
        centeredSlides: false
      },

      // when window width is >= 1500px
      1500: {
        slidesPerView: 5.2,
        slidesPerGroup: 5,
        grabCursor: true,
        loop: false,
        spaceBetween: 0,
        centeredSlides: false
      },
    }
  });
})
