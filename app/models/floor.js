const mongoose = require("mongoose");

const floorSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    map: {
        type: Object,
        required: true
    },
    facility: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility',
        required: true
    },
    rooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;