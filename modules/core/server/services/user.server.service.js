/**
 * Created by Rajesh on 8/7/2016.
 */
'use strict';

var mongoose = require('mongoose'),
    User = require('../models/user.server.model');

module.exports.saveUser = function(savableUser, callback){

    var checkUser = new User(savableUser);
    checkUser.save(function (err) {
        callback(err, checkUser);
    });

    console.log('mongoose for user readyState is ' + mongoose.connection.readyState);// should be 1

}

module.exports.findUser= function (userName,pass,callback) {
    User.findOne({userName: userName, password : pass},function (err,user) {
        if(err){
            callback(err);
        }
        if(!user){
            callback(false,null);
            }else{
            callback(null,user);
        }

    });
}

