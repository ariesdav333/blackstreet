angular.module('BlackApp', ['ngRoute']);
 
angular.module('BlackApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        
    })

    .when('/about', {
        templateUrl: 'templates/about.html',
        //'TestimonialController'
    })

    .when('/band', {
        templateUrl: 'templates/band.html',
        //'mwembers register area'
    })

    .when('/info', {
        templateUrl: 'templates/info.html',
        // 'ContactusController'
    });

   

});