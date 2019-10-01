var Info = /** @class */ (function () {
    function Info(name, email, pass,fullname) {
        this.username = name;
        this.email = email;
        this.password = pass;
        this.fullname=fullname;
    }
    Info.prototype.sendDataToRegisterApi = function () {
        var message;
        var url = "http://localhost:8080/register";
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (this.status == 200) {
                message = JSON.parse(this.responseText);
                getAlert(message.status, message.status.charAt(0).toUpperCase() + message.status.slice(1),message.message)
                
            }
            else if (this.status == 400) { 
                message = JSON.parse(this.responseText);
                getAlert(message.status, message.status.charAt(0).toUpperCase() + message.status.slice(1),message.message)
               
            }
            else {
                getAlert("error","Error","Some error")
            }
        };
        xhr.onerror=function(){
            getAlert('info',"","Check your network or try again later")
        }
        xhr.send(JSON.stringify({ username: this.username, password: this.password, email_id: this.email,name:this.fullname }));
    };
    Info.prototype.emptyFields = function () {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('pass').value = "";
        document.getElementById('conpass').value = "";
    };
    return Info;
}());
document.getElementById('but').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var fullname= document.getElementById('fullname').value;
    var data = new Info(name, email, pass);
    var flag = validate(name, email, pass, conpass, data);
    if (flag == true) {
        var data = new Info(name, email, pass,fullname);
        data.sendDataToRegisterApi();
        data.emptyFields();
    }
});

function getAlert(typ,status,message){
    Swal.fire({
        type: typ,
        title: status,
        text: message
      })
}
function validate(name, email, pass, conpass, data) {
    if (name == "") {
        getAlert("error","Error","Username field is empty")
        return false;
    }
    if (email == "") {
        getAlert("error","Error","Email field is empty")
        return false;
    }
    if (pass == "") {
        getAlert("error","Error","Password field is empty")
        return false;
    }
    if (conpass == "") {
        getAlert("error","Error","Confirm password field is empty")
        return false;
    }
    if (name.length < 5 || name.length > 12) {
        getAlert("error","Error","The text in username field must have length between 5 to 12 characters")
        data.emptyFields();
        return false;
    }
    if (pass.length < 5 || pass.length > 12) {
        getAlert("error","Error","The text in password field must have length between 5 to 12 characters")
        data.emptyFields();
        return false;
    }
    if (conpass.length < 5 || conpass.length > 12) {
        getAlert("error","Error","The text in confirm-password field must have length between 5 to 12 characters")
        data.emptyFields();
        return false;
    }
    if (pass != conpass) {
        getAlert("error","Error","Password and Confirm password do not match each other")
        document.getElementById('pass').value = "";
        document.getElementById('conpass').value = "";
        return false;
    }
    return true;
}

$(document).ready(function(){
    $("input[type=text]").focus(function(){
        $(".register-cont").css("border-bottom", "2px solid blue");
    })
    $("input[type=text]").focusout(function(){
        $(".register-cont").css("border-bottom", "2px solid grey");
    })
    $("input[type=email]").focus(function(){
        $(".register-cont1").css("border-bottom", "2px solid blue");
    })
    $("input[type=email]").focusout(function(){
        $(".register-cont1").css("border-bottom", "2px solid grey");
    })
    $("input[type=password]").focus(function(){
        $(".register-cont2").css("border-bottom", "2px solid blue");
    })
    $("input[type=password").focusout(function(){
        $(".register-cont2").css("border-bottom", "2px solid grey");
    })

})
