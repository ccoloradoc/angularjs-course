var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($scope, $http) {

	$scope.response = {
		data: {}, 		// – {string|Object} – The response body transformed with the transform functions.
		status: 0,		// – {number} – HTTP status code of the response.
		headers: function() {},  //– {function([headerName])} – Header getter function.
		config: {}, 		//– {Object} – The configuration object that was used to generate the request.
		statusText: '' 		// – {string} – HTTP status text of the response.
	};



	$http({method: 'get', url: 'json/products.json', params: {a: 1, b: 2}})
		.then(function(response) {
			$scope.response = response;
			$scope.products = response.data;
		}, function(response) {
			$scope.response = response;
		});
});