var myApp = angular.module('myApp',[]);

myApp.controller('MainController', function($scope) {
	$scope.name = 'Cristian';
	$scope.error = false;
	$scope.users = ['Andres', 'Luis', 'Angel'];

	$scope.$watch('name', function(newVal, oldVal) {
		$scope.error = false;
		for(var i = 0; i < $scope.users.length; i++ ) {
			if($scope.users[i] == newVal) {
				$scope.error = true;
			}
		}
	});
});
