'use strict';

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/big-dill-mean', function(err) {
	if(err) {
		console.log('Failed Connecting to Mongodb');
	} else {
		console.log('Success Connecting to Mongodb!');
	}
});

