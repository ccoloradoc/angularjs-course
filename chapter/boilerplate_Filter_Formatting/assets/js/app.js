var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($scope) {
	$scope.usuario = {
		name: 'Cristian Colorado',
		company: 'Colorado Holding Inc.',
		salary: 3000,
		birthday: new Date(1985, 3, 1)
	};
});