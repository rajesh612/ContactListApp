/**
 * Created by Rajesh on 7/31/2016.
 */

'use strict';

angular
       .module('ContactsApp')
          .config(function ($stateProvider) {   //angular-ui-route
              $stateProvider
                  .state('logIn',{
                      url:'/logIn',
                      templateUrl: 'modules/core/client/views/logIn.client.tpl.html'
                  })
                  .state('register',{
                      url:'/register',
                      templateUrl: 'modules/core/client/views/register.client.tpl.html'
                  })
                  .state('display',{
                      url:'/display',
                      templateUrl: 'modules/core/client/views/display.client.tpl.html',
                      controller: 'ContactsCtrl'
                  })
                  .state('create',{
                      url:'/create',
                      templateUrl: 'modules/core/client/views/create.client.tpl.html'
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
                  .state('logOut',{
                      url:'/logOut',
                      controller: 'logOutCtrl'
                  })
          });