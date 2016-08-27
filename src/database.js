'use strict';

const mongoose = require('mongoose');
var uri = 'mongodb://heroku_21kcp525:aefi8j2lk71bmvv5j8t7bfbqt1@ds017636.mlab.com:17636/heroku_21kcp525';

mongoose.connect('mongodb://heroku_qmbrfmmn:qabvskpp2nkn4u92jgpdiv6t29@ds017736.mlab.com:17736/heroku_qmbrfmmn' || 'mongodb://localhost/big-dill-mean', function(err) {
	if(err) {
		console.log('Failed Connecting to Mongodb');
	} else {
		console.log('Success Connecting to Mongodb!');
	}
});

