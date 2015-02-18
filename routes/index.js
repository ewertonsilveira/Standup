var express = require('express');
var router = express.Router();
var standupScope = require('../scopes/standupScope.server.scope.js');

/* GET home page. */
router.get('/', function(req, res, next) {	
	standupScope.getIndexPage(req, res)
});
// GET new note page
router.get('/Notes', function(req, res){
	standupScope.getNotesPage(req, res);
});
// POST new note page
router.post('/Notes', function(req, res){
	standupScope.postNotes(req, res);
});
// GET members
router.get('/Members', function(req, res){
	standupScope.getMembersPage(req, res);
});
// POST members
router.post('/Members', function(req, res){
	standupScope.postMembers(req, res);
});

module.exports = router;
