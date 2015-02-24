/**
 * Created by ShanuRahul on 2/23/2015.
 */
'use strict';

angular.module("ooteyApp")
  .config(function($stateProvider,$urlRouterProvider){

     $stateProvider
       .state('dashboard',{
         url:'/dashboard',
         templateUrl:'/app/dashboard/dashboard.html',
         controller: 'DashboardController'
       });

  });
