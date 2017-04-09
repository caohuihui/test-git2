angular.module('myApp')
    .controller('myCon', ['$scope', function ($scope) {
        $scope.your = {
            province: '',
            city: '',
            area: ''
        };
        $scope.chinaCities = [
            {
                py: 'sh',
                province: '上海',
                cities: [{
                    city: '上海',
                    areas: ['浦东新区', '黄浦区', '青浦区', '卢湾区', '闸北区', '静安区']
                }]
            },
            {
                py: 'bj',
                province: '北京',
                cities: [{
                    city: '北京',
                    areas: ['东城区', '西城区', '崇文区', '宣武区', '朝阳区']
                }]
            },
            {
                py: 'hb',
                province: '湖北',
                cities: [{
                    city: '武汉',
                    areas: ['江岸区', '江汉区', '硚口区', '武昌区', '洪山区']
                }, {
                    city: '襄阳',
                    areas: ['襄城区', '樊城区', '襄州区', '枣阳市', '南漳县', '保康县', '老河口市']
                }]
            }
  ];
        $scope.your.province = $scope.chinaCities[0];
        $scope.your.city = $scope.your.province.cities[0];
        $scope.your.area = $scope.your.city.areas[0];
        $scope.selectedFirstValue = function (province) {
            $scope.your.city = province ? province.cities[0] : '';
            $scope.your.area = province ? province.cities[0].areas[0] : '';
        };
    }])