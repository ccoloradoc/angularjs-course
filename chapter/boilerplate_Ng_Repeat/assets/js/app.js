var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($scope) {
	$scope.items = ['Luis', 'Ana', 'Julen', 'Matt', 'Cristian'];

	$scope.users = [
		{ name: 'Luis', age: 25},
		{ name: 'Ana', age: 24},
		{ name: 'Julen', age: 23},
		{ name: 'Matt', age: 26},
		{ name: 'Cristian', age: 30}
	];
});