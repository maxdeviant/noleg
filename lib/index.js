'use strict';

var url = require('url');
var Model = require('./model');

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

Oleg.prototype.model = function (attributes) {
    return new Model(this.database, attributes);
};

module.exports = new Oleg;
