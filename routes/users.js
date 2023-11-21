const users = require('express').Router();
const path = require('path');

// GET Route for retrieving all the feedback
users.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);


module.exports = users;
