var sequelizeReq = require("sequelize"); //requerimos el modulo
var sequelizeCon = new sequelizeReq('postgres://postgres:100postgres@localhost:5432/pokeAppSQL');

module.exports = {sequelizeReq: sequelizeReq, sequelizeCon: sequelizeCon};
