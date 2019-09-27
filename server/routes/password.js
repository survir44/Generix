var express=require('express');
var router=express.Router();

//Hashing
const bcrypt=require('bcryptjs');
const saltRounds=10;

//MongoDb Connection
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
var dbo;
MongoClient.connect(url,{useNewUrlParser: true,useUnifiedTopology: true},function(err,db){
	if(err){
		console.log("Not Connected To MongoDb!!!!");
	}
	else{
		console.log("Connected To MongoDb!!!!");
		dbo=db.db("generix");
	}
	db.close();
});

//Request Handler
router.post('/',(req,res)=>{
	var user=req.body.user;
	var current=req.body.current;
	var confirm=req.body.confirm;

	dbo.collection("user").find({"_id":user}).toArray(function(err,result){
		if (err){
			console.log("Error");
			res.status(400).send({"message":"USer Does Not Exist"});
		}
		else{
			bcrypt.compare(current,result[0].password,function(error,rest){
				if(rest!=true){
					console.log("Password Didn't match");
					res.sendStatus(400);					
				}
				else{
					bcrypt.hash(confirm,saltRounds,function(er,hash){
						if(er){
							console.log("Hashing Error");
							res.status(400).send({"message":"Some Error Occured"});
						}
						else{
							var myquery={"_id":user};
							var newvalues={$set:{"password":hash}};
							dbo.collection("user").updateOne(myquery,newvalues,function(e,fields){
								if(e){
									console.log("Update Error");
									res.sendStatus(400);
								}
								else{
									console.log("Succesfully Updated");
									res.sendStatus(200);
								}
							});
						}
					});
				}
			});
		}
	});
});

module.exports=router;		
