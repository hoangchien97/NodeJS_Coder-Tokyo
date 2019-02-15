// module.exports = {
// 	a:1,
// 	b:2,
// };
// module.exports.b = 2;
var db = require('../db');

module.exports.index = function(req,res){
	res.render('users/index',{
		users : db.get('users').value(),
	});
};
module.exports.search = function(req,res){
	var txtUser = req.query.txtUser; // Ch
	var matchUsers = db.get('users').value().filter(function(user) {
		return user.name.toLowerCase().indexOf(txtUser.toLowerCase()) > -1;
	});
	// console.log(matchUsers);
	res.render('users/index',{
		users: matchUsers,
	})
	// console.log(txtName);
	// console.log(req.query);
};
module.exports.detailsUser = function(req,res){
	var id = parseInt(req.params.id);
	// console.log(typeof id);
	var user = db.get('users').find({id: id}).value();
	// trỏ tới file 'users/viewUser'
	res.render('users/viewUser',{
		user: user
	});
};
module.exports.create = function(req,res){
	res.render('users/create');
};
module.exports.store = function(req,res){
	db.get('users').push(req.body).write(); // Thêm vào cuối mảng users
	res.redirect('/users'); // Chuyển trang
};
