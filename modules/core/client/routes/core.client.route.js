/**
 * Created by Rajesh on 7/31/2016.
 */

'use strict';

angular
       .module('ContactsApp')
          .config(function ($stateProvider) {   //angular-ui-route
              $stateProvider
                  .state('Log In',{
                      url:'/logIn',
                      templateUrl: 'modules/core/client/views/logIn.client.tpl.html',
                      controller: 'ContactsCtrl'
                  })
                  .state('display',{
                      url:'/display',
                      templateUrl: 'modules/core/client/views/display.client.tpl.html',
                      controller: 'ContactsCtrl'
                  })
                  .state('create',{
                      url:'/create',
                      templateUrl: 'modules/core/client/views/create.client.tpl.html',
                  })
                  .state('edit',{
                      url:'/edit/:contactId',
                      templateUrl: 'modules/core/client/views/edit.client.tpl.html',
                      resolve:{
                          contactId : function ($stateParams) {
                              return $stateParams.contactId;
                          }
                      },
                      controller: 'editCtrl'
                  })
          });