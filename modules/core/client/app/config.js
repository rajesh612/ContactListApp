/**
 * Created by Rajesh on 7/29/2016.
 */
'use strict';
// to register new modules

var ApplicationConfiguration = (function () {
    var _applicationModuleName = 'ContactsApp',
        _applicationDependencies =['ui.router'];
    
    var _registerModule = function (moduleName, dependencies) {

        //create anguler module
        angular.module(moduleName, dependencies || []);
        angular.module(_applicationModuleName).requires.push(moduleName);
    }
    
    return{
        applicationModuleName: _applicationModuleName,
        applicationDependencies: _applicationDependencies,
        registerModule: _registerModule
    }
})();