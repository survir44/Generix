document.getElementById('login__button').addEventListener('click', function () {
    if (document.getElementById('login__button').innerHTML == "Sign out") {
        document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        document.getElementById('login__button').innerHTML == "Sign-in";
        location.href = "login.html";
    }
    else {
        location.href = "login.html";
    }
});
document.getElementById("register__button").addEventListener('click', function () {
    if (document.getElementById("register__button").innerHTML != "Sign up") {
    }
    else
        [
            location.href = "register.html"
        ];
});
function someCookie(name) {
    document.getElementById('login__button').innerHTML = "Sign out";
    document.getElementById('register__button').innerHTML = "Welcome " + name + "!";
}
var x = document.cookie;
var check = false;
if (x != null) {
    var dem = x.split(";");
    for (var _i = 0, dem_1 = dem; _i < dem_1.length; _i++) {
        var i = dem_1[_i];
        if (i.search("username") == 0) {
            someCookie(i.substring(i.indexOf('=') + 1));
            check = true;
            break;
        }
    }
    if (check == false) {
        document.getElementById('login__button').innerHTML = "Sign-in";
        document.getElementById('register__button').innerHTML = "Sign up";
    }
}
else {
    document.getElementById('login__button').innerHTML = "Sign-in";
    document.getElementById('register__button').innerHTML = "Sign up";
}
/* var header:HTMLElement=document.getElementById("header__container")
window.onscroll=function(){
    if(window.pageYOffset > 100){
        header.style.position="fixed"
        header.style.top="0"
    }else{
        header.style.position="absolute";
    }
} */ 
