const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Character = new Schema(
    {
        name: { type: String, required: true },
        leadershipScore: { type: Number, default: 0, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Characters', Character);
