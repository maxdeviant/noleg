'use strict';

var oleg = require('../');

oleg.connect('http://localhost:38080/turtles');
console.log(oleg);
oleg.connect('http://localhost:38080/turtles/red');
console.log(oleg);