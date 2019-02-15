var express = require('express');
var bodyParser = require('body-parser');
// var route = require('route')
var cookieParser = require('cookie-parser')
var useRouter = require('./routes/user');



var app = express();
var port = 3000;


app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); // set path static
app.use(cookieParser()); // use pagekage cookieParser.
//use Route users
app.use('/users',useRouter);
// Method
// request : Người dùng gửi lên 
// response : Từ server trả về

// var users = [
// 	{id:1,name:'Thinh'},
// 	{id:2,name:'Chien'}
// ];
app.get('/',function(req,res){
	// res.send('Hello Coder-Tokyo !<a href="/users">List User</a>');
	// res.render('path,obj')
	res.render('index',{
		name : 'AAA',
	});
});


app.listen(port,function() {
	console.log('Server listening on port ' + port);
});