var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($scope) {
	$scope.printScope = function() {
		console.log($scope);
	};
	
});