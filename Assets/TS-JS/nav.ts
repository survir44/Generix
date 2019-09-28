
document.getElementById('login__button').addEventListener('click',function(){
    if(document.getElementById('login__button').innerHTML=="Sign out"){
        document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        document.getElementById('login__button').innerHTML=="Sign-in"
        location.href="/home/winston/Desktop/Generix/Generix/login.html"
    }else{
        location.href="/home/winston/Desktop/Generix/Generix/login.html"
    }
})
document.getElementById("register__button").addEventListener('click',function(){
    if(document.getElementById("register__button").innerHTML!="Sign up"){

    }
    else[
        location.href="/home/winston/Desktop/Generix/Generix/register.html"
    ]  
})

function someCookie(name:String){
    document.getElementById('login__button').innerHTML="Sign out"
    document.getElementById('register__button').innerHTML="Welcome "+ name + "!"
}

var x=document.cookie;
var check:Boolean=false
if(x!=null){
    var dem=x.split(";")
    for (var i of dem){
        if(i.search("username") == 0){
            someCookie(i.substring(i.indexOf('=')+1))
            check=true
            break
        }
    }
        
    if(check==false){
        document.getElementById('login__button').innerHTML="Sign-in"
        document.getElementById('register__button').innerHTML="Sign up"
    }
}
else{
    document.getElementById('login__button').innerHTML="Sign-in"
    document.getElementById('register__button').innerHTML="Sign up"
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