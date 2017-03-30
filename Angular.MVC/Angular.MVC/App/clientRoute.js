contactApp.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: "/app/Home/home.html"
        }),
        $routeProvider.when('/about', {
            templateUrl: "/app/home/ablout.html"
        }),
        $routeProvider.when('/mycontacts', {
            templateUrl: "app/contact/html/contactList.html",
            controller: "contactController"
        }),
        $routeProvider.when('/mycontacts/newcontact', {
            templateUrl: "app/contact/html/contactForm.html"
        }),
        $routeProvider.otherwise({
            redirectTo: '/'
        });

}]);