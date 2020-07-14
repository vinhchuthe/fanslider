// Swiper
var swiper = new Swiper('.swiper-container', {
    speed: 1500,
    slidesPerView: '1',
    // centeredSlides: true,
    // freeMode: true,
    mousewheel: true,
});

// // slide nav
var theta = [];

var setup = function (n, r, id) {
    var main = document.getElementById(id);
    var mainHeight = parseInt(window.getComputedStyle(main).height.slice(0, -2));
    var circleArray = [];
    var data = ['Welcome', 'Primitivo', 'Negroamaro', 'Fiano', 'Rosalento', 'Nerisco', 'Nicolaus', 'Celestiaco', 'Olio'];

    for (var i = 0; i < n; i++) {
        var circle = document.createElement('div');
        circle.className = 'nav-item item' + i;
        circleArray.push(circle);
        circleArray[i].posx = Math.round(r * (Math.cos(theta[i]))) + 'px';
        circleArray[i].posy = Math.round(r * (Math.sin(theta[i]))) + 'px';
        circleArray[i].style.position = "absolute";
        circleArray[i].innerHTML = data[i];
        circleArray[i].setAttribute("link-id", data[i]);
        // circleArray[i].style.transform = "rotate("+ deg +"deg)";
        // circleArray[i].style.backgroundColor = colors[i];
        circleArray[i].style.top = ((mainHeight / 2) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px';
        circleArray[i].style.left = ((mainHeight / 2) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px';
        main.appendChild(circleArray[i]);
    }
};

var generate = function (n, r, id) {
    var frags = 180 / n;
    for (var i = 0; i <= n; i++) {
        theta.push((frags / 130) * i * Math.PI);
    }
    setup(n, r, id)
}
var dk = $("#list-nav").width(),
    bk = dk / 2;
console.log(bk, dk);
generate(9, bk, 'list-nav');

