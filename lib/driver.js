'use strict';

var http = require('http');

var DEFAULT_HOST = 'localhost';
var DEFAULT_PORT = 38080;

var OlegDB = function (host, port, database) {
    this.host = host || DEFAULT_HOST;
    this.port = port || DEFAULT_PORT;
    this.database = database || '';

    this.create = function (key, value) {
        var options = {
            hostname: this.host,
            port: this.port,
            path: '/' + this.database + '/' + key,
            method: 'POST',
            headers: {}
        };

        var req = http.request(options, function (res) {
            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                console.log(chunk);
            });
        });

        req.write(value);

        req.end();
    };

    this.read = function (key) {
        var options = {
            hostname: this.host,
            port: this.port,
            path: '/' + this.database + '/' + key,
            method: 'GET',
            headers: {}
        };

        var req = http.request(options, function (res) {
            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                console.log(chunk);
            });
        });

        req.end();
    };

    this.update = function (key, value) {
        var options = {
            hostname: this.host,
            port: this.port,
            path: '/' + this.database + '/' + key,
            method: 'POST',
            headers: {}
        };

        var req = http.request(options, function (res) {
            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                console.log(chunk);
            });
        });

        req.write(value);

        req.end();
    };

    this.delete = function (key) {
        var options = {
            hostname: this.host,
            port: this.port,
            path: '/' + this.database + '/' + key,
            method: 'DELETE',
            headers: {}
        };

        var req = http.request(options, function (res) {
            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                console.log(chunk);
            });
        });

        req.end();
    };

    this.info = function (key) {
        var options = {
            hostname: this.host,
            port: this.port,
            path: '/' + this.database + '/' + key,
            method: 'HEAD',
            headers: {}
        };

        var req = http.request(options, function (res) {
            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                console.log(chunk);
            });
        });

        req.end();
    };
};

module.exports = OlegDB;
