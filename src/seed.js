'use strict';

var Email = require('./models/email.js');

var emails = [
	{
		address: "kdmcnamara@wisc.edu",
		subject: "Hi I am Kevin",
		newSubscriber: true
	},
	{
		address: "bigdillandtheboys@gmail.com",
		subject: "Hi I am Big Dill",
		newSubscriber: false
	}
];

emails.forEach(function (email, index) {
	//Find All
	Email.find(function(err, emails) {
		if(!err && !emails.length) {
			Email.create({address: email.address, subject: email.subject, 
				newSubscriber: email.newSubscriber});
		};
	});
});