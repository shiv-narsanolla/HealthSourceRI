app.controller("profileCtrl",["$scope", "$rootScope", "$log", "$location", "myServices", "SessionKeeper" ,function($scope, $rootScope, $log, $location, myServices, SessionKeeper){

    if(SessionKeeper.read()){
        $scope.current = SessionKeeper.read();
        $log.info("session data = "+JSON.stringify($scope.current));
    }
    if(angular.isDefined($scope.current) && angular.isDefined($scope.current.loginData)){
        var loginData = $scope.current.loginData;
        $scope.userName = loginData.userName;
        $rootScope.isAuthenticated = true;
    }else{
        $location.path("/login");
    }

}]);