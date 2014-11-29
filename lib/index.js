'use strict';

var Pair = require('./pair');
var url = require('url');

var Oleg = function () {
    this.database = '';
    this.options = {};
};

Oleg.prototype.connect = function (connectionString) {
    var connection = url.parse(connectionString);

    this.options.host = connection.hostname;
    this.options.port = parseInt(connection.port || 38080);

    var path = connection.path.slice(1);
    this.database = path.slice(0, path.indexOf('/') !== -1 ? path.indexOf('/') : path.length);
};

Oleg.prototype.use = function (database) {
    this.database = database;
};

Oleg.prototype.pair = function (key, value) {
    return new Pair(this.database, key, value);
};

module.exports = new Oleg;
