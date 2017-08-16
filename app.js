
/**
 * Module dependencies.
 */
var express  = require('express');
var connect = require('connect');
var app      = express();
var port     = process.env.PORT || 8080;


app.listen(port);

console.log('The App runs on port ' + port);
