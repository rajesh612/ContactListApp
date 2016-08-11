/**
 * Created by Rajesh on 8/7/2016.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    validator = require('validator');

var validateFieldStrategy = function(property){
    return property.length;
}

var UserSchema = new Schema({
    name:{
        type: String,
        default: '',
        trim: true,
        validate:[validateFieldStrategy, 'Name cannot be empty']
    },
    userName:{
        type: String,
        index:{unique: true},
        validate:[validateFieldStrategy, 'Username cannot be empty']
    },
    password:{
        type: String,
        required: true,
        validate:[validateFieldStrategy, 'Password cannot be empty']
    }
});


module.exports = mongoose.model('RajeshUsers', UserSchema);  //register collection for mongodb

// module.exports = User;