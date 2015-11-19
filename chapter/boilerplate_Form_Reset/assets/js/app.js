var myApp = angular.module('myApp',[]);

myApp.controller('MainController', function($scope) {
	$scope.user = {
		name: 'Cristian',
		email: 'ccoloradoc@gmail.com',
		short_description: 'I am a code warlord!'
	};

	$scope.original = angular.copy($scope.user);

	$scope.reset = function() {
		$scope.user = angular.copy($scope.original);
	};

	$scope.submit = function() {
		console.log($scope.user);
	}
});
