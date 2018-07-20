'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var Email = require('./models/email.js');
var path = require('path');
var http = require('http');

var app = express();

require('./database');
require('./seed');

app.get('/', function(req, res) {
	res.sendFile(path.resolve('public/index.html'));
});
app.get('/about', function(req, res) {
	res.sendFile(path.resolve('public/dill-about.html'));
});
app.get('/contact', function(req, res) {
	res.sendFile(path.resolve('public/dill-contact.html'));
});
app.get('/music', function(req, res) {
	res.sendFile(path.resolve('public/dill-music.html'));
});




app.use('/', express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use('/api', router);


var server = http.createServer(app);

app.listen(process.env.PORT || 8080, () =>  {
	console.log("Server is running on port 3000!");
});
