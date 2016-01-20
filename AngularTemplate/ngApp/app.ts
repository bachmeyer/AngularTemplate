namespace $safeprojectname$ {

    angular.module("$safeprojectname$", ['ngRoute'])
        .config(function($routeProvider) {
            //$routeProvider.when('/', {
            // templateUrl: '/path/to/view',
            // controller: $safeprojectname$.Controllers.ControllerClass,
            // controllerAs: 'views variable name for controller'
            //});
            $routeProvider.when('/', { template: 'Hello World!' });
        });
}