var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('MainController', function($scope, $rootScope) {
	$scope.printScope = function() {
		console.log($scope);
	};
});