const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/AsalPakur');

const adminSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    def: []
  }
});

adminSchema.plugin(plm);

module.exports = mongoose.model('user', adminSchema);