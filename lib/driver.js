'use strict';

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

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            if (callback && typeof callback === typeof Function) {
                callback(chunk);
            }
        });
    });

    req.write(value);

    req.end();
};

OlegDB.prototype.read = function (key, callback) {
    var options = {
        hostname: this.options.host,
        port: this.options.port,
        path: '/' + this.database + '/' + key,
        method: 'GET',
        headers: {}
    };

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            if (callback && typeof callback === typeof Function) {
                callback(chunk);
            }
        });
    });

    req.end();
};

OlegDB.prototype.update = function (key, value, callback) {
    var options = {
        hostname: this.options.host,
        port: this.options.port,
        path: '/' + this.database + '/' + key,
        method: 'POST',
        headers: {}
    };

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            if (callback && typeof callback === typeof Function) {
                callback(chunk);
            }
        });
    });

    req.write(value);

    req.end();
};

OlegDB.prototype.delete = function (key, callback) {
    var options = {
        hostname: this.options.host,
        port: this.options.port,
        path: '/' + this.database + '/' + key,
        method: 'DELETE',
        headers: {}
    };

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            if (callback && typeof callback === typeof Function) {
                callback(chunk);
            }
        });
    });

    req.end();
};

OlegDB.prototype.info = function (key, callback) {
    var options = {
        hostname: this.options.host,
        port: this.options.port,
        path: '/' + this.database + '/' + key,
        method: 'HEAD',
        headers: {}
    };

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            if (callback && typeof callback === typeof Function) {
                callback(chunk);
            }
        });
    });

    req.end();
};

module.exports = OlegDB;
