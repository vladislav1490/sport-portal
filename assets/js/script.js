document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.header__nav');
    const body = document.querySelector('body');

    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            navMenu.classList.toggle('is-open');
            body.classList.toggle('lock-scroll');
        });
    }

    const authorsSlider = new Swiper('.authors-slider', {
        enabled: window.innerWidth < 768,
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    const promoBannerSlider = new Swiper('.promo-banner-slider', {
        loop: true,
        effect: 'fade',
        speed: 1500,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        allowTouchMove: true,
    });

    const extremeSlider = new Swiper('.extreme-slider', {
        loop: true,
        effect: 'fade',
        speed: 1500,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        allowTouchMove: true,
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            if (!authorsSlider.enabled) {
                authorsSlider.enable();
                authorsSlider.update();
            }
        } else {
            if (authorsSlider.enabled) {
                authorsSlider.disable();
            }
        }
    });

});