(function(){

	'use strict';
	var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
  	};

  	var rootRef = firebase.initializeApp(config);
  	
	console.log(rootRef);
	angular.module('bgStorage').controller('LoginController',LoginController);

	function LoginController($scope){

		console.log("Hello");
		var vm =this;
		vm.userService = userService;  
		
		
	}

})();