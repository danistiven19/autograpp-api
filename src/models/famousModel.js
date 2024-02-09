const mongoose = require('mongoose');

const famousSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String
  },
  autograph: {
    type: String
  },
  age: {
    type: Number
  }
});

const FamousModel = mongoose.model('Famous', famousSchema);

module.exports = FamousModel;
