'use strict';

var mongoose = require('mongoose');

var emailSchema = new mongoose.Schema({
	address: String,
	message: String,
	newSubscriber: Boolean
});

var model = mongoose.model('Email', emailSchema);

module.exports = model;