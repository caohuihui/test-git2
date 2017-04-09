angular.module('myApp')
    .controller('myCon', ['$scope', function ($scope) {
        $scope.master = {};
        $scope.reset = function () {
            angular.copy($scope.master, $scope.user);
        };
        $scope.reset();
        $scope.save = function (user) {
            $scope.master = angular.copy(user);
        };


    }])