"use strict";

var request = require('request');
var app = require('../lib/server');

describe("npm-publish-practise", function () {
    describe('GET /', function() {
        beforeEach(function () {
            //app.listen(8080);
        });
        afterEach(function () {
            //app.close();
        });
        it("should return \"hello world\"", function(done) {
            request.get('http://localhost:5000', function (err, res, body){
                expect(res.statusCode).toBe(200);
                expect(res.body).toBe('Hello World');
                done();
            });
        });
    });
});
