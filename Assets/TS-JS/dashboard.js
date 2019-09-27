var message;
var xhr=new XMLHttpRequest();
var url="http://localhost:8080/dashboard";
xhr.open("POST",url);
xhr.setRequestHeader('Content-Type','application/json');
xhr.onload=function(){
    if(this.status==200){
        message=JSON.parse(this.responseText);
        //alert(typeof(message.name));
        document.getElementById("name").innerHTML="Welcome "+message.name;
        document.getElementById("name1").innerHTML="Name:"+message.name;
        document.getElementById("email").innerHTML="Email:"+message.email;
    }
    else if(this.status==400){
        alert("Error");
    }
    else{
        alert("Invalid Request");
    }
};
xhr.send(JSON.stringify({"id":"100rabh_yadav98"}));