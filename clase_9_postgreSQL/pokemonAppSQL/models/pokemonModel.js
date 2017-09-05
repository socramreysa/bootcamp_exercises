var sql = require('../db/connection').sequelizeReq;
var Scon  = require('../db/connection').sequelizeCon;

var Pokemons = Scon.define( "pokemon", {
    name: { type: sql.STRING, allowNull: false, unique: true },
    level: { type: sql.INTEGER, defaultValue: 1, allowNull: true },
    tipo: { type: sql.ENUM, values:["Tierra","Aire","Agua","Fuego"], allowNull: true },
    imgUrl: sql.STRING
    }, {
  createdAt: false,
  updatedAt: false,
});


module.exports = Pokemons;
