// Swiper
var swiper = new Swiper('.swiper-container', {
    speed: 1500,
    slidesPerView: '1',
    // centeredSlides: true,
    // freeMode: true,
    mousewheel: true,
    on: {
        slideNextTransitionStart: function () {
            var r = swiper.activeIndex,
                sl = swiper.slides.length,
                deg = 360 / sl;
            TweenMax.to($("#nav-svg"), 1, { rotation: deg * r });
        },
        slidePrevTransitionStart: function () {
            var r = swiper.activeIndex,
                sl = swiper.slides.length,
                deg = 360 / sl;
            TweenMax.to($("#nav-svg"), 1, { rotation: deg * r });
        }
    }
});
