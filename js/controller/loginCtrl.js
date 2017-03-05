app.controller("loginCtrl",["$scope", "$rootScope", "$log", "$location", "myServices", "SessionKeeper" ,function($scope, $rootScope, $log, $location, myServices, SessionKeeper){

    $scope.userName = "";
    $scope.userPassword = "";
    $scope.isError = false;
    $scope.errMsg = "";
    $rootScope.isAuthenticated = false;

    if(SessionKeeper.read()){
        $scope.current = SessionKeeper.read();
    }
    if(angular.isDefined($scope.current) && angular.isDefined($scope.current.loginData)){
        $rootScope.isAuthenticated = true;
        $location.path("/profile");
    }
    var validateUser = function(){
        $scope.isError = false;
        if((angular.isUndefined($scope.userName) || $scope.userName == "") && (angular.isUndefined($scope.userPassword) || $scope.userPassword == "")){
            $scope.isError = true;
            $scope.errMsg = "Username and/or Password fields cannot be left blank.";
            return false;
        }else if(angular.isUndefined($scope.userName) || $scope.userName == ""){
            $scope.isError = true;
            $scope.errMsg = "User Name cannot be blank";
            return false;
        }else if(angular.isUndefined($scope.userPassword) || $scope.userPassword == ""){
            $scope.isError = true;
            $scope.errMsg = "Password cannot be blank";
            return false;
        }
        return true;

    };

    $scope.submit = function(){
        if(validateUser()){
            myServices.getCMBCaseLevelSummary($scope.userName).then(function(response){
                if(response.status == "200" && response.statusText == "OK"){
                    $log.info("data is "+JSON.stringify(response));
                    $scope.current ={
                        loginData : {
                            userName : $scope.userName,
                            details : response.data
                        }
                    };
                    $rootScope.isAuthenticated = true;
                    SessionKeeper.save($scope.current);
                    $location.path("/profile");

                }else if(angular.isDefined(response.statusText)){
                    $log.info("data is "+JSON.stringify(response.statusText));
                }

            })
        }

    }


}]);