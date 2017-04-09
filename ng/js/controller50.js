app.controller('myCtrl', myCtrl);
myCtrl.$inject = ['$scope', '$http'];

function myCtrl($scope, $http) {
    var url = '../data/data50.json';
    $http({
        method: 'GET',
        url: url
    }).then(function (res) {
        if (res.data) {
            $scope.children = res.data.data;
            console.log($scope.children)
        }
    }, function (res) {
        console.log(res);
    });


}