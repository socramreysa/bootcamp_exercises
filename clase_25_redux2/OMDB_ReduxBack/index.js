var express = require('express');
var app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local'); // Estrategia local de express
var mongoose = require('mongoose');
var expressSession = require('express-session'); // Mini db en memoria para guardar sesiones
var User = require('./models/user');  // El modelo de usuarios
var Favorite = require('./models/favorite');
var bodyParser = require('body-parser');
var allowCrossOrigin = require('./crossOrigins.js');
mongoose.connect('mongodb://mongo/omdbdb');


app.set('view engine', 'html')


// PASSPORT CONFIG
// persistencia de datos de sesiones
app.use(expressSession({
	secret: 'string secreta',
	resave: false,
	saveUninitialized: false,
}));

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
//??
app.use(allowCrossOrigin);

//inicializo passport y creo una estrategia, uso la de express
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// RUTAS ////////////////////////////////////////
// PERSISTENCE

app.get('/persistencia', isLoggedIn, function(req,res) {
	var fav = req.body
	console.log('USER: ', req.user)
	console.log('FAV: ', fav)
	Favorite.create(fav, function(err, favorito) {
		if (err) return console.log( 'SAVE FAV, error:', err);
		console.log('FAVORITO: ' ,favorito)
	User.findByIdAndUpdate(req.user._id,{ $push: { favorites: favorito._id }}, (err, user) => res.send(favorito))
	})
});

// IS LOGIN?
app.post('/login', passport.authenticate('local', {
	failureRedirect: '/loginbad', 
}), function(req, res) {
	console.log('LOGUEADO.......:', req.user); 
	res.send(req.user);
});

app.post('/loginbad', function(req, res) {
	console.log('no se pudo loguear'); 
	res.send(false);
});

// IS REGISTER?
app.post('/register', function (req, res) {
	var newUser = new User({ username: req.body.username });
	User.register(newUser, req.body.password, function (err, user) {
		if (err) {
			console.log(err);
			return res.send(false);
		}
		res.send(true);
	});
});

// LOGOUT
app.get('/logout', function(req, res){
	req.logout();
	res.send(true);
});

// SAVE FAV
app.post('/saveFav', isLoggedIn, function(req,res) {
	var fav = req.body
	console.log('USER: ', req.user)
	console.log('FAV: ', fav)
	Favorite.create(fav, function(err, favorito) {
		if (err) return console.log( 'SAVE FAV, error:', err);
		console.log('FAVORITO: ' ,favorito)
	User.findByIdAndUpdate(req.user._id,{ $push: { favorites: favorito._id }}, (err, user) => res.send(favorito))
	})
});

////////////////////////////////////////
// Middleware
// Si está autenticado, que siga, si no respondemos que no puede pasar.
// Usamos la función req.isAuthenticated() de Passport.
function isLoggedIn(req, res, next) {
	console.log('ZZZZZZZZ', req.cookies)
	if (req.isAuthenticated()) {
		return next(); // puede pasar
	}
	return res.send('ERROR AL AUTENTICARSE');
}


// Usamos el middleware que creamos arriba
app.get('/privada', isLoggedIn, function(req, res) {
	res.render('privada');
});


app.listen(3001);
