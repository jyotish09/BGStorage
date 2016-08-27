(function(){
	'use strict';

	angular.module('bgStorage').controller('RegisterController',RegisterController);

	function RegisterController(firebaseRef,$scope){
		var vm = this;
		//vm.ref = firebaseRef;
		vm.errorMsg = "";
		console.log("So far so good");
		var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

		vm.addUser = function(){

			if(!vm.name && !vm.email && !vm.password){
				alert("Fields can't be empty");
			}	
					
			else if(vm.email && !emailRegex.test(vm.email)){
				alert("Oops! Email not proper");
			}

			else{
				console.log("Good");
			}

			

		}
	}


})();