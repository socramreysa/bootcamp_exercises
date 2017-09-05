var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
	favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "favorites", required: false }]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
