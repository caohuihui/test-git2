var app=angular.module("myApp",[])
app.controller('SelfCtrl', function($scope) {
	$scope.click = function () {
		$scope.$broadcast('to-child', 'child');
		$scope.$emit('to-parent', 'parent');
	}
});

app.controller('ParentCtrl', function($scope) {
	$scope.$on('to-parent', function(event,data) {
		document.write('ParentCtrl', data);       //父级能得到值
	});
	$scope.$on('to-child', function(event,data) {
		document.write('ParentCtrl', data);       //子级得不到值
	});
});

app.controller('ChildCtrl', function($scope){
	$scope.$on('to-child', function(event,data) {
		document.write('ChildCtrl', data);      //子级能得到值
	});
	$scope.$on('to-parent', function(event,data) {
		document.write('ChildCtrl', data);      //父级得不到值
	});
});

app.controller('BroCtrl', function($scope){
	$scope.$on('to-parent', function(event,data) {
		document.write('BroCtrl', data);         //平级得不到值
	});
	$scope.$on('to-child', function(event,data) {
		document.write('BroCtrl', data);         //平级得不到值
	});
});