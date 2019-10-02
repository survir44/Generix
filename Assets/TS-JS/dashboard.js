var x = document.cookie;
var check = false;
if (x != null) {
    var dem = x.split(";");
    for (var _i = 0, dem_1 = dem; _i < dem_1.length; _i++) {
        var i = dem_1[_i];
        if (i.search("username") == 0) {
            var user=i.substring(i.indexOf('=') + 1);
            console.log(user);
            check = true;
            break;
        }
    }
}
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
xhr.send(JSON.stringify({"id":user}));
function logout(){
    document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    location="login.html";
}
