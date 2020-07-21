const mongoose = require('mongoose');

// dotenv
require('dotenv').config();

// mongoDB connection
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('Connection successful!');
    })
    .catch((err) => {
        console.log('ERROR: ', err.message);
    });

const db = mongoose.connection;

module.exports = db;
