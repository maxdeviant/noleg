'use strict';

var OlegDB = require('../lib/driver');

var db = new OlegDB('localhost', 38080, 'turtles');

db.create('red', 'Raphael');
db.read('red');
