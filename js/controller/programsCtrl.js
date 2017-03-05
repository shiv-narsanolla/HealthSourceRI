app.controller("programsCtrl",["$scope", "$log", "$location", "myServices", "SessionKeeper" ,function($scope, $log, $location, myServices, SessionKeeper){

    if(SessionKeeper.read()){
        $scope.current = SessionKeeper.read();
        $log.info("session data = "+JSON.stringify($scope.current));
    }
    if(angular.isDefined($scope.current) && angular.isDefined($scope.current.loginData)){
        var loginData = $scope.current.loginData;
        $scope.userName = loginData.userName;
    }else{
        $location.path("/login");
    }

}]);