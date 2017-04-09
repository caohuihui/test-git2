angular.module("myApp")
	.controller("FirstCtrl",FirstCtrl)
	FirstCtrl.$inject=["$scope"];
	function FirstCtrl($scope){
    $scope.filterList=['currency','date','filter','json','limitTo', 'lowercase', 'number', 'orderBy', 'uppercase'];
}