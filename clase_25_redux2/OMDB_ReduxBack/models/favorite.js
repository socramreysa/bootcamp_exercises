var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var Favorite = new Schema({
	Title: {type: String},
	imdbID: {type: String}
});


module.exports = mongoose.model('Favorite', Favorite);
