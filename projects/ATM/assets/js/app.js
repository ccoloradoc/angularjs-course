var myApp = angular.module('myApp',[]);

myApp.controller('MainController', function($scope) {

	$scope.usuario = {
		saldo: 10000,
		retiroLimite: 2500,	
	};

	$scope.atm = {
		billeteMenor: 100,
		retiro: 100,
		excedeLimite: false
	}	

	$scope.$watch('atm.retiro', function(newVal, oldVal, scope) {
		scope.atm.excedeLimite = scope.atm.retiro > scope.usuario.retiroLimite ? true: false;
	});
 
	$scope.ejecutaRetiro = function() {
		if(!$scope.atm.excedeLimite) {
			$scope.usuario.saldo -= $scope.atm.retiro;
			$scope.atm.retiro = 0;
		}
	}

});
