/**
 * Created by Rajesh on 8/7/2016.
 */
'use strict';
 angular
        .module(ApplicationConfiguration.applicationModuleName)
           .filter('labelCase',function () {    //filter will always return a function
               return function (input) {
                   input = input.replace(/([A-Z])/g, ' $1');    //Add space when capital letter is found
                   return input[0].toUpperCase() + input.slice(1);
               }
           })