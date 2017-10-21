angular.module('BlackApp', ['ngRoute', 'RouteControllers']);
 
angular.module('BlackApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })

     .when('/about', {
        templateUrl: 'templates/about.html',
        //'TestimonialController'
    })

     .when('/members', {
        templateUrl: 'templates/members.html',
        // 'ContactusController'
    })

    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
});