var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var cors=require('cors');
app.use(cors());

var login=require('./routes/login');
var register=require('./routes/register');
var contact=require('./routes/contact');
var dashboard=require('./routes/dashboard');
var password=require('./routes/password');

app.use('/login',login);
app.use('/register',register);
app.use('/contact',contact);
app.use('/dashboard',dashboard);
app.use('/password',password);

module.exports=app;
