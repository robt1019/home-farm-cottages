angular.module('hfc').directive('hfcNavbar', ['$location',
    function($location) {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'navbar/navbar.view.html',
            link: function(scope) {
                function initialise () {
                    switch ($location.url()) {
                        case ('/'):
                            scope.activeMenuId = 'navbar-home';
                            break;
                        case ('/about'):
                            scope.activeMenuId = 'navbar-about';
                            break;
                        case ('/contact'):
                            scope.activeMenuId = 'navbar-contact';
                            break;
                        default:
                            scope.activeMenuId = 'navbar-home';
                    }
                }

                initialise();
            }
        };
    }
]);
