'use strict';
/**
 * main controller displays get the list of recently uploaded products
 */
angular.module('ooteyApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.products = [];

    $http.get('/api/products').success(function(products) {
      $scope.products = products;
    });


  });
