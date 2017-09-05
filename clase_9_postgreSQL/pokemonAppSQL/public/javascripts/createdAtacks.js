var sql = require('../../db/connection.js').sequelize;
var Scon = require('../../db/connection.js').Sequelize;
var Atacks = require('../../models/atackModel');

Atacks.create({
  nombre: 'Rayo de luz',
  minLevel: 3,
  description: "Calienta la piel hasta quemaduras de 3° grado",
  baseDamage: 6,
  acuracy: 8,
  tipo: "Fuego",
  powerPoints: 5
}).then(function(atack) {
  console.log(atack);
})

Atacks.create({
  nombre: 'Cepa',
  minLevel: 2,
  description: "Corta como navaja de afilar recien comprada",
  baseDamage: 5,
  acuracy: 8,
  tipo: "Tierra",
  powerPoints: 4
}).then(function(atack) {
  console.log(atack);
})

Atacks.create({
  nombre: 'Piñón',
  minLevel: 4,
  description: "Es un Piñón!",
  baseDamage: 4,
  acuracy: 9,
  tipo: "Tierra",
  powerPoints: 5
}).then(function(atack) {
  console.log(atack);
})

Atacks.create({
  nombre: 'Patada ninja',
  minLevel: 5,
  description: "Donde pegue duele",
  baseDamage: 6,
  acuracy: 5,
  tipo: "Aire",
  powerPoints: 7
}).then(function(atack) {
  console.log(atack);
})

Atacks.create({
  nombre: 'Látigo',
  minLevel: 3,
  description: "Te deja re marcado, por ahí te corta y anda a saber que más",
  baseDamage: 6,
  acuracy: 3,
  tipo: "Agua",
  powerPoints: 4
}).then(function(atack) {
  console.log(atack);
})

Atacks.create({
  nombre: 'Martillo',
  minLevel: 6,
  description: "Rompe huesos",
  baseDamage: 8,
  acuracy: 8,
  tipo: "Fuego",
  powerPoints: 5
}).then(function(atack) {
  console.log(atack);
})
