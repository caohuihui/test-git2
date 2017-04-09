app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home")
    $stateProvider.state("home", {
            url: "/home",
            templateUrl: "../template/home50.html"
        })
        .state("pro", {
            url: "/pro/:id",
            templateUrl: "../template/pro50.html",
            resolve: {
                getData: function ($http) {
                    return $http({
                        url: "../data/data50.json"
                    })
                }
            },
            controller: ["$scope", "$stateParams", "getData", function ($scope, $stateParams, getData) {
                $scope.data = getData.data.data;
                $scope.id = $stateParams.id;
                angular.forEach($scope.data, function (val, ind) {
                    if ($scope.id == val.id) {
                        $scope.obj = val;
                    }
                })
                }]
        })
})