'use strict';

var oleg = require('../');

oleg.connect('http://localhost:38080/turtles');

var turtle = oleg.model({
    name: 'Raphael',
    color: 'red'
});

turtle.save(function (data, status, responseText) {
    console.log(data, status, responseText);
});

turtle.find('2c62b0a8-e4e7-4218-99dc-eccc1099088a', function (data, status) {
    console.log(data);
});
