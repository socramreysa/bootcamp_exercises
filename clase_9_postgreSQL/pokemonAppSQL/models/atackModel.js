var sql = require('../db/connection').sequelizeReq;
var Scon = require('../db/connection').sequelizeCon;
var Pokemon = require('./pokemonModel');

var Atacks = Scon.define("atack", {
      nombre: { type: sql.STRING, allowNull: false, unique: true },
      minLevel: { type: sql.INTEGER, defaultValue: 1},
      tipo: { type: sql.ENUM, values:["Tierra","Aire","Agua","Fuego"], allowNull: true },
      description: sql.STRING,
      baseDamage: { type: sql.INTEGER, defaultValue: 1},
      acuracy: {type: sql.INTEGER, allowNull: true},
      powerPoints: {type: sql.INTEGER, defaultValue: 2},
      }, {
      createdAt: false,
      updatedAt: false,
    });

Pokemon.belongsToMany(Atacks, {as: 'Atack_pokemon', through: "AtackPokemon", foreignKey: 'pokemonId', onDelete: 'cascade'});
Atacks.belongsToMany(Pokemon, {as: 'Atack_pokemon', through: "AtackPokemon", foreignKey: 'atackId'});

Scon.sync({force: false});

module.exports = Atacks
