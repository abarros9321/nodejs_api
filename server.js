var express = require('express');
var bodyParser = require('body-parser');
var notas = require('./lib/notas');
var cors = require('cors');
var mongoose = require('mongoose');

/**
 * Locals
 */
var app = module.exports = express();
var port = process.env.PORT || 3000;

/**
 * middlewares
 */
app.use(bodyParser.json('application/json'));
app.use(cors());
app.use(notas);

/**
 * Start server if we're not someone else's dependency
 */
if (!module.parent) {
mongoose.connect('mongodb://localhost/apinotas', function() {
  app.listen(port, function() {
    console.log('escuchando en http://localhost:%s/', port);
  });
  });
  module.exports = app;
}