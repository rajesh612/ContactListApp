'use strict';

// module dependencies
var config = require('../config'),
    mongoose = require('mongoose'),
    path = require('path');

module.exports.connect = function (callback) {
    var db = mongoose.connect(config.db.uri, config.db.options, function(err){
        if (err) {
            console.error("Error: Couldn't connect to MongoDB!!");
            console.log(err);
        } else {
            if (callback) callback(db);
        }
    });
}