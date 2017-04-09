angular.module('myApp')
    .controller('myCon', ['$scope', function ($scope) {
        $scope.list = [
            {
                type: "name"
            },
            {
                type: "sex"
            },
            {
                type: "age"
            },
            {
                type: "birthday"
            },
            {
                type: "address"
            },
            {
                type: "country"
            }

        ]
        $scope.focus = function (target) {    
            $scope.currFocus = target.getAttribute('name');    
            $scope.jQCurrFocus = $(target).attr('name');  
        };
    }])