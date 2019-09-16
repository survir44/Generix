class Info{
    readonly username:string;
    readonly email:string;
    readonly password:string
    constructor(name:string,email:string,pass:string){
        this.username=name;
        this.email=email;
        this.password=pass
    }

    sendDataToRegisterApi(){
        var url:string="http://localhost:8080/register"
        var xhr:XMLHttpRequest=new XMLHttpRequest()
        xhr.open('POST',url,true)
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.send(JSON.stringify({_id:this.username,password:this.password,email_id:this.email}))
        alert({"Successfull":"Registerd Successfull"})
    }

    emptyFields(){
        (<HTMLInputElement>document.getElementById('name')).value="";
        (<HTMLInputElement>document.getElementById('email')).value="";
        (<HTMLInputElement>document.getElementById('pass')).value="";
        (<HTMLInputElement>document.getElementById('conpass')).value="";
    }
}

document.getElementById('but').addEventListener('click',function(){
    var name:string=(<HTMLInputElement>document.getElementById('name')).value
    var email:string=(<HTMLInputElement>document.getElementById('email')).value
    var pass:string=(<HTMLInputElement>document.getElementById('pass')).value
    var conpass:string=(<HTMLInputElement>document.getElementById('conpass')).value
    var data=new Info(name,email,pass)
    var flag=validate(name,email,pass,conpass,data)
    if (flag==true){
        var data=new Info(name,email,pass)
        data.sendDataToRegisterApi();
        data.emptyFields()
    }
    
})

function validate(name:string,email:string,pass:string,conpass:string,data:Info):boolean{
    if (name == "" ) {
        alert("Error : username field is empty");
        return false;
    }
    if (email == "" ) {
        alert("Error : email field is empty");
        return false;
    }
    if (pass == "" ) {
        alert("Error : password field is empty");
        return false;
    }
    if (conpass == "") {
        alert("Error : confirm password field is empty");
        return false;
    }
    if(name.length<5|| name.length>12){
        alert("Error : The text in username field must have length between 5 to 12 characters");
        data.emptyFields()
        return false
    }
    if(pass.length<5 || pass.length>12){
        alert("Error : The text in password fields must have length between 5 to 12 characters");
        data.emptyFields()
        return false
    }
    if(conpass.length<5 || conpass.length>12){
        alert("Error : The text in confirm password fields must have length between 5 to 12 characters");
        data.emptyFields()
        return false
    }    
    if(pass!=conpass){
        alert("Error :Password fields do not match each other");
        (<HTMLInputElement>document.getElementById('pass')).value="";
        (<HTMLInputElement>document.getElementById('conpass')).value="";
        return false
    }
    return true
}