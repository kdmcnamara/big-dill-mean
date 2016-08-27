'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var Email = require('./models/email.js');

var http = require('http');
var port = 3000;

var app = express();

require('./database');
require('./seed')



app.use('/', express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use('/api', router);


app.post('/dill-contact.html', function(req, res) {
    var emailAddress = req.body.emailAddress;
    var emailMessage = req.body.emailMessage;
    var emailNewSubscriber = req.body.emailNewSubscriber;
    // res.send(emailAddress + ' ' + emailMessage + ' ' + ' ' + emailNewSubscriber);

    Email.create({address: emailAddress, message: emailMessage, 
				newSubscriber: emailNewSubscriber}, function(err, email) {
		if(err) {
			return res.status(500).json({err: err.message});
		}
	});
});

app.listen(process.env.PORT || 3000, () =>  {
	console.log("Server is running on port 3000!");
});