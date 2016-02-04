"use strict";

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello jenkins');
});

var port = process.env.PORT || 5000;

app.listen(port);

console.log("Server started on localhost:" + port);

module.exports = app;
