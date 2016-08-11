/**
 * Created by Rajesh on 8/8/2016.
 */
'use strict';
const logInUrl = '/api/login',
      registerUrl = '/api/register'; //JS constant
angular
    .module('ContactsApp')
    .factory('UserService',function ($http) {
        var _saveUser = function (user) {
                var promise = $http.post(registerUrl,user);
                return promise;
            },
            _findUser = function (user) {
                var userPromise = $http.post(logInUrl,user);
                console.log(userPromise);
                return userPromise;
            }
        return{
            _saveUser : _saveUser,
            _findUser : _findUser
        };
    });
