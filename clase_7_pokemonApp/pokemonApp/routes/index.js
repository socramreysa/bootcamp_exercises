var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Attack = require("../models/atackModel.js")
var Pokemon = require("../models/pokemonModel.js")
var comment = require("../models/commentModel.js")

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
  Pokemon.find({}, function(err, datos) {
    res.render("pokemons", {
      pokemon: datos,
      nombre: req.params.nombre
    })
  })
})

router.get("/:nombre/pokemons/crearPokemon", function(req, res, next) {
  res.render("createPokemon", {
    nombre: req.params.nombre
  })
})

// router.get("/:nombre/pokemons/:pokemon", function(req, res, next) {
//   starterPokemons = ["Pikachu", "Squirtle", "Charmander", "Bulbasaur"]
//   if (starterPokemons.indexOf(req.params.pokemon) !== -1) {
//     res.render("template", {
//       pokemon: req.params.pokemon
//     })
//   } else {
//     res.send("<h1>Elegiste un pokemon inexistente</h1>")
//   }
// })

router.post("/:nombre/crearPokemon", function(req, res, next) {
  var b = req.body
  Attack.create({
    nombre: b.atackName,
    minLevel: b.atackMinLevel,
    tipo: b.atackType,
    description: b.atackDescription,
    baseDamage: b.atackBaseDamage,
    acuracy: b.atackAcuracy,
    powerPoints: b.atackPowerPoints,
  }, function(err, ataque) {
    if (err) return console.log(err);
    Pokemon.create({
      name: b.pokemonName,
      level: b.pokemonLevel,
      tipo: b.pokemonType,
      imgUrl: b.pokemonImgUrl,
      atacks: [ataque._id]
    }, function(err, pokemon) {
      if (err) return console.log(err);
      // Guardado!
      res.redirect("/" + req.params.nombre + "/createdPokemon/" + b.pokemonName)

    });
  });
});

router.post("/:nombre/:pokemonName/crearComentario", function(req, res, next) {
  var b = req.body
  comment.create({
    nombre: b.nombre,
    email: b.email,
    content: b.content,
    to: req.params.pokemonName
  }, function(err, ataque) {
    if (err) return console.log(err);
    res.redirect("/" + req.params.nombre + "/createdPokemon/" + req.params.pokemonName)
  });
});

router.get("/:nombre/createdPokemon/:pokemonName", function(req, res, next) {
  Pokemon.findOne({
    name: req.params.pokemonName
  }).populate('atacks').exec(function(err, pokemon) {
    console.log(pokemon)
    comment.find({
      to: req.params.pokemonName
    }, function(err, comments) {
      var obj = {
        pokemon: pokemon,
        nombre: req.params.nombre,
        comment: comments
      }
      res.render("pokemonCreado", obj)
    })
  });
});

// var b = req.body
// comment.create({
//   nombre: ,
//   date: Date.now(),
//   email: ,
//   content: ,
//   to:
// }, function (err, comment){
//       if (err) return console.log(err);
//           res.redirect("/"+req.params.nombre+"/createdPokemon/" + b.pokemonName)
//       })

router.post("/:nombre/:pokemonName/eliminarPokemon", function(req, res, next) {
  Pokemon.remove({
    name: req.params.pokemonName
  }, function(err) {
    if (err) return console.log(err);
    res.redirect("/" + req.params.nombre + "/pokemons")
  })
});

router.post("/:nombre/:pokemonName/editar", function(req, res, next) {
  var b = req.body
  Attack.update({
    nombre: b.ataqueNombre
  }, {
    [b.ataque]: b.valorAtaque
  }, function(err, ataque) {
    Pokemon.update({
      name: req.params.pokemonName
    }, {
      [b.pokemon]: b.valorPokemon
    }, function(err) {
      if (err) return console.log(err);
      b.pokemon === "name"?res.redirect("/" + req.params.nombre + "/createdPokemon/"+ (b.valorPokemon)):res.redirect("/" + req.params.nombre + "/createdPokemon/"+ (req.params.pokemonName))

    })
  });
});

module.exports = router;
