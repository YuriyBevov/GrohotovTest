import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);

const slider = document.querySelector('.swiper-container');

if(slider) {
    new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: '20',

        pagination: {
            el: ".swiper-pagination",
        },
    });
}
