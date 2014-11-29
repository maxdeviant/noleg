'use strict';

var OlegDB = require('./driver');

var Pair = function (database, key, value) {
    this.database = database;
    this.key = key;
    this.value = value;

    this.driver = new OlegDB(this.database);
};

Pair.prototype.save = function (callback) {
    return this.driver.create(this.key, this.value);
};

module.exports = Pair;
