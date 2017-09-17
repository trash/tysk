var express = require('express');

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// Express settings
require('./lib/config')(app);

// Routing
app.get('/*', (req, res) => res.render('index'));

var port = process.env.port || process.env.PORT || 9000;

// Start server
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});

// Expose app
exports = module.exports = app;