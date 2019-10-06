$(document).ready(function(){
     $("#some").load("http://localhost:8090/assets/nav.html",function(){
        console.log("method was performed")
  })
  $("#some1").load("http://localhost:8090/assets/footer.html",function(){
        console.log("footer was loaded")
  })
  
})
