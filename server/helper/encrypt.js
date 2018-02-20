const bcrypt = require('bcrypt');
const saltRouds = 10;

module.exports = function(password){
  return new Promise((resolve,reject) =>{
    bcrypt.hash(password, saltRouds, function(err,hash) {
      if (err) {
        reject(err)
      }
      else {
        resolve(hash)
      }
    });
  })
}
