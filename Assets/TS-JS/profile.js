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
        document.getElementById("name").value=message.name;
        document.getElementById("username").value=message._id;
        document.getElementById("DOB").value=message.DOB;
        document.getElementById("number").value=message.mobile_no;
        document.getElementById("email").value=message.email;
        document.getElementById("address").value=message.address;
    }
    else if(this.status==400){
        alert("Error");
    }
    else{
        alert("Invalid Request");
    }
};
xhr.send(JSON.stringify({"id":user}));

function upload(){
    document.getElementById("upload").submit();
}

function edit(){
    document.getElementById("myfieldset1").disabled=false;
    document.getElementById("myfieldset2").disabled=false;
}

function submit(){
    var name=document.getElementById("name").value;
    var username=document.getElementById("username").value;
    var dob=document.getElementById("DOB").value;
    var gender=document.getElementById("gender").value;
    var email=document.getElementById("email").value;
    var number=document.getElementById("number").value;
    var address=document.getElementById("address").value;

    var xhr=new XMLHttpRequest();
    var url="http://localhost:8080/dashboard/profile";
    xhr.open("POST",url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify({"name":name,"user":username,"dob":dob,"gender":gender,"email":email,"number":number,"address":address}));
    xhr.onload=function(){
        if(this.status==200){
            alert("Succesfully Updated");
            window.location.href="dashboard.html";
        }
        else if(this.status==400){
            alert("error");
        }
        else{
            alert("Invalid Request");
        }
    };
    
}