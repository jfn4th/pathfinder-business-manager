const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Character = new Schema(
    {
        name: { type: String, required: true },
        leadershipScore: { type: Number, default: 0, required: true },
        businesses: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Business'
            },
            name: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Characters', Character);
