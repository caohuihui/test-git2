angular.module("myApp")
		.controller("test",test)

function test($scope){
	$scope.reset=function(n){
		$("#content").css("background",n)
	}
}