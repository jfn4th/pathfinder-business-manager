const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Business = new Schema(
    {
        name: { type: String, required: true },
        rooms: { type: [ Object ], required: true },
        teams: { type: [ Object ], required: true },
        owner: { type: String, required: true },
        location: { type: String, required: true }
        // author: {
        //     id: {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: 'User'
        //     },
        //     username: { type: String, required: true }
        // }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Business', Movie);
