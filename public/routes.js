angular.module('hfc').config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'homepage/homepage.view.html'
    })
    .when('/about', {
        template: '<h1>About</h1>'
    })
    .when('/contact', {
        template: '<h1>Contact</h1>'
    });

    $locationProvider.html5Mode(true);
});
