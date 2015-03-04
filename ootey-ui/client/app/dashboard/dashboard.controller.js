/**
 * Created by ShanuRahul on 2/23/2015.
 */

'use strict';

angular.module("ooteyApp")
  .controller("DashboardController", function($scope,$http,Auth){
      $scope.products =[];

      $http.get('/api/products').success(function(products){
        $scope.products = products;
      });

  });
