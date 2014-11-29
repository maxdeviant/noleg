'use strict';

var url = require('url');

var Oleg = function () {
    this.database = '';
    this.options = {};
};

Oleg.prototype.connect = function (connectionString) {
    var connection = url.parse(connectionString);

    this.options.host = connection.hostname;
    this.options.port = parseInt(connection.port);

    var path = connection.path.slice(1);
    this.database = path.slice(0, path.indexOf('/') !== -1 ? path.indexOf('/') : path.length);
};

Oleg.prototype.use = function (database) {
    this.database = database;
};

module.exports = new Oleg;
