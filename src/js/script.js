function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
});



/*Мобильное меню*/
let openMenu = document.querySelector(".burger-button");
let closeMenu = document.querySelector(".close-button");
let siteNav = document.querySelector(".main-header .main-nav");



/*Открытие меню по клику на бургер*/
openMenu.onclick = function () {
    siteNav.classList.add("main-nav--opened");
};

closeMenu.onclick = function () {
    siteNav.classList.remove("main-nav--opened");
};