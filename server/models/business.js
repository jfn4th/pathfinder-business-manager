const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Business = new Schema(
    {
        name: { type: String, required: true },
        rooms: { type: [ Object ] },
        teams: { type: [ Object ] },
        location: { type: String, required: true },
        manager: {
            manType: { type: String, required: true },
            cost: { type: Number, required: true }
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Businesses', Business);
