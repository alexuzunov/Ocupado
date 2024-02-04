const mongoose = require("mongoose");

const facilitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    floors: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Floor'
        }
    ]
});

const Facility = mongoose.model('Facility', facilitySchema);

module.exports = Facility;