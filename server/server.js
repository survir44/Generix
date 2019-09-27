var app =require('./app');
var cors=require('cors');
app.use(cors());

app.get('/',(req,res) =>{
	return res.send("Welcome To Generix");
});

//Port activation
app.listen(8080,(req,res) =>{
	console.log("Listening to port 8080");
});
