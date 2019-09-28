var express=require('express');
var router=express.Router();

//MongoDb Connection
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";
var dbo;
MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(err,db){
	if(err)
	console.log("Not Connected To MongoDB!!!!");
	else{
		console.log("Connected To MongoDB!!!!");
		dbo= db.db("generix");
	}
	db.close();
});

//Request Handler
router.post('/',(req,res) =>{
	var user=req.body.id;
	console.log(user);
	dbo.collection("user").find({"_id":user}).toArray(function(err,result){
	   	 if (err){
			console.log("Error");
			res.sendStatus(400);
		}
		else{
			res.status(200).send(result[0]);
		}
	});
});

module.exports=router;
