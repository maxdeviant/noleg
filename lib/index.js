'use strict';

var Oleg = function () {
    this.database = '';
    this.options = {};
};

Oleg.prototype.connect = function (database) {
    this.database = database;
};

module.exports = new Oleg;
