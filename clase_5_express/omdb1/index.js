var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({extended: false})
var request = require('request');

app.use(urlEncoded)

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.get('/', function(req, res) {
  res.render("form")
});

app.post("/busqueda", urlEncoded, function(req, res, next){
  request("http://www.omdbapi.com/?apikey=20dac387&t="+req.body.busqueda, function(err,response,body){
    var movie = JSON.parse(body);
    //console.log(movie);
    res.render('resultado', {titulo: movie.Title, imagen: movie.Poster, año: movie.Year, director: movie.Director, plot: movie.Plot, actores: movie.Actors});
  })
})

app.post("/resultados", urlEncoded, function(req, res, next){
  request("http://www.omdbapi.com/?apikey=20dac387&s="+req.body.resultados, function(err,response,body){
    var movies = JSON.parse(body);
    var searchResultArr = movies.Search;
    res.render('resultados', {titulo: movies.Title, link: searchResultArr});
  })
})


app.listen(3001);
