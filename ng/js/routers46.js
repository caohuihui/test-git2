app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home")
    $stateProvider.state("home", {
            url: "/home",
            templateUrl: "../template/home46.html"
        })
        .state("pro", {
            url: "/pro/:id",
            templateUrl: "../template/pro46.html",
            resolve: {
                getData: function ($http) {
                    return $http({
                        url: "../data/data46.json"
                    })
                }
            },
            controller: ["$scope", "$stateParams", "getData", function ($scope, $stateParams, getData) {
                $scope.data = getData.data.data1;
                $scope.id = $stateParams.id;
                angular.forEach($scope.data, function (val, ind) {
                    if ($scope.id == val.IRank) {
                        $scope.obj = val;
                    }
                })
                }]
        })
})