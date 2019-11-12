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
var name;

/*MongoClient.connect(url, function(err, client) {
	console.log("Connected");
	db = client.db('generix');
	//cursor = db.collection('testdb').find();
	/*cursor.each(function(err, doc) {
		console.log(doc);
	});
});*/

app.post('/product',function(req, res) {
	console.log(req.body);
	name=req.body.UserName;
	//console.log(name);
	MongoClient.connect(url, function(err, client) {
		console.log("Connected");
		db = client.db('generix');
		var data;
		db.collection('profile').find({"UserName":name}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			res.status(200).send(result[0]);
			client.close();
		});
	});
});

app.post('/final', function(req, res) {
	console.log(req.body);
	var prod = req.body.prod;
	var addr = req.body.addr;
	console.log(prod);
	MongoClient.connect(url, function(err, client) {
		if (err) {
			console.log(error)
		} else {
		console.log("connected");
		db = client.db('generix');
		var cnt = db.collection('order').count() + 1;
		db.collection('order').insertOne({"order_id":cnt, "name":name, "address":addr}, function(err, res) {
			if (err) throw err;
			//client.close();
		});
		db.collection('order_details').insertOne({"order_id":cnt,"product":prod}, function(err, res) {
			if (err) throw err;
			//client.close();
		});
		res.status(200).send();
		client.close();
		}
	});
});

app.listen(8081, (req, res) => {
    console.log("Listening on 8081");
});
