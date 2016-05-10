var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));
var html_dir = './html/';
var db = require('./db.js');
var fs = require('fs');
var storeMessage = require('./storeMessage.js');
var readPublicChat = require('./readPublicChat.js');
var storePrivateMessage = require('./storePrivateMessage.js');
var readPrivateChat = require('./readPrivateChat.js');
var user = require('./storeUser.js');
var getUser = require('./readUser.js');
var newBooking = require('./newBooking.js');
var login = require('./chatLogin.js');
var url = require('url');

app.get('/store', function (req, res) {
	var url_parts = url.parse(req.url, true);	
	var query = url_parts.query;

	storeMessage.store(query, res);
});

app.get('/readpublic', function (req, res) {
	var url_parts = url.parse(req.url, true);	
	var query = url_parts.query;

	readPublicChat.read(query,res);		
});

app.get('/storePrivate', function (req, res) {
	var url_parts = url.parse(req.url, true);	
	var query = url_parts.query;

	storePrivateMessage.store(query, res);	
});

app.get('/readprivate', function (req, res) {
	var url_parts = url.parse(req.url, true);	
	var query = url_parts.query;

	readPrivateChat.read(query, res);	
});

app.get('/user', function(req, res){
	user.store();
});

app.get('/getallusers', function(req, res){
	getUser.readall(res);
});

app.get('/getuser', function(req, res){
	getUser.read(res);
});

app.get('/newBooking', function(req, res){
	newBooking.store();
});

app.get('/login', function(req, res){
	
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;

	login.check(query, res);
});

app.get('/chat', function(req, res){
	res.sendFile(path.join(__dirname + '/chatbox/index.html'));
});


var server = app.listen(9000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('AWS app listening at http://%s:%s', host, port);
});