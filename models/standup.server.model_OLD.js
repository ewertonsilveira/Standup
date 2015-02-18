var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
	memberName: String,
	project: String,
	workYesterday: String,
	workToday: String,
	impediment: String,
	createdOn: { type: Date, default: Date.now }
});

// - - - Creating a schemas - - - - 
//disabled_id, prevent mongoDB of creating a default id for us
var noIdSchema = new Schema({ name: String }, {_id: false });

//Example of using Schema.add
var exampleSchema = new Schema;
exampleSchema.add({ memberName: String });
exampleSchema.add({ project: String, workYesterday: String, workToday: String });


//Add with if statement
var includeMiddleName = true;
var secondExempleSchema = new Schema;
if(includeMiddleName){
	secondExempleSchema.add({
		memberName:{
			firstName: String, 
			middleName: String,
			lastName: String 
		}
	});
}else {
	secondExempleSchema.add({
		memberName:{
			firstName: String,	
			lastName: String 
		}
	});
}
secondExempleSchema.add({ project: String, workYesterday: String, workToday: String });

// - - - - End Of Schemas - - - - - 

// - - - - Creating Models - - -  - 
var Standup = mongoose.model("Standup", standupSchema);