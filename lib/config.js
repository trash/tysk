var express = require('express'),
path = require('path'),
morgan = require('morgan');

var rootPath = path.normalize(__dirname + '/../');

console.log(rootPath);

/**
* Express configuration
*/
module.exports = function (app) {
    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
        if (req.url.indexOf('/scripts/') === 0) {
            res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
            res.header('Pragma', 'no-cache');
            res.header('Expires', 0);
        }
        next();
    });

    app.use(express.static(path.join(rootPath, '.tmp')));
    app.use(express.static(path.join(rootPath, '/build')));
    app.use(express.static(path.join(rootPath, '/images')));
    app.use(express.static(path.join(rootPath, '/')));
    app.set('views', rootPath + '/build');

    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(morgan('dev'));
    // app.use(express.json());
    // app.use(express.urlencoded());
    // app.use(express.methodOverride());
    // app.use(express.cookieParser());

    // Error handler
    // app.use(express.errorHandler());
};