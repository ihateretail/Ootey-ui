'use strict';

angular.module('ooteyApp')
  .controller('ProductCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
	$scope.awesomeProducts =[];
	
	//get products from server
	$http.get('/api/products').success(function(awesomeProducts) {
      $scope.awesomeProducts = awesomeProducts;
    });

    $scope.addProduct = function() {
      if($scope.newProduct === '') {
        return;
      }
      $http.post('/api/products', { name: $scope.newProduct });
      $scope.newProduct = '';
    };

    $scope.deleteProduct = function(product) {
      $http.delete('/api/products/' + product._id);
    };
  });
