var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reMatch = /[a-zA-Z]/;
var memberSchema = new Schema({
	memberName: { type: String, required: true, match: reMatch },
	age: String,
	email: String
});

memberSchema.path('email').required(true, 'Oops! Supply email.');

module.exports = mongoose.model('Member', memberSchema);