
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

var x=document.cookie;
if(x!=null){
    var ind=x.search('username')
    if(ind==-1){
        document.getElementById('login__button').innerHTML="Sign-in"
        document.getElementById('register__button').innerHTML="Sign up"
    }else{
        document.getElementById('login__button').innerHTML="Sign out"
        document.getElementById('register__button').innerHTML="Welcome "+ x.substring(x.indexOf('=')+1) + "!"
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