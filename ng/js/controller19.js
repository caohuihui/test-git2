angular.module('myApp')
    .controller('myCtrl', myCtrl);
    myCtrl.$inject = ['$scope'];

    function myCtrl($scope) {
        $scope.clock = {
            now: new Date().toLocaleString()
        };
        var updateClock = function () {
            $scope.clock.now = new Date().toLocaleString()
        };
        setInterval(function () {
            $scope.$apply(updateClock);
        }, 1000);
        updateClock();
    }