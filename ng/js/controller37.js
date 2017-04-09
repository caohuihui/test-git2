angular.module('myApp')
    .controller('myCon', ['$scope', '$parse', function ($scope, $parse) {
        $scope.$watch('expr', function (newVal, oldVal, scope) {
            if (newVal !== oldVal) {
                var parseFun = $parse(newVal);
                scope.parsedExpr = parseFun(scope);
            }
        });
    }])