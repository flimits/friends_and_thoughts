const express = require('express');
const usersRouter = require('./users');

const app = express();

app.use('/api', usersRouter);

module.exports = app;
