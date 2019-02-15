var db = require('../db');
module.exports.requireAuth = function(req,res,next){
	if(!req.cookies.userId){
		res.redirect('/auth/login');
		return;
	}

	// console.log(req.cookies.userId);
	var id = parseInt(req.cookies.userId);
	var user = db.get('users').find({id:id}).value();
	if(!user){
		res.redirect('/auth/login');
		return;
	}
	next();
}