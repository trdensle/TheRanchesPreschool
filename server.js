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


//Routing email
var smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Gmail",
		auth: {
		user: "trentdensley@gmail.com",
		pass: "Riverton19"
		}
});

app.post('/postEmail', function(req, res) {
	//nodemailer logic

	
})

app.get('/public/pages/contact.html',function(req,res){
	res.sendfile('forms.html');
});

app.get('/send',function(req,res){
		
	var mailOptions={
		to : req.query.to,
		subject : req.query.subject,
		text : req.query.text
	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
		if(error){
			console.log(error);
			res.end("error");
		}else{
			console.log("Message sent: " + response.message);
			res.end("sent");
		 }
	});
});

app.listen(9898, function(){
console.log("Express Started on Port 9898");
});