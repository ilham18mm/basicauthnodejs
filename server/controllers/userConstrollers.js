const User = require('../models/user');
const Encrypt = require('../helper/encrypt');

let createData = function(req,res){
  Encrypt(req.body.password).then((newPassword) => {
    console.log(newPassword);
    User.create({
      username : req.body.username,
      password : newPassword
    })
    .then((dataUser) => {
      res.status(200).send({
        message: 'data telah di simpan',
        data: dataUser
      })
    })
    .catch((respon) => {
      res.status(500).send(respon)
    })
  })
}

let viewData = (req,res) =>{
  User.find({}, function(err,result){
    if (!err) {
      res.send(result)
    }
    else {
      res.send(err)
    }
  })

}


module.exports = {
  createData,
  viewData
}
