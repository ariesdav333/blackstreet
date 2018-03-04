var BlackApp = angular.module('BlackApp', ['ngRoute', 'RouteControllers']);
 
angular.module('BlackApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'     
    })

    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    })

    .when('/band', {
        templateUrl: 'templates/band.html',
        controller: 'BandController'
    })

    .when('/info', {
        templateUrl: 'templates/info.html',
        controller:'ContactusController'
    })

     .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'

     });
});


//create the controller and inject Angular
BlackApp.controller('HomeController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Blackstreet are in the House';
}); 


