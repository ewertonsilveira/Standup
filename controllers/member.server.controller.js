var Member = require('../models/member.server.model.js');


function createModel(req) {
	return new Member({
		memberName: req.body.memberName,
		age: req.body.age,
		email: req.body.email
	});
};

exports.create = function memberModel_Create(req, res){
	var member = createModel(req);

	member.save(function(err){
		if(err) console.log(err);
	});

	res.redirect(301, '/');
};

exports.getMembers = function memberModel_GetMembers(req, res, callback){
	var query = Member.find();

	query.exec(function(err, result){
		callback(req, res, err, result);
	})
};

exports.getMember = function memberModel_GetMember(req, res){
	res.render( "member", { title: "Standup - Create member"} );
};