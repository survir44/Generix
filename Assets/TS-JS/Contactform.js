document.getElementById('contact-button').addEventListener('click', function () {
    var fullName = document.getElementById('full-name').value;
    var contactEmail = document.getElementById('contact-email').value;
    var queryBox = document.getElementById('query-box').value;
    if (!fullName || !contactEmail || !queryBox) {
        alert("Please fill in all the details for us to respond as fast as possible");
    }
    else {
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        var result = regexp.test(contactEmail);
        if (result == false) {
            alert("Error : Enter a valid email-id");
        }
        else {
            var url = "http://localhost:8080/contact";
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({ name: fullName, email: contactEmail, text: queryBox }));
            alert("Message has been sent");
        }
    }
    document.getElementById('full-name').value="";
    document.getElementById('contact-email').value="";
    document.getElementById('query-box').value="";
});
