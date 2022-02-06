const mongoose = require('mongoose');
const schemaposse = new mongoose.Schema({
  name:{
    type: String,
    require: true,

  },
  pass:{
    type: String,
    unique: true,
    required: true,
    select: false,

  },
  createdAt:{
    type: Date,
    default: Date.now,

  
  },

});


const user = mongoose.model('user', schemaposse);

module.exports = user;
