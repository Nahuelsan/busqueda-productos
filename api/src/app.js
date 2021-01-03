const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');

const server = express();

server.name = 'API';
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  next();
});

server.use('/', routes);

module.exports = server;
