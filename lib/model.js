'use strict';

var OlegDB = require('./driver');
var uuid = require('node-uuid');

var Model = function (database, attributes) {
    this.database = database;
    this.attributes = attributes;

    this.driver = new OlegDB(this.database);
};

Model.prototype.save = function (callback) {
    var _id = uuid.v4();

    var result = this.driver.create(_id, JSON.stringify(this.attributes));

    result.then(function (data) {
        if (callback && typeof callback === typeof Function) {
            callback(_id, data.status, data.body);
        }
    });
};

Model.prototype.find = function (query, callback) {
    if (typeof query === 'string') {
        var result = this.driver.read(query);

        result.then(function (data) {
            if (callback && typeof callback === typeof Function) {
                callback(JSON.parse(data.body));
            }
        });
    }
};

module.exports = Model;
