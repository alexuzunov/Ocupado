const mongoose = require("mongoose");

const floorSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    map: {
        type: Object,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;