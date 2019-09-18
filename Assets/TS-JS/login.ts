 document.getElementById('login-btn').addEventListener('click',function(){
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