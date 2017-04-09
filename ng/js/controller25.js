var app=angular.module("myApp",[])
app.controller("myControl",["$scope",function($scope){
	
}])
.directive("equalTo", function () {
	return {
		require: "ngModel",
		link: function (scope, ele, attrs, ctrl) {
			var target = attrs["equalTo"];//获取自定义指令属性键值
			if (target) {								//判断键是否存在
				scope.$watch(target, function () {		//存在启动监听其值
					ctrl.$validate()					//每次改变手动调用验证
				})
				// 获取当前模型控制器的父控制器FormController
				var targetCtrl = ctrl.$$parentForm[target];							//获取指定模型控制器
				ctrl.$validators.equalTo = function (modelValue, viewVale) {		//自定义验证器内容
					var targetValue = targetCtrl.$viewValue;						//获取password的输入值
					return targetValue == viewVale;									//是否等于passwordConfirm的值
				}
				ctrl.$formatters.push(function (value) {
					return value;
				})
				ctrl.$parsers.push(function (value) {
					return value;
				})
			}
		}
	}
})
/*
	equalTo 用来检测两个密码之间是否一致
*/