"use strict";

var express = require('express');

var app = express();

app.get('/', function (request, response) {
    var headers = {
        "Content-Type": "text/plain"
    };
    response.writeHead(200, headers);
    response.write("Hello World");
    response.end();
});

var port = process.env.PORT || 5000;

app.listen(port);

console.log("Server started on http://localhost:" + port);

module.exports = app;
