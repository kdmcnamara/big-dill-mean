'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var Email = require('./models/email.js');

var http = require('http');

var app = express();

require('./database');
require('./seed')



app.use('/', express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use('/api', router);


var server = http.createServer(app);

app.listen(process.env.PORT || 8080, () =>  {
	console.log("Server is running on port 8080!");
});