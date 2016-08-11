'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    consolidate = require('consolidate'), // Added for Authentication
    swig = require('swig'),
    path = require('path'),
    config = require('../config');   // third party library

module.exports.init = function() // module.exports creates interface
{
    var app = express();
    
    this.initBodyParser(app);    // body parser middleware integration
    this.initViewEngine(app);
    this.ignoreStaticRoutes(app);
    return app;
}

module.exports.initBodyParser = function (app) {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());
}

module.exports.initViewEngine = function (app) {
    app.engine('server.view.html',consolidate['swig']);
    app.set('view engine','server.view.html');
    app.set('views',path.join(process.cwd(), '/modules/core/server/views'));
}

module.exports.ignoreStaticRoutes = function (app) {
    app.use('/public',express.static(path.resolve('./public')));
    config.client.files.forEach(function (staticPath) {
        app.use(staticPath,express.static(path.resolve('./' + staticPath)));

    })
        
    }