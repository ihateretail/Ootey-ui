'use strict';

angular.module('ooteyApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };
	$scope.processForm = function(){
		// we will store all of our form data in this object
		$scope.formData = {};
		
		// function to process the form
		$scope.processForm = function() {
			alert('awesome!');  
		};
	};

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
