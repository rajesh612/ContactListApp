/**
 * Created by Rajesh on 8/7/2016.
 */
'use strict';
angular
       .module(ApplicationConfiguration.applicationModuleName)
         .value('ContactForm',{
             fields: ['firstName','lastName','email','telephone','city']
         })
         .directive('contactForm',function () {
             return {
                 restrict: 'E',
                 templateUrl: 'modules/core/client/views/contact-form.client.tpl.html',
                 scope: false,
                 link: function ($scope, element, attrs) {
                     $scope.fields = $scope.fields || ContactForm.fields;
                 }
             }
         })
    