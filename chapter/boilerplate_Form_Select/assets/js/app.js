var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($scope) {
	$scope.brands = ['Samsung', 'Apple', 'Motorola'];

	$scope.devices = [
		{ name: 'Galaxy S3', brand: 'Samsung'},
		{ name: 'Galaxy S4', brand: 'Samsung'},
		{ name: 'iPhone 6', brand: 'Apple'},
		{ name: 'iPhone 6s', brand: 'Apple'},
		{ name: 'Motorola X', brand: 'Motorola'}
	];

	$scope.getDeviceDetails = function(device) {
		return device.name + '[' + device.brand + ']';
	};
});