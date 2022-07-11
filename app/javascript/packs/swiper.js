import Swiper, { Navigation } from 'swiper'
Swiper.use([Navigation])
import 'swiper/swiper-bundle.min.css'


document.addEventListener("turbolinks:load", () => {

  new Swiper(".swiper-container-list", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loop: false,

    navigation: {
      prevEl: '.button-prev-like',
      nextEl: '.button-next-like',
    },

    // responsive
    breakpoints: {
      // when window width is >= 600px
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grabCursor: true,
        loop: false,
        centeredSlides: false

      },
      // when window width is >= 900px
      700: {
        slidesPerView: 1,
        slidesPerGroup: 2,
        grabCursor: true,
        loop: false,
        centeredSlides: false

      },
      // when window width is >= 1200px
      900: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grabCursor: true,
        loop: false,
        centeredSlides: true
      },

      // when window width is >= 1500px
      1500: {
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        grabCursor: true,
        loop: false,
        spaceBetween: 0,
        centeredSlides: false
      },
    }
  });

  new Swiper(".swiper-container-now-playing", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loop: false,

    navigation: {
      prevEl: '.button-prev-now',
      nextEl: '.button-next-now',
    },

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
        grabCursor: true,
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

  new Swiper(".swiper-container-popular", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loop: false,

    navigation: {
      prevEl: '.button-prev-popular',
      nextEl: '.button-next-popular',
    },

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

  new Swiper(".swiper-container-rated", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loop: false,

    navigation: {
      prevEl: '.button-prev-rated',
      nextEl: '.button-next-rated',
    },

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
