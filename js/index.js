const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});