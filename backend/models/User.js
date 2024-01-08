const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  image: String,
  name: String,
  province: String,
  country: String,
  collegeName: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;