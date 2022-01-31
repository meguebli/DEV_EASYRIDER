//Dotenv
require('dotenv').config();

//express
const express = require('express');

//fs
const fs=require('fs');

//Bodyparser
const bodyparser=require('body-parser');

//using router
//const index = require('./routes/index');

//using express
const app=express();

//using body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//app.use('/', index);

require('mongoose').connect('mongodb://localhost/tattletale');
module.exports = notifications;

