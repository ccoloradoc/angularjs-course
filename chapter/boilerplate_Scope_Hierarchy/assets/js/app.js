var myApp = angular.module('myApp',[]);

myApp.controller('GrandfatherController', function($scope) {
	$scope.name = 'Abe';
});

myApp.controller('FatherController', function($scope) {
	$scope.name = 'Homer';
});

myApp.controller('ChildController', function($scope) {
	$scope.name = 'Bart';
});