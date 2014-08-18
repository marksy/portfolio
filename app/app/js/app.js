console.log('Hey there! Thanks for looking into my site, and checking out my console messages.');


var app = angular.module('app', ['ngRoute','angular-carousel']).config(function($routeProvider)	{
		
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/clients', {
		templateUrl: 'views/clients.html',
		controller: 'ClientController'
	});
	$routeProvider.when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactController'
	});
	$routeProvider.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutController'
	});
	$routeProvider.otherwise({ redirectTo : '/' });
		
});

// controlls the menu
function MenuController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
		console.log('a nav item is now active');
	};
}

function gaController($scope, $location, $window) {
  $scope.$on('$viewContentLoaded', function(event) {
    $window.ga.push(['_trackPageview', $location.path()]);
  });
}

//unused controllers
app.controller('ClientController', function($scope) {
});
app.controller('ContactController', function($scope) {
});
app.controller('AboutController', function($scope) {
});
app.controller('HomeController', function($scope) {
});

