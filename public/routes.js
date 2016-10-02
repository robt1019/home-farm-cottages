angular.module('hfc').config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'homepage/homepage.view.html'
    })
    .when('/about', {
        template: '<hfc-navbar></hfc-navbar><h1>About</h1>'
    })
    .when('/contact', {
        template: '<hfc-navbar></hfc-navbar><h1>Contact</h1>'
    });

    $locationProvider.html5Mode(true);
});
