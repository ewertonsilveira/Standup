var standupCtrl = require('../controllers/standup.server.controller.js');
var memberCtrl = require('../controllers/member.server.controller.js');

var appTitle = 'Standup Meetings';
var dtStandups = null;

function indexStandupsCallback(req, res, err, result) {
	if(err) {
		console.log(err);
		res.status(400);
	} else {
		dtStandups = result;
		memberCtrl.getMembers(req, res, indexMembersCallback);
	}
};
function indexMembersCallback(req, res, err, results) {
	res.status(200).render('index',  { title: appTitle,	notes: dtStandups, members: results });
};
function indexNotesCallback(req, res, err, results){
	if(err) {
		console.log(err);
		res.status(400);
	} else {
		res.status(200).render('newnote',  { title: appTitle, members: results });
	}
};

// Exports functions
exports.getIndexPage = function(req, res) {
	standupCtrl.getNotes(req, res, indexStandupsCallback);
};

// GET new note page
exports.getNotesPage = function(req, res) {
	memberCtrl.getMembers(req, res, indexNotesCallback);
};
// POST new note page
exports.postNotes = function(req, res) {
	return standupCtrl.create(req, res);
};
// GET members
exports.getMembersPage = function(req, res) {
	return memberCtrl.getMember(req, res);
};
// POST members
exports.postMembers = function(req, res) {
	return memberCtrl.create(req, res);
};