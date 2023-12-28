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



/*Проверка ширины экрана*/
function checkScreen() {
    let windowWidth = document.documentElement.clientWidth; // ширина окна за вычетом полосы прокрутки
    console.log(windowWidth);

    if (windowWidth < 1060) {
        /* Когда пользователь прокручивает вниз, скрыть навигационную панель. Когда пользователь прокручивает вверх, показать навигационную панель */
        var prevScrollpos = window.pageYOffset;
        
        window.onscroll = function() {

        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
            console.log(prevScrollpos);
        } else {
            document.getElementById("header").style.top = "-75px";
            console.log(prevScrollpos);
        }

        prevScrollpos = currentScrollPos;
        
        }
    } else {
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        var heightHeader = 170;

        if (heightHeader > currentScrollPos) {
            document.getElementById("nav").style.top = (heightHeader-currentScrollPos) + "px";
            console.log(prevScrollpos);
        } else {
            document.getElementById("nav").style.top = "0";
            console.log(prevScrollpos);
        }
        prevScrollpos = currentScrollPos;
        
        }
    }
};

checkScreen();






