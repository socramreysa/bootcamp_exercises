// ================ SETUP ================

var request = require("request");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var jsonParser = bodyParser.json();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(jsonParser);

var API_KEY = '20dac387';
var API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY;

// ================ RUTAS ================

app.get("/", function(req, res){ // Ruta de entrada, sirve mi view index
    res.render('index');
});

app.post("/", function(req, res){
    // llamado a la api con "s=" para hacer una busqueda de titulos
    request(API_URL + "&s=" + req.body.titulo + '&type=' + req.body.tipo, function(error, status, body) {
        if (JSON.parse(body).Response == 'True') { // Convierto el body response a JSON y me aseguro que haya una respuesta valida
            res.render("busqueda", {data: JSON.parse(body)}); // En caso de ser valida llamo a render con el template que muestra el listado (en otra version distinta esto tambien podria ser un redirect)
        } else {
            res.redirect('/error') // Si no hay respuestra muestro la pantalla de error
        }
    });
})

app.get("/pelicula/:pel", function(req, res) {
    // llamado a la api con "t=" para pedir un titulo en particular
    request(API_URL +"&t=" + req.params.pel, function(error, status, body) {
        var jsonData = JSON.parse(body) // convierto el body response a JSON
        if ( jsonData.Rated !== "X") { // verifico que no sea X Rated
            res.render("resultado", {data : jsonData }); // De no serlo muestro la pantalla del perfil de la pelicula
        } else {
            res.render('adult', {data : jsonData }) // De serlo muestro la pantalla de adultos
        }
    });
});

app.get('/adult/:pel',function(req, res) { // Esta ruta sirve para mostrar las peliculas X rated (se podrian pensar soluciones mejores)
    request(API_URL +"&t=" + req.params.pel, function(error, status, body) {
        res.render("resultado", {data: JSON.parse(body)});
    });
});

app.get('/error', function(req, res) {
    res.render("error", {error: 'No data found'});
});

app.listen(3000);
