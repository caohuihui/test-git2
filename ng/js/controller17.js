angular.module("myApp")
		.factory("info",info)
		.controller("test",test)

function info(){
	var obj={}
	obj.names = [
        {name: 'a乔乐', age:'25'},
        {name: 'b周迅', age:'40'},
        {name: 'c魏瑞', age:'25'},
        {name: 'd展昭', age:'98'}
    ];
    obj.setName=function(){
    	return this.names
    };
    obj.getName=function(){
    	return this.names.push({
    		name:"dddd",age:"80"
    	})
    }
    return obj
}

function test($scope,info){
	info.getName()
	$scope.list=info.setName()
	
	
}