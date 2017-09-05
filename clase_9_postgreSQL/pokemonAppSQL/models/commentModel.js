var sql = require('../db/connection').sequelizeReq;
var Scon = require('../db/connection').sequelizeCon;
var Pokemon = require('./pokemonModel');

var Comments = Scon.define("comment", {
    nombre: {type: sql.STRING, defaultValue: "anonymous" },
    date: {type: sql.DATEONLY, defaultValue: new Date },
    email: { type: sql.STRING, allowNull: false },
    content: { type: sql.STRING, allowNull: false },
  }, {
  createdAt: false,
  updatedAt: false,
});

Pokemon.hasMany(Comments, {foreignKey: 'pokemonId'})

module.exports = Comments;
