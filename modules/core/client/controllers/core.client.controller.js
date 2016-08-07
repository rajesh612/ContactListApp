/**
 * Created by Rajesh on 7/31/2016.
 */
'use strict';

angular
    .module('ContactsApp')
    .controller('ContactsCtrl',['$scope','ContactService','$state',function($scope, ContactService,$state){
        // Get all contacts
        var refresh = function () {
            var contactsPromise = ContactService._getContacts();

            var successCallBack = function (response) {
                $scope.contacts = response;
                $scope.fields = Object.keys($scope.contacts[0]) || [];
            };

            var failureCallBack = function (err) {
                console.log("Error while Fetching contacts"+ err);
            }
            contactsPromise
                .success(successCallBack)
                .error(failureCallBack);
        };
        refresh();
        // redirect to edit template
        $scope.editContact = function (contact) {
            $state.go('edit',{contactId: contact._id});
        }
        //delete contacts
        $scope.deleteContact = function (id) {
            var deletePromise = ContactService._deleteContact(id);

            var successCallBack = function (response) {
                $scope.message = response;
            };

            var failureCallBack = function (err) {
                $scope.message = err;
            };
            deletePromise
                .success(successCallBack)
                .error(failureCallBack);
            refresh();
        }
    }])
    .controller('saveCtrl',['$scope','ContactService' ,function($scope,ContactService){
        // create contact
        $scope.saveContact = function(contact){
            var savePromise = ContactService._saveContact(contact);

            var successCallBack = function (response) {
                $scope.contact = '';
                $scope.message = response;
            };

            var failureCallBack = function (err) {
                $scope.message = err;
            }
            savePromise
                .success(successCallBack)
                .error(failureCallBack);
        }
    }])
    .controller('editCtrl',['$scope','contactId','ContactService',function($scope, contactId, ContactService){
        //edit contact
        var editPromise = ContactService._editContact(contactId);
        var successCallBack = function (response) {
            $scope.contact = response;
        };

        var failureCallBack = function (err) {
            $scope.message = err;
        }
        editPromise
            .success(successCallBack)
            .error(failureCallBack);
    }])
    .controller('updateCtrl',['$scope','ContactService','$state',function($scope, ContactService,$state){
        //update contact
        $scope.updateContact = function(contact) {
            var updatePromise = ContactService._updateContact(contact._id, contact);
            var successCallBack = function (response) {
                console.log(response);
                $state.go('display');
            };

            var failureCallBack = function (err) {
                console.log(err);
                $state.go('edit');
            }
            updatePromise
                .success(successCallBack)
                .error(failureCallBack);
        }
    }])
