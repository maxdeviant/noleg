'use strict';

var q = require('q');
var http = require('http');

var OlegDB = function (database, options) {
    this.database = database || '';

    this.options = options || {
        host: 'localhost',
        port: 38080
    };
};

OlegDB.prototype.create = function (key, value, callback) {
    var options = {
        hostname: this.options.host,
        port: this.options.port,
        path: '/' + this.database + '/' + key,
        method: 'POST',
        headers: {}
    };

    var deferred = q.defer();

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');

        var body = [];

        res.on('data', function (chunk) {
            body.push(chunk);
        });

        res.on('end', function () {
            deferred.resolve({
                status: res.statusCode,
                body: body.join()
            });
        });
    });

    req.write(value);

    req.end();

    return deferred.promise;
};

OlegDB.prototype.read = function (key, callback) {
    var options = {
        hostname: this.options.host,
        port: this.options.port,
        path: '/' + this.database + '/' + key,
        method: 'GET',
        headers: {}
    };

    var deferred = q.defer();

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');

        var body = [];

        res.on('data', function (chunk) {
            body.push(chunk);
        });

        res.on('end', function () {
            deferred.resolve({
                status: res.statusCode,
                body: body.join()
            });
        });
    });

    req.end();

    return deferred.promise;
};

OlegDB.prototype.update = function (key, value, callback) {
    var options = {
        hostname: this.options.host,
        port: this.options.port,
        path: '/' + this.database + '/' + key,
        method: 'POST',
        headers: {}
    };

    var deferred = q.defer();

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');

        var body = [];

        res.on('data', function (chunk) {
            body.push(chunk);
        });

        res.on('end', function () {
            deferred.resolve({
                status: res.statusCode,
                body: body.join()
            });
        });
    });

    req.write(value);

    req.end();

    return deferred.promise;
};

OlegDB.prototype.delete = function (key, callback) {
    var options = {
        hostname: this.options.host,
        port: this.options.port,
        path: '/' + this.database + '/' + key,
        method: 'DELETE',
        headers: {}
    };

    var deferred = q.defer();

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');

        var body = [];

        res.on('data', function (chunk) {
            body.push(chunk);
        });

        res.on('end', function () {
            deferred.resolve({
                status: res.statusCode,
                body: body.join()
            });
        });
    });

    req.end();

    return deferred.promise;
};

OlegDB.prototype.info = function (key, callback) {
    var options = {
        hostname: this.options.host,
        port: this.options.port,
        path: '/' + this.database + '/' + key,
        method: 'HEAD',
        headers: {}
    };

    var deferred = q.defer();

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');

        var body = [];

        res.on('data', function (chunk) {
            body.push(chunk);
        });

        res.on('end', function () {
            deferred.resolve({
                status: res.statusCode,
                body: body.join()
            });
        });
    });

    req.end();

    return deferred.promise;
};

module.exports = OlegDB;
