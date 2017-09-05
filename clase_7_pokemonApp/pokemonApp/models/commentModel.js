var mongoose = require("mongoose")

var commentModel = new mongoose.Schema({
    nombre: {type: String, required: false, default: "anonymous" },
    date: {type: Date, default: Date.now },
    email: { type: String, required: false },
    content: { type: String, required: true },
    to: String
    });

var comment = mongoose.model('comment', commentModel);

module.exports = comment;
