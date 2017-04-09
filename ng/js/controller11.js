angular.module("myApp")
		.controller("test",test);
function test($scope){
	 $scope.setBg = function(color) {
    return { 'background': color };
  };
  $scope.colorSet = {
    red: '红色',
    blue: '蓝色',
    green: '绿色'
  };
}