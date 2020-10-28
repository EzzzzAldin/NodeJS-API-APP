const mongoose = require('mongoose');

// Create geolocation Schema
const GeoSchema = mongoose.Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
})

const ninjaSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name faild is required']
    },
    // Kind rank Ninja      ex: Ninja Rank Is Red
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', ninjaSchema);

module.exports = Ninja;