'use strict';

var oleg = require('../');

oleg.connect('http://localhost:38080');
console.log(oleg);
oleg.use('turtles');
console.log(oleg);
