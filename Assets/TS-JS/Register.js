var Info = /** @class */ (function () {
    function Info(name, email, pass) {
        this.username = name;
        this.email = email;
        this.password = pass;
    }
    Info.prototype.sendDataToRegisterApi = function () {
        var url = "http://localhost:8080/register";
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ _id: this.username, password: this.password, email_id: this.email }));
        alert({ "Successfull": "Registerd Successfull" });
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
    var data = new Info(name, email, pass);
    var flag = validate(name, email, pass, conpass, data);
    if (flag == true) {
        var data = new Info(name, email, pass);
        data.sendDataToRegisterApi();
        data.emptyFields();
    }
});
function validate(name, email, pass, conpass, data) {
    if (name == "") {
        alert("Error : username field is empty");
        return false;
    }
    if (email == "") {
        alert("Error : email field is empty");
        return false;
    }
    if (pass == "") {
        alert("Error : password field is empty");
        return false;
    }
    if (conpass == "") {
        alert("Error : confirm password field is empty");
        return false;
    }
    if (name.length < 5 || name.length > 12) {
        alert("Error : The text in username field must have length between 5 to 12 characters");
        data.emptyFields();
        return false;
    }
    if (pass.length < 5 || pass.length > 12) {
        alert("Error : The text in password fields must have length between 5 to 12 characters");
        data.emptyFields();
        return false;
    }
    if (conpass.length < 5 || conpass.length > 12) {
        alert("Error : The text in confirm password fields must have length between 5 to 12 characters");
        data.emptyFields();
        return false;
    }
    if (pass != conpass) {
        alert("Error :Password fields do not match each other");
        document.getElementById('pass').value = "";
        document.getElementById('conpass').value = "";
        return false;
    }
    return true;
}
