/**
 * Created by Rajesh on 8/6/2016.
 */
'use strict';

angular
    .module('ContactsApp')
    .controller('UserCtrl',['$scope','UserService',function($scope, UserService){
        $scope.signUp = function(user){
            var savePromise = UserService._saveUser(user);

            var successCallBack = function (response) {
                $scope.user = '';
                $scope.message = response;
            };

            var failureCallBack = function (err) {
                $scope.message = err;
            };
            savePromise
                .success(successCallBack)
                .error(failureCallBack);
        }
    }])
    .controller('logInCtrl',['$scope','UserService','$rootScope','$state',function($scope, UserService,$rootScope,$state){
        $rootScope.hideSign = false;
        $scope.hideLogIn = false;
        $rootScope.showUser = false;
        //Log In user
        $scope.signIn = function(user) {
            var userPromise = UserService._findUser(user);
            var successCallBack = function (response) {
                $rootScope.hideSign = true;
                $scope.hideLogIn = true;
                $rootScope.welcome = response;
                $rootScope.showUser = true;
                $state.go('display');
            };

            var failureCallBack = function (err) {
                $scope.msg = err;
            };
            userPromise
                .success(successCallBack)
                .error(failureCallBack);
        }
    }])
    .controller('logOutCtrl',['$window',function($window){
        $window.location.replace('http://localhost:8090/');
    }]);