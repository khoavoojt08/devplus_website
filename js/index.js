const swiperCourse = new Swiper('.swiper-course', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 80,
        },
        480: {
            slidesPerView: 1, // Set to 1 slide per view when the viewport width is 640px or less
            spaceBetween: 20 // Optional: you can also adjust the space between slides here
        },

        // when window width is <= 640px
        640: {
            slidesPerView: 1, // Set to 1 slide per view when the viewport width is 640px or less
            spaceBetween: 20 // Optional: you can also adjust the space between slides here
        },

        1024: {
            slidesPerView: 2, // Set to 1 slide per view when the viewport width is 640px or less
            spaceBetween: 20 // Optional: you can also adjust the space between slides here
        },

        1200: {
            slidesPerView: 3, // Set to 1 slide per view when the viewport width is 640px or less
            spaceBetween: 20 // Optional: you can also adjust the space between slides here
        },









    }
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});
