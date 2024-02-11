const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    reservee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;