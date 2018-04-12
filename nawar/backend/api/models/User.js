const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
   password: {
      type: String,
      required: true,
      trim: true,
    },

});

mongoose.model('User', userSchema);
