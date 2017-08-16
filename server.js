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

// Configuration
app.use(express.static('public'));
app.use(connect.logger('dev'));
app.use(connect.json());  
app.use(connect.urlencoded());

// Routes
var chgpass = require('config/chgpass');
var register = require('config/register');
var login = require('config/login');
var liste = require('config/liste');
var recherche = require('config/recherche');
var ajout = require('config/ajout');
app.listen(port);

console.log('The App runs on port ' + port);
