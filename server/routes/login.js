var express = require('express');
var router= express.Router();

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

//Hashing
const bcrypt=require('bcryptjs');

//Request Handler
router.post('/',(req,res) =>{
	var user=req.body._id;
	var pass=req.body.password;
	dbo.collection("user").find({"_id":user}).toArray(function(err,result){
	   	 if (err){
			console.log("Error");
			res.status(400).send({"message":"Some Error Occured"});
		}
		else{
			if(result.length>0){
				bcrypt.compare(pass,result[0].password,function(error,rest){
					if(rest==true){
						console.log("SucesFully Logged IN");					
						res.status(200).send({"message":"Succesfully Logged IN"});
					}
					else{
						console.log("Username Or Password Error");
						res.status(400).send({"message":"Username Or Password Invalid"});
					}
				});
			}
			else{
				console.log("Username Does Not Exist");
				res.status(400).send({"message":"Username Does Not Exist"});
			}
		}
	});
});

module.exports=router;
