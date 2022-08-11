import Swiper, { Navigation } from 'swiper'
Swiper.use([Navigation])
import 'swiper/swiper-bundle.min.css'


document.addEventListener("turbolinks:load", () => {

  new Swiper(".swiper-container-list", {

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
        loop: false,
        centeredSlides: false,

      },
      // when window width is >= 900px
      700: {
        slidesPerView: 1,
        slidesPerGroup: 2,
        loop: false,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',

      },
      // when window width is >= 1200px
      900: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: false,
        centeredSlides: true,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',

      },

      // when window width is >= 1500px
      1500: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: false,
        spaceBetween: 0,
        centeredSlides: false,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',


      },
    }
  });

  new Swiper(".swiper-container-now-playing", {

    navigation: {
      prevEl: '.button-prev-now',
      nextEl: '.button-next-now',
    },

    breakpoints: {
      // when window width is >= 600px
      300: {
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        spaceBetween: -40,
        loop: false,
        centeredSlides: false

      },
      // when window width is >= 900px
      700: {
        slidesPerView: 2.2,
        slidesPerGroup: 2,
        loop: false,
        centeredSlides: false,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',

      },
      // when window width is >= 1200px
      900: {
        slidesPerView: 4.2,
        slidesPerGroup: 4,
        loop: false,
        spaceBetween: 10,
        centeredSlides: false,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
      },

      // when window width is >= 1500px
      1500: {
        slidesPerView: 5.2,
        slidesPerGroup: 5,
        loop: false,
        spaceBetween: 0,
        centeredSlides: false,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
      },
    }
  });

  new Swiper(".swiper-container-popular", {

    navigation: {
      prevEl: '.button-prev-popular',
      nextEl: '.button-next-popular',
    },

    breakpoints: {
      // when window width is >= 600px
      300: {
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        spaceBetween: -40,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        loop: false,
        centeredSlides: false

      },
      // when window width is >= 900px
      700: {
        slidesPerView: 2.2,
        slidesPerGroup: 2,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        loop: false,
        centeredSlides: false

      },
      // when window width is >= 1200px
      900: {
        slidesPerView: 4.2,
        slidesPerGroup: 4,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        loop: false,
        spaceBetween: 10,
        centeredSlides: false
      },

      // when window width is >= 1500px
      1500: {
        slidesPerView: 5.2,
        slidesPerGroup: 5,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        loop: false,
        spaceBetween: 0,
        centeredSlides: false
      },
    }
  });

  new Swiper(".swiper-container-rated", {

    navigation: {
      prevEl: '.button-prev-rated',
      nextEl: '.button-next-rated',
    },

    breakpoints: {
      // when window width is >= 600px
      300: {
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        spaceBetween: -40,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        loop: false,
        centeredSlides: false

      },
      // when window width is >= 900px
      700: {
        slidesPerView: 2.2,
        slidesPerGroup: 2,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        loop: false,
        centeredSlides: false

      },
      // when window width is >= 1200px
      900: {
        slidesPerView: 4.2,
        slidesPerGroup: 4,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        loop: false,
        spaceBetween: 10,
        centeredSlides: false
      },

      // when window width is >= 1500px
      1500: {
        slidesPerView: 5.2,
        slidesPerGroup: 5,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        loop: false,
        spaceBetween: 0,
        centeredSlides: false
      },
    }
  });
})
