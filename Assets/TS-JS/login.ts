
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
                alert(message.msg)
                location.href="dashboard.html"
            }
            else if(this.status == 400){
                message=JSON.parse(this.responseText)
                alert(message.msg)
            }
            else{
                alert("incorrect request")
            }
        }
        xhr.send(JSON.stringify({ _id:name1,password:pass1}));
        (<HTMLInputElement>document.getElementById('name')).value="";
        (<HTMLInputElement>document.getElementById('pass')).value="";

    }
}) 