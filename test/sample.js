'use strict';

var oleg = require('../');

oleg.connect('http://localhost:38080/turtles');

var turtle = oleg.pair('red', 'Raphael');

turtle.save(function (data, status) {
    console.log(status + ': ' + data);
});
