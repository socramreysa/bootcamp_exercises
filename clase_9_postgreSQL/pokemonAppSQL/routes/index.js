var express = require('express');
var router = express.Router();
var Atack = require("../models/atackModel.js")
var Pokemon = require("../models/pokemonModel.js")
var Comment = require("../models/commentModel.js")
var AtackPokemon = require("../models/atackModel.js")

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
  Pokemon.findAll().then(function(pokemons) {
    console.log(pokemons);
    res.render("pokemons", {
      pokemon: pokemons,
      nombre: req.params.nombre
    })
  })
})

router.post("/:nombre/pokemons", function(req, res, next) {
  Pokemon.findAll().then(function(pokemons) {
    console.log(pokemons);
    res.render("pokemons", {
      pokemon: pokemons,
      nombre: req.params.nombre
    })
  })
})

router.get("/:nombre/pokemons/crearPokemon", function(req, res, next) {
  Atack.findAll({}).then(function(atacks) {
    console.log(atacks.map(function(atack){ return atack.toJSON() }))
    res.render("createPokemon", {
      atacks: atacks.map(function(atack){ return atack.toJSON() }),
      nombre: req.params.nombre
    })
  })
})

router.post("/:nombre/crearPokemon", function(req, res, next) {
  var b = req.body
    Pokemon.create({
      name: b.pokemonName,
      level: b.pokemonLevel,
      tipo: b.pokemonType,
      imgUrl: b.pokemonImgUrl,
        }).then(function(pokemon) {
      res.redirect("/" + req.params.nombre + "/createdPokemon/" + b.pokemonName)
    })
  })

router.get("/:nombre/createdPokemon/:pokemonName", function(req, res, next) {
  Pokemon.findOne({where:{ name: req.params.pokemonName},
    include: [
      { model: Atack, as:"Atack_pokemon" },
      { model: Comment }
    ]}).then(function(pokemon){
    Atack.findAll({}).then(function(ataques){
          res.render("pokemonCreado",{
          name: req.params.nombre,
          pokemonName: req.params.pokemonName,
          pokemon: pokemon,
          ataques: ataques,
          ataquePoke: pokemon.Atack_pokemon,
          comments: pokemon.comments
        })
      })
    })
  })

router.post("/:nombre/crearPokemon/:pokemonName/agregaArmas", function(req, res, next) {
  Atack.findOne({ where: {nombre: req.body.ataque}}).then(function(ataque){
    Pokemon.findOne({where: {name: req.params.pokemonName}}
    ).then(function (pokemon) {
      pokemon.addAtack_pokemon(ataque).then(function(){
        res.redirect("/" + req.params.nombre + "/createdPokemon/" + req.params.pokemonName)
      })
    })
  })
})

router.post("/:nombre/:pokemonName/crearComentario", function(req, res, next) {
  var b = req.body
  Pokemon.findOne({where: {name: req.params.pokemonName}}).then(function(pokemon){
    console.log("adasdasdasdasdsa", pokemon.id);
      Comment.create({
        nombre: b.nombre,
        email: b.email,
        content: b.content,
        pokemonId: pokemon.id
      }).then(function(comment) {
        res.redirect("/" + req.params.nombre + "/createdPokemon/" + req.params.pokemonName)
      })
    })
  })

router.post("/:nombre/:pokemonName/eliminarPokemon", function(req, res, next) {
  Pokemon.destroy({ where:{name: [req.params.pokemonName]} }).then(function() {
    res.redirect("/" + req.params.nombre + "/pokemons")
  })
});

router.post("/:nombre/:pokemonName/eliminarAtaque", function(req, res, next) {
    Atack.findOne({ where: {nombre: req.body.ataque}}).then(function(ataque){
      Pokemon.findOne({where: {name: req.params.pokemonName}}
    ).then(function (pokemon) {
      pokemon.removeAtack_pokemon(ataque).then(function(){
        res.redirect("/" + req.params.nombre + "/createdPokemon/" + req.params.pokemonName)
      })
    })
  })
})

router.post("/:nombre/:pokemonName/editar", function(req, res, next) {
  var b = req.body
  Pokemon.update({ [b.pokemonProp]: b.valorPokemon
  },{where: {name: req.params.pokemonName}}).then(function(){
    b.pokemonProp === "name" ?
    res.redirect("/" + req.params.nombre + "/createdPokemon/"+ (b.valorPokemon)) :
    res.redirect("/" + req.params.nombre + "/createdPokemon/"+ (req.params.pokemonName))
  })
})

module.exports = router;
