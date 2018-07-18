const mongoose = require('mongoose');

const Images = mongoose.model('Images', {
  id: Number,
  name: String,
  date: Date,
  src: String
});

module.exports = Images;

