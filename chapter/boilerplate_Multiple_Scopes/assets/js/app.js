var myApp = angular.module('myApp',[]);

myApp.controller('MainController', function($scope, $rootScope) {
	$scope.name = 'Cristian';
	$scope.printScope = function() {
		console.log($scope);
	}
	$scope.printRootScope = function() {
		console.log($rootScope);
	}
});

myApp.controller('SecondaryController', function($scope) {
	$scope.name = 'Adriana';
	$scope.printScope = function() {
		console.log($scope);
	}
});
