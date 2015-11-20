var myApp = angular.module('myApp', []);

myApp.service('ActivityService', function($http, $log) {
	this.url = '/api/activity';

	this.error = function(res) {
		$log.error(res);
	};

	this.load = function($scope) {
		$http.get(this.url)
			.then(function(response) {
				$scope.list = response.data;
			},
			this.error);
	};

	this.addActivity = function($scope) {
		$http.post(this.url, $scope.activity).then(
			function(response) {
				$scope.list.push($scope.activity);
				$scope.activity = { done: false };
			},
			this.error);
	}

	this.deleteActivity = function(item, $scope) {
		$http.delete(this.url + '/' + item.id, item).then(
			function(response) {
				$scope.list = response.data;
			},
			this.error);	
	}

	this.editActivity = function(item, $scope) {
		$http.put(this.url + '/' + item.id, item).then(
			function(response) {
				$scope.edit[item.id] = false;
			},
			this.error);	
	};

	this.done = function(item, $scope) {
		$http.put(this.url + '/' + item.id, item).then(
			function(response) {
				$log.info(response.data);
			},
			this.error);	
	};
});

myApp.controller('MainController', function($scope, $http, ActivityService) {
	$scope.list = [];

	$scope.hideDone = false;

	$scope.activity = { done: false };

	$scope.edit = {};

	$scope.addActivity = function() {
		ActivityService.addActivity($scope);
	}

	$scope.deleteActivity = function(item) {
		ActivityService.deleteActivity(item, $scope);
	}

	$scope.editActivity = function(item) {
		ActivityService.editActivity(item, $scope);
	};

	$scope.done = function(item) {
		ActivityService.done(item, $scope);
	};

	//Load Activity
	ActivityService.load($scope);
});