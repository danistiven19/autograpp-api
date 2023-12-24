const mongoose = require('mongoose');

const famousSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const FamousModel = mongoose.model('Famous', famousSchema);

module.exports = FamousModel;
