const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
  sun: {
       type: String,
       required: true,
       trim: true,
   },
  mon: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
   tue: {
      type: String,
      required: true,
      trim: true,
    },
     wed: {
        type: String,
        required: true,
        trim: true,
      },
      sun: {
           type: String,
           required: true,
           trim: true,
       },
       thu: {
          type: String,
          required: true,
          trim: true,
        },
         sat: {
              type: String,
              required: true,
              trim: true,
          },
          slot: {
               type: String,
               required: true,
               trim: true,
           },

});

mongoose.model('Schedule', scheduleSchema);
