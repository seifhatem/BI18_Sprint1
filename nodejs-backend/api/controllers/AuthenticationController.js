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
      User.find({ 'username': username,'email':email }, function(err, user) {

          if (err) {

              console.log('Signup error');
              return done(err);
          }

          //if user found.
          if (user.length!=0) {
            if(user[0].username){
              console.log('Username already exists, username: ' + username);
               }else{
                  console.log('EMAIL already exists, email: ' + email);
               }
               var err = new Error();
              err.status = 310;
              return done(err);

          }
      res.status(200).json({
        err: null,
        msg: 'Hi',
        data: users
      });
    }
    };
