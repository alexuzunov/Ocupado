const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reservable: {
        type: Boolean,
        required: true
    },
    floor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Floor',
        required: true
    },
    reservations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reservation'
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;