var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stringLengthValidator = [
	function memberNameValidator_fnc (val) {
		return (val.length > 0 && val.trim().length > 0);		
	},
	'Enter a valid {PATH}.'
];

var standupSchema = new Schema({
	memberName: { type:String, required: true },
	project: { type:String, required: true },
	workYesterday: { type:String, required: true, validate: stringLengthValidator },
	workToday: { type:String, required: true, validate: stringLengthValidator },
	impediment: { type:String, required: true, default: 'None' },
	createdOn: { type: Date, default: Date.now }
});

// Export model 
module.exports = mongoose.model('Standup', standupSchema);