const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = () => {
  return new User({}).save(); // application doesn't actually use any of the object default info, otherwise would randomize it here
  // this return statement returns a promise
};
