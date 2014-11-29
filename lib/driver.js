'use strict';

var http = require('http');

var OlegDB = function (host, port) {
    this.host = host;
    this.port = port;

    this.create = function (key, value) {
        var options = {
            hostname: this.host,
            port: this.port,
            path: '/' + 'turtles' + '/' + key,
            method: 'POST',
            headers: {}
        };

        var req = http.request(options, function (res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));

            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
            });
        });

        req.write(value);

        req.end();
    };

    this.read = function (key) {
        var options = {
            hostname: this.host,
            port: this.port,
            path: '/' + 'turtles' + '/' + key,
            method: 'GET',
            headers: {}
        };

        var req = http.request(options, function (res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));

            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
            });
        });

        req.end();
    };

    this.update = function () {

    };

    this.delete = function () {

    };

    this.info = function () {

    };
};

module.exports = OlegDB;
