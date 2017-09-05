var express = require('express');
var router = express.Router();
var User = require('../models/userModel.js')
var op = require('../public/javascripts/auth.js')


router.get('/', function(req, res, next) {
	return res.render('index.ejs')
})


router.get('/login', function(req, res, next) {
	return res.render('login.ejs')
})

//////////////// CREATE USER
router.post('/register', function(req, res, next) {
	var salt = User.createSalt()
	console.log(req.body.password)
	User.create({
		username: req.body.username,
		passwordSalt: salt,
		passwordHash: User.encryptPassword(req.body.password, salt)
	}, function	(err,reslt){
		if(err){
			console.log(err)
		}else{
			res.render('login.ejs');
		}
	})
});

//////////////// LOGIN USER
router.post('/login', op.authHandler, function(req, res, next) {
	return res.redirect('/admin')
})


//////////////// VALIDATE USER
router.get('/admin', op.validateCookie, function(req, res, next) {
	/*op.validateCookie(req, res, next)?*/
})

module.exports = router;

