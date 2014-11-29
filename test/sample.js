'use strict';

var OlegDB = require('../lib/driver');

var db = new OlegDB('localhost', 38080, 'turtles');

db.create('red', 'Michaelangelo');
db.read('red');
db.update('red', 'Raphael');
db.read('red');
db.delete('red');
db.info('red');
