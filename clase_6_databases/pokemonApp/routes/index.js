var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('form');
});

router.post("/", function(req, res, next) {
  res.redirect("/" + req.body.nombre)
})

router.get("/:nombre", function(req, res, next) {
  res.render("bienvenido", {
    nombre: req.params.nombre
  })
})

router.get("/:nombre/pokemons", function(req, res, next) {
  res.render("pokemons", {
    nombre: req.params.nombre
  })
})

router.get("/:nombre/pokemons/:pokemon", function(req, res, next) {
  starterPokemons = ["Pikachu", "Squirtle", "Charmander", "Bulbasaur"]
  if (starterPokemons.indexOf(req.params.pokemon) !== -1) {
    res.render("template", {
      pokemon: req.params.pokemon
    })
  } else {
    res.send("<h1>Elegiste un pokemon inexistente</h1>")
  }
})

module.exports = router;
