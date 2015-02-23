'use strict';

angular.module('ooteyApp')
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when('/signup', '/signup/profile');
	
	$stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
	    url: '/signup',
		abstract:true,
		templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
	  //nested states 
	  .state('signup.profile',{
		url:'/profile',
		templateUrl:'/app/account/signup/signup-profile.html'
	  })
	  .state('signup.contactInfo',{
		url:'/contactInfo',
		templateUrl:'/app/account/signup/signup-contactInfo.html'
	  })
	  .state('signup.payment', {
            url: '/payment',
            templateUrl: 'app/account/signup/signup-payment.html'
       })
	  .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
	 
  });