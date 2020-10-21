var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var router = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/', router);

app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Route Not Found...'
  })
})

module.exports = app;
