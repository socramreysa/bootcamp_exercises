var mongoose = require("mongoose")

var atackModel = new mongoose.Schema({
    nombre: {type: String, required: false, unique: true},
    minLevel: {type: Number, default: 1},
    tipo: { type: String, enum: ["Tierra","Aire","Agua","Fuego"], required: false },
    description: String,
    baseDamage: {type: Number, default: 1},
    acuracy: {type: Number, required: false},
    powerPoints: {type: Number, default: 2},
    });

var ataque = mongoose.model('ataque', atackModel);

module.exports = ataque;
