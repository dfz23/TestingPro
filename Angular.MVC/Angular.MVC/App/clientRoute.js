contactApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: "app/home/home.html"
    }),
        $routeProvider.when('/about', {
            templateUrl: "app/home/about.html"
        }),
        $routeProvider.when('/mycontacts', {
            templateUrl: "/app/contact/html/contactList.html",
            controller: "contactController"
        }),
        $routeProvider.when('/mycontacts/newcontact', {
            templateUrl: "/app/contact/html/contactForm.html"
        }),
        $routeProvider.when('/mycontacts/:id', {
            templateUrl: "app/contact/html/contactForm.html",
            controller: "contactEditController"
        }),

        $routeProvider.otherwise({
            redirectTo: '/'
        });

}]);