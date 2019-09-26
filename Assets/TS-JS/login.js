function getAlert(typ,status,message){
    Swal.fire({
        type: typ,
        title: status,
        text: message
      })
}
    document.getElementById('login-btn').addEventListener('click', function () {
    var name1 = document.getElementById('name').value;
    var pass1 = document.getElementById('pass').value;
    if (name1 == "" && pass1 == "") {        
        getAlert("error","Error","Username field and Password Fields are empty")
    }
    else if (name1 == "") {
        getAlert("error","Error","Username field is empty")
   
    }
    else if (pass1 == "") {
        getAlert("error","Error","Password field is empty")
    }
    else {
        var message;
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:8080/login";
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (this.status == 200) {
                message = JSON.parse(this.responseText);
                getAlert(message.status, message.status.charAt(0).toUpperCase() + message.status.slice(1),message.message)
                document.cookie="username="+name1+";";
                setTimeout(function(){
                    location="index.html"
                },1500)
                
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
        xhr.send(JSON.stringify({ username: name1, password: pass1 }));
        document.getElementById('name').value = "";
        document.getElementById('pass').value = "";
    }
});
