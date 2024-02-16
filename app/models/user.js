const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    facilities: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Facility'
        }
    ],
    reservations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reservation'
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;