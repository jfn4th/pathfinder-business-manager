const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Business = new Schema(
    {
        name: { type: String, required: true },
        rooms: { type: [ Object ], required: true },
        teams: { type: [ Object ], required: true },
        location: { type: String, required: true },
        manager: {
            manType: { type: String, required: true },
            price: { type: Number, required: true }
        },
        owner: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Character'
            },
            name: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Businesses', Business);
