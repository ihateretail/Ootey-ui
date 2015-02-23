'use strict';

angular.module('ooteyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categories', {
        url: '/categories',
        templateUrl: 'app/categories/categories.html',
        controller: 'CategoriesCtrl'
      });
  });