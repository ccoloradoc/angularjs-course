var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($scope, $log) {
	$scope.message = "Hello World!";
	$scope.$log = $log;
});