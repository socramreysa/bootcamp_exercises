var mongoose = require("mongoose")

var pokemonModel = new mongoose.Schema({
    name: { type: String, required: false, unique: true },
    level: { type: Number, default: 1, required: false },
    tipo: { type: String, enum: ["Tierra","Aire","Agua","Fuego"], required: false },
    imgUrl: String,
    atacks: [{ type: mongoose.Schema.Types.ObjectId, ref: "ataque", required: false }]
    });


var pokemon = mongoose.model('pokemon', pokemonModel);

module.exports = pokemon;
