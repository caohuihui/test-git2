angular.module('myApp')
    .controller('myCon', ['$scope', function ($scope) {
        $scope.list = messageData.rspPublicArgs.rspArgs;
        $scope.pageSize = 10;
        $scope.curPage = 0;
        $scope.pageCount = Math.ceil($scope.list.length / $scope.pageSize) - 1



    }])
    .filter('pageStartFrom', [function () {
        return function (input, start) {
            start = +start;
            return input.slice(start);
        }
    }])