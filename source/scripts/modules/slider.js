import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);

const slider = document.querySelector('.swiper-container');

if(slider) {
    new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      slideToClickedSlide: true,

      navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
      },
    });
}
