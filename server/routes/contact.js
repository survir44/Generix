var express=require('express');
var router=express.Router();

//Email
var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'generixteam2019@gmail.com',
		pass:'Lifeisgud'
	}
});

//Request Handler
router.post('/',(req,res)=>{
	var data=req.body;
	var mailOptions={
		from:'generixteam2019@gmail.com',
		to:'generixteam2019@gmail.com',
		subject:'Contact/Query',
		text:'Name:'+req.body.name+'\nEmail:'+req.body.email+'\nMessage:'+req.body.text
	};
	transporter.sendMail(mailOptions,function(error,info){
		if(error){
			console.log(error);
			res.status(400).send({"message":"Some Error Occured"});
		}
		else{
		console.log('Email sent:'+ info.response);
		res.status(200).send({"message":"Succesfully Submitted"});
		}
	});
});

module.exports=router;
