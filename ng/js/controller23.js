angular.module('myApp')
    .controller('test', ['$scope', function ($scope) {
        var list = {
            "name": "zhangsan",
            "age": "20"
        }
        angular.forEach(list, function (value, key) {
                console.log(key + " is " + value)
                 
            })

        var arr = [
            {
                "name": "zhangsan",
                "age": "20"
            },
            {
                "name": "lisi",
                "age": "25"
            }
        ]
        angular.forEach(arr, function (value) {
            console.log("name is " + value.name + " , age is " + value.age)
        })
    }])