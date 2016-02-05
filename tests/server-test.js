"use strict";

var request = require('supertest');
var server = require('../lib/server.js');

describe("server", function () {
    describe('GET /', function() {
      it('respond with hello world', function(done) {
        request(server)
            .get('/')
            .expect('hello world', done());
        });
    });
});
