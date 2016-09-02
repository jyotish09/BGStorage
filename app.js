(function(){

	'use strict';

	var bgStorage = angular.module('bgStorage',['ui.router','rzModule','ui.bootstrap']);

	bgStorage.config(function ($stateProvider, $urlRouterProvider) {
		
		//$urlRouterProvider.otherwise('/intro');

		$stateProvider
		
			.state('intro',{
				url:'/intro',
				templateUrl:'components/intro/introView.html',
				controller:'LoginController as login'

			})

			.state('login',{
				url:'/login',
				templateUrl:'components/userSessions/loginView.html'
			})

			.state('register',{
				url:'/register',
				templateUrl:'components/userSessions/registerView.html',
				controller:'RegisterController as reg'
			})

			.state('smartphone',{
				url:'/smartphone',
				templateUrl:'components/smartphone/smartphoneView.html',
				controller:'SmartphoneController as smartphone'
			});

			
		
	});

	bgStorage.run(['$state', function ($state) {
   		$state.transitionTo('intro');
	}]);

	var config = {
	   apiKey: "AIzaSyD04CJo57Qapkf-wSn7OS-ve7pEiLmciCE",
	   authDomain: "buyingguide-a0558.firebaseapp.com",
	   databaseURL: "https://buyingguide-a0558.firebaseio.com",
	   storageBucket: "buyingguide-a0558.appspot.com",
	 	};
	firebase.initializeApp(config);

	var rootRef = firebase.database().ref();

	//console.log(rootRef);

	angular.module('bgStorage').factory('firebaseRef', function($firebaseArray){
        var ref = rootRef;
        return ref;
    });


})();