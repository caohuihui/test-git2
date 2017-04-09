angular.module("myApp")
		.config(route)
		.controller("test",test)
		

function route($routeProvider){
	$routeProvider
				.when("/",{
					templateUrl:"../template/test1.html"
				})
				.when("/view2",{
					templateUrl:"../template/test2.html"
				})
				.otherwise({ redirectTo: '/' });
}
function test($scope){
	$scope.list=[
		{name: 'a乔乐', age:'25'},
        {name: 'b周迅', age:'40'},
        {name: 'c魏瑞', age:'25'},
        {name: 'd展昭', age:'98'}
	]

	$scope.add=function(){

		if($scope.name=='' || $scope.age==''){
			return false;
		}else{
			$scope.list.push({
				name:$scope.name,
				age:$scope.age
			})
			$scope.name='';
			$scope.age='';
		}
		
	}
}