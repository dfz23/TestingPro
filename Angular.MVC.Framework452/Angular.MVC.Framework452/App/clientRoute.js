contactApp.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: "app/Home/home.html"
        }),
        $routeProvider.when('/about', {
            templateUrl: "app/Home/about.html"
        }),

        $routeProvider.otherwise({
            redirectTo: '/'
        });
}]);