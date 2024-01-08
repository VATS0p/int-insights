const mongoose = require('mongoose');

const contactinfoSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
  phoneno: {
    type: String,
  },
});

const User = mongoose.model('Contactinfo', contactinfoSchema);

module.exports = User;