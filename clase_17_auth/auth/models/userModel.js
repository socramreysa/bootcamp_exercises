var mongoose = require('mongoose'),
	crypto = require('crypto')

var userModel = new mongoose.Schema({
	username: {type: String, requiered: true},
	passwordHash: String,
	passwordSalt: String
})

userModel.statics.createSalt = function() {
  return crypto.randomBytes(8).toString('hex') 
};

userModel.statics.encryptPassword = function(password, salt){
	return crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512').toString("hex")
}

userModel.methods.authenticate = function(password){
console.log(this)
	if (crypto.pbkdf2Sync(password, this.passwordSalt, 100000, 512, 'sha512').toString("hex") === this.passwordHash){
		return true
	} else {
		return false
	}
}

var user = mongoose.model('user', userModel)

module.exports = user;