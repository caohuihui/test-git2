angular.module("myApp")
		.controller("ControllerA",ControllerA)
		.controller("ControllerB",ControllerB)
		.controller("ControllerC",ControllerC)
		.controller("ControllerD",ControllerD)
ControllerA.$inject=['$scope'];
ControllerB.$inject=['$scope'];
ControllerC.$inject=['$scope'];
ControllerD.$inject=['$scope'];
function ControllerA($scope) {
    $scope.name = '爸爸';
}
 
function ControllerB($scope) {
    $scope.name = '儿子';
}
 
function ControllerC($scope) {
    $scope.name = '孙子';
}
 
function ControllerD($scope) {
 
}