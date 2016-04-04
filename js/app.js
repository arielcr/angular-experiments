var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})

	.when('/about/:num', {
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})

});

app.controller('mainController', ['$scope', '$log', function($scope, $log){

	$scope.name = "Ariel Orozco Rivera";

}]);

app.controller('aboutController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams){

	$scope.about = "About me! => " + $routeParams.num;

}]);