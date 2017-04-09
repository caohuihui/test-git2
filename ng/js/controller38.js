angular.module('myApp')
    .controller('myCon', ['$scope', function ($scope) {
        $scope.master = {};

        $scope.update = function (user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function () {
            angular.copy($scope.master, $scope.user);
        };

        $scope.reset();
     }])