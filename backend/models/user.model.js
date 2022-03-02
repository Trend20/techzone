const mongoose = require('mongoose');

const UserSChema = mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', UserSChema);
module.exports = User;
