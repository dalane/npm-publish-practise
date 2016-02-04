"use strict";

var supertest = require('supertest');
var server = require('../lib/server.js');

describe('GET /', function () {
    beforeEach(function () {});
    afterEach(function () {});
    it("should return \"hello world\"", function (done) {
        supertest(server).get('/').expect('hello world', done);
    });
});
