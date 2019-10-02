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
function submit(){
    var current=document.getElementById('current').value;
    var pass=document.getElementById('pass').value;
    var confirm=document.getElementById('confirm').value;
    if(current=="" || pass=="" || confirm==""){
        alert("Password Field Cannot Be Empty");
    }
    if(pass!=confirm){
        alert("Password Does not match");
    }
    else{
        var message;
        var xhr=new XMLHttpRequest();
        url='http://localhost:8080/password';
        xhr.open('POST',url);
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.send(JSON.stringify({"user":user,"current":current,"confirm":confirm}));
        xhr.onload=function(){
            if(this.status==200){
                alert("Password Succesfully Changed");
                window.location.href="dashboard.html";
            }
            else if(this.status==400){
                alert("Some Error Occured");
            }
            else{
                alert("Invalid Request");
            }
        };
    }

}
function logout(){
    document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    location="login.html";
}