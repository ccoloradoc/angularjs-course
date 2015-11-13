var myApp = angular.module('myApp',[]);

myApp.controller('MainController', function($scope) {
	$scope.list = [
		{ name: 'Estudiar curso de AngularJS en Udemy', done: true },
		{ name: 'Realizar todas mis practicas', done: false },
		{ name: 'Conseguir un trabajo genial', done: false}
	];

	$scope.hideDone = false;

	$scope.activity = {};

	$scope.addActivity = function() {
		$scope.list.push($scope.activity);
		$scope.activity = {};
	}
});
