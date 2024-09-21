const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: String,
    position: String,
    nationality: String,
    age: Number,
    club: String,
    stats: {
        goals: Number,
        assists: Number,
        appearances: Number,
        yellow_cards: Number,
        red_cards: Number
    }
});

module.exports = mongoose.model('Player', playerSchema);
