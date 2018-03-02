  const mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  Encryption = require('../utils/Encryption'),
  User = mongoose.model('User');

  module.exports.checkCredentials = async (req, res) => {
    if (!Validations.isString(req.body.username) || !Validations.isString(req.body.password)) {
      return res.status(422).json({
        err: null,
        msg: 'username and password required',
        data: null
      });
    }
     const users = await User.find({username: req.body.username,password:req.body.password}).exec();
     if(users.length==1){
       res.status(200).json({
         msg: 'Valid username & password'
       });
     }

     if(users.length==0){
       res.status(200).json({
         msg: 'Invalid username or password'
       });
     }

     if(users.length>1){
       res.status(200).json({
         msg: 'Duplicate users found!'
       });
     }


}

module.exports.createUser = async (req, res) => {
  if (!Validations.isString(req.body.username) || !Validations.isString(req.body.password) || !Validations.isString(req.body.email)) {
    return res.status(422).json({
      err: null,
      msg: 'username, password & email required',
      data: null
    });
  }

  const user = await User.create(req.body);
  return res.status(201).json({
    err: null,
    msg: 'User was created successfully.',
    data: user
  });


};
