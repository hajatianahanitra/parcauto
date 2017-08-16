/*
const express = require('express')
const app = express()
app.use(express.static('public'))
app.listen(process.env.PORT || 8080 , () =>
 console.log('All is ok! '))
*/

/**
 * Module dependencies.
 */
var express  = require('express');
var connect = require('connect');
var app      = express();
var port     = process.env.PORT || 8080;

app.listen(port);

console.log('The App runs on port ' + port);
