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
        xhr.send(JSON.stringify({"user":"100rabh_yadav98","current":current,"confirm":confirm}));
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