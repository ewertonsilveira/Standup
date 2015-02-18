var Standup = require('../models/standup.server.model.js');

function createModel(req){
	return new Standup({
		memberName: req.body.memberName,
		project: req.body.project,
		workYesterday: req.body.workYesterday,
		workToday: req.body.workToday,
		impediment: req.body.impediment,
	});
};

exports.create = function standupModel_Create_fnc(req, res) {
	var entry = createModel(req);

	// In order persist our document into mongDB
	entry.save(function standupModel_Create_Error_fnc(err){
		if(err){
			var errMsg = 'Sorry, there was an error saving the standup meeting notes. Error: ' + err;
			res.status(400).render('newnote', { title: 'Standup', message: errMsg });
		}else {
			res.redirect(301, '/');
		}
	}); 

	//redirecto to home page
	//res.redirect(301, '/');
};

exports.getNotes = function standupCtrl_GetNotes(req, res, callback){
	var query = Standup.find();

	query.sort({ createdOn: 'desc' })
		 .limit(12)
		 .exec(function(err, result){
		 	callback(req, res, err, result);
		 });
};
