document.getElementById('login-close').addEventListener('click',function(){
    document.getElementById('login-content').style.display="none"
})
document.getElementById('login-button').addEventListener('click',function(){
    document.getElementById('login-content').style.display="inline-block";
})
document.getElementById('login-login').addEventListener('click',function(){
    var name1:string=(<HTMLInputElement>document.getElementById('name')).value
    var pass1:string=(<HTMLInputElement>document.getElementById('pass')).value
    if (name1 == "" && pass1 == ""){
        alert("Error : Username and Password is empty")
    }
    else if(name1 == ""){
        alert("Error : Username is empty")
    }
    else if(pass1 == ""){ 
        alert("Error : Password is empty")
    }
    else{
        var message:any
        var xhr:XMLHttpRequest=new XMLHttpRequest()
        var url:string="http://localhost:8080/login"
        xhr.open("POST",url,true)
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.onload=function(){
            if(this.status ==200){
                message=JSON.parse(this.responseText)
                alert(message.message)
                window.location.href="index.html"
            }
            else if(this.status == 400){
                message=JSON.parse(this.responseText)
                alert(message.message)
            }
            else{
                alert("incorrect request")
            }
        }
        xhr.send(JSON.stringify({ _id:name1,password:pass1}));
        document.getElementById('login-content').style.display = "none";
        (<HTMLInputElement>document.getElementById('name')).value="";
        (<HTMLInputElement>document.getElementById('pass')).value="";

    }    
})
document.getElementById("register__button").addEventListener('click',function(){
    location.href="/home/winston/Desktop/html/frontend/Html/register.html"
})

var header:HTMLElement=document.getElementById("header__container")
window.onscroll=function(){
    if(window.pageYOffset > 100){
        header.style.position="fixed"
        header.style.top="0"
    }else{
        header.style.position="absolute";
    }
}