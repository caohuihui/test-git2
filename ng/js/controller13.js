angular.module("myApp")
		.controller("text",text)

function text($scope){
	$scope.list=[
		{team:"石家庄永昌",score:"30",city:20,num1:7,num2:7,num3:14,num4:11},
		{team:"山东鲁能",score:"24",city:15,num1:2,num2:9,num3:14,num4:16},
		{team:"辽宁宏远",score:"30",city:12,num1:4,num2:4,num3:14,num4:33},
		{team:"天津天大",score:"33",city:11,num1:5,num2:5,num3:14,num4:22},
		{team:"石家庄永昌",score:"12",city:20,num1:7,num2:6,num3:14,num4:20}
	]

	$scope.sort="";
	$scope.con=false;
	$scope.num=function(eve){
		if($scope.sort=eve){
			$scope.con=!$scope.con;
		}
	}
}