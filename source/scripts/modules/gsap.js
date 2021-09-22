import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// анимация блока results

const galleryItems = document.querySelectorAll('.js-results-gsap-item');

galleryItems.forEach((item,i) => {
    i%2 === 0 ?

        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top center"
            },
            y: -90,
            duration: 1,
            delay: 0.1 * i

        })

    : i === 1 ?

        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top center"
            },
            y: -185,
            duration: 1,
            delay: 0.2 * i
        })

    : null
});

// анимация блока service

const serviceItems = document.querySelectorAll('.js-service-gsap-item');

serviceItems.forEach((item,i) => {
    item.style.opacity = 0;

    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "20% 80%"
        },
        opacity: 1, 
        duration: 0.3,
        delay: 0.1 * i
    })
})
