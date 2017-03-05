app.config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/login',{
            templateUrl: 'partials/login.html',
            controller:'loginCtrl'
        })
        .when('/profile',{
            templateUrl: 'partials/profile.html',
            controller:'profileCtrl'
        })
        .when('/myBenefits',{
            templateUrl: 'partials/benefits.html',
            controller:'programsCtrl'
        })
        .when('/programs',{
            templateUrl: 'partials/programs.html',
            controller:'programsCtrl'
        })
        .when('/noPage',{
            templateUrl: 'partials/errorPage.html'
        })
        .when('/contactUs',{
            templateUrl: 'partials/contactUs.html'
        })
        .otherwise({
            redirectTo : '/login'
        })
}]);