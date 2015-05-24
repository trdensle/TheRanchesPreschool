var express = require('express');  //installed
var session = require('express-session');  
var nodemailer = require("nodemailer");  // installed
var bodyParser = require('body-parser');   //installed
var passport = require('passport');  //installed
var LocalStrategy = require('passport-local').LocalStrategy  //installed
var mongoose = require('mongoose');   //installed

mongoose.connect('mongodb://localhost/PreSchool');




var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({
	secret: 'MissKatiePreSchool2015', saveUninitialized: true, resave: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.listen(9898, function(){
console.log("Express Started on Port 9898");
});