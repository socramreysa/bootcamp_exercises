var mongoose = require('mongoose'),
	User = require('../../models/userModel.js'),
	redisSession = require('redis-sessions'),
	rs = new redisSession({ host: 'localhost', wipe: 0 }),
	rsapp = 'auth'

function authHandler (req, res, next){
	User.findOne({username: req.body.username}, function(err, result){
		if (err) {
			next(err);
		}else{
			if (result.authenticate(req.body.password)) {
				return authSucess(req, res, next, result._id)
			} else {
				return authFail(req, res)
			}
		}
	})
}

function authSucess (req, res, next, id){
	console.log("ip", req.connection.remoteAddress)
	rs.create({
	    app: rsapp, 
  		ip: req.connection.remoteAddress,
	  	id: id,
  		ttl: 3600,
	  }, (error, resp) => {
	  	if(error){
	  		console.log("ERRORRRRRRRR", error)
	  	}
	    res.statusCode = 200;
	    res.cookie('auth', resp.token);
	    next()
	  });
}

function validateCookie (req, res, next){
	rs.get({
    app: rsapp,
    token: req.cookies.auth, // este token lo vamos a sacar de la cookie del request
  }, (err, resp) => {
    // Si no encuentra sesiones envia un 401
    if (!Object.keys(resp).length){
    	res.render('notPass.ejs')
    	return authFail(res)
    }else{
    	return res.render('pass.ejs')
    }
    // Si existe la sesion del usuario continua
    });
}

function logout (req, res, next){
rs.kill({
    app: rsapp,
    token: req.cookies.auth, // este token lo vamos a sacar de la cookie del request
  }, (err, resp) => {
    if (!resp) return authFail(res);
    res.clearCookie('auth');
    return res.send({ message: 'Succesfully logout.' });
  });
}

function authFail(req, res){
    return res.send({ message: "Couldn't authenticate"  });
  };

module.exports = {
    authHandler,
    authSucess,
    validateCookie,
    logout,
    authFail
}