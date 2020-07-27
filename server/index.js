const express = require('express'),
    businessRouter = require('./routes/business-router'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    db = require('./db'),
    app = express(),
    apiPort = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB Atlas connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', businessRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
