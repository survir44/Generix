var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: false }));

var db;

app.post('/',function(req, res) {
	//var name=req.body.UserName;
	MongoClient.connect(url, function(err, client) {
		console.log("Connected");
		db = client.db('generix');
		var data;
		db.collection('Employee').find().toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			//console.log(result[1].username);
			//arr = result;
			res.status(200).send(result);
			client.close();
		});
	});
});

app.listen(8080, (req, res) => {
    console.log("Listening on 8080");
});
