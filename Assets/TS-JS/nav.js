document.getElementById('login__button').addEventListener('click', function () {
    location.href = "/home/winston/Desktop/Generix/Generix/login.html";
});
document.getElementById("register__button").addEventListener('click', function () {
    location.href = "/home/winston/Desktop/Generix/Generix/register.html";
});
var header = document.getElementById("header__container");
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        header.style.position = "fixed";
        header.style.top = "0";
    }
    else {
        header.style.position = "absolute";
    }
};
