(function(){

	'use strict';

	var bgStorage = angular.module('bgStorage',['ui.router','firebase']);

	bgStorage.config(function ($stateProvider, $urlRouterProvider) {
		
		//$urlRouterProvider.otherwise('/intro');

		$stateProvider
		
			.state('intro',{
				url:'/intro',
				templateUrl:'components/intro/introView.html'
			})

			.state('login',{
				url:'/login',
				templateUrl:'components/userSessions/loginView.html'
			})

			.state('register',{
				url:'/register',
				templateUrl:'components/userSessions/registerView.html'
			});

			
		
	});

	bgStorage.run(['$state', function ($state) {
   		$state.transitionTo('intro');
	}]);

})();