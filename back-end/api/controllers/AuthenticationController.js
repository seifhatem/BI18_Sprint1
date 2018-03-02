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
     const users = await User.find({username: req.body.username}).exec();
     if(users.length==1){
       res.status(200).json({
       });
     }

     if(users.length==0){
       res.status(403).json({
         err: 'Invalid username or password'
       });
     }

     if(users.length>1){
       res.status(500).json({
         err: 'Duplicate users found!'
       });
     }


}
