const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

var user = new Schema({
  username : String,
  password : String
})


//hashPassword

// user.methods.hashPassword = function(password) {
//   return bcrypt.hashSync(password, bcrypt.getSaltSync(8), null);
// }

//chechk password

// user.methods.checkPassword = function(password){
//   return bcrypt.compareSync(password, this.password);
// };

const userSchema = mongoose.model('userSchema', user)
module.exports = userSchema
