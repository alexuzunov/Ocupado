const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String, 
    age: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;