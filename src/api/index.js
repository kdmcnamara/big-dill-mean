'use strict';

var express = require('express');
var Email = require('../models/email');
var members = require('../../mock/members.json');


var router = express.Router();

router.get('/members', function(req, res) {
	res.json({members: members});
});

router.get('/emails', function(req, res) {
	Email.find(function(err, emails) {
		if(err) {
			return res.status(500).json({message: err.message});
		}
		res.json({emails: emails});
	});
});

router.get('/emailsubscribers', function(req, res) {
	Email.find({'newSubscriber': true},function(err, emails) {
		if(err) {
			return res.status(500).json({message: err.message});
		}
		res.json({emails: emails});
	});
});

//POST ROUTE
router.post('/emails', function(req, res) {
    var emailAddress = req.body.emailAddress;
    var emailMessage = req.body.emailMessage;
    var emailNewSubscriber = req.body.emailNewSubscriber;
    // res.send(emailAddress + ' ' + emailMessage + ' ' + ' ' + emailNewSubscriber);

    Email.create({address: emailAddress, message: emailMessage, 
				newSubscriber: emailNewSubscriber}, function(err, email) {
		if(err) {
			return res.status(500).json({err: err.message});
		}
			res.json({'email': email, message: 'Email Created!'});
	});
});





//TODO: Add PUT route to update existing entries
//TODO: Add DELETE route to delete entries 

//WARNING - delete request will delete all posts
router.delete('/emails', function(req, res){
    console.log("Deleting");
    Email.find( {}, function ( err, email ){
        Email.remove( function ( err, email ){
            if (err) {
            	return res.send(err);
            }
        res.json({ email: 'Deleted' });
        });
    });
});

module.exports = router;