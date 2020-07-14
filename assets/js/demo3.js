var galleryTop = new Swiper('.gallery-top', {
    speed: 1000,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // loop: true,
    // loopedSlides: 4
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    speed: 1000,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: '3',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    // loop: true,
    // loopedSlides: 1
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;