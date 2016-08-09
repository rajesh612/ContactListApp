/**
 * Created by Rajesh on 8/8/2016.
 */
'use strict';
const userUrl = '/api/user';  //JS constant
angular
    .module('ContactsApp')
    .factory('UserService',function ($http) {
        var _saveUser = function (user) {
                var promise = $http.post(userUrl,user);
                return promise;
            },
            _findUser = function (user) {
                var userPromise = $http.get(userUrl+'/'+ user.userName + '/' + user.password);
                console.log(userPromise);
                return userPromise;
            }
        return{
            _saveUser : _saveUser,
            _findUser : _findUser
        };
    });
