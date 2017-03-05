app
    .constant("servicePaths", {
        getCMBCaseLevelSummary: {
            backendUrl: "/CMBCaseLevelSummary/",
            stubUri: "stubs/getCMBCaseLevelSummary.json"
        }
    })
    .factory("myServices", ["$http", "$q", "$log", "servicePaths", function($http, $q, $log, servicePaths){

        var useStubs = true;
        var url = "/something";

        var getCMBCaseLevelSummary = function(userName){

            if(useStubs)
                url = servicePaths.getCMBCaseLevelSummary.stubUri;
            else
                url = servicePaths.getCMBCaseLevelSummary.backendUrl+userName;
            return backendCall();
        };

        var backendCall = function(){

            return $http.get(url)
                .then(function(response){
                    return (response);
                },function(error){
                    return (error);
                });
            };

        return {
            getCMBCaseLevelSummary : getCMBCaseLevelSummary

        }

}]);