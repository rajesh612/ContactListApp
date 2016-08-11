/**
 * Created by Rajesh on 8/7/2016.
 */
'use strict';

var userService = require('../services/user.server.service');

module.exports.createUser = function (req, res) {
    var user = req.body;
    userService.saveUser(user, function (err, user) {
        console.log("saved user in server ctrl " + user);
        if (err) {
            res
                .status(400)
                .send("Error!! Please enter correct data and try again")
        } else
        {
            res
                .status(200)
                .send("User has been registered successfully.");
        }
    });
}

module.exports.findUser = function (req,res) {
    var userName = req.body.userName,
        pass = req.body.password;
    userService.findUser(userName,pass,function (err,foundUser) {
        console.log(foundUser);
        if (err || !foundUser) {
            res.status(400)
                .send("Error:: Unable to log in. Please try again!!");
        } else {
            res.status(200)
                .send("Welcome "+ foundUser.name);
        }
    })
}