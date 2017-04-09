angular.module('myApp')
		.controller('test',['$scope',function($scope){
			$scope.list=[
				{
					name:'a乔乐',
					tel:'158000000000'
				},
				{
					name:'b周迅',
					tel:'182000000000'
				},
				{
					name:'c赵薇',
					tel:'139000000000'
				},
				{
					name:'d黄晓明',
					tel:'185000000000'
				},
				{
					name:'e林心如',
					tel:'185000000000'
				}
			];
		}])
		.filter('filter1',function(){
			return function(item){
				return item+'[追加内容：单参数在此过滤！]'
			}
		}).filter('filter2',function(){
			return function(item,num){
				for(var i=0;i<num;i++){
					item=item+'6'
				}
				return item;
			}
		}).filter('filter3',function(){
			return function(items){
				angular.forEach(items,function(item,i){
					item=i+'.'+item;
					items[i]=item;
				});
				return items;
			}
		}).filter('filter4',function(){
			return function(items){
				var str="";
				angular.forEach(items,function(item,i){
					str+=""+item.name.charAt(0).toUpperCase()+item.name.slice(1)
				});
				return str
			}
		})