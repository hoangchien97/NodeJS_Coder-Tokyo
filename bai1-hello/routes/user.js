var express = require('express');
var router = express.Router();
// MVC  model-view-controller
var controller = require('../controllers/users.controller.js');
var validateUser = require('../validate/user.validate')
// index

router.get('/cookie',function(req,res,next){
	res.cookie('userId',12345);
	res.send('Hello');
});
router.get('/',controller.index);
// Search
router.get('/search',controller.search);
//view User detail
router.get('/details/:id',controller.detailsUser);
// view Create
router.get('/create',controller.create);
// store
router.post('/create',validateUser.postCreateUser,controller.store);

module.exports = router;