angular.module('myApp')
    .controller('myCon', ['$scope', function ($scope) {
        $scope.tagList = [
            {
                tag: '兴趣爱好',
                url: '../views/demo1.html'
            },
            {
                tag: '输入过滤信息',
                url: '../views/demo2.html'
            },
            {
                tag: 'limitTo分页效果',
                url: '../views/demo26.html'
            },
            {
                tag: '理财',
                url: '../views/demo3.html'
            },
            {
                tag: '输入关键字',
                url: '../views/demo4.html'
            },
            {
                tag: '选择颜色',
                url: '../views/demo5.html'
            },
            {
                tag: '下拉菜单',
                url: '../views/demo6.html'
            },
            {
                tag: '请选择你的萌宠',
                url: '../views/demo7.html'
            },
            {
                tag: '颜色列表',
                url: '../views/demo8.html'
            },
            {
                tag: '2015年中超联赛积分榜',
                url: '../views/demo9.html'
            },
            {
                tag: '验证',
                url: '../views/demo10.html'
            },
            {
                tag: '看变化',
                url: '../views/demo14.html'
            },
            {
                tag: '鸟人',
                url: '../views/demo15.html'
            },
            {
                tag: 'copy',
                url: '../views/demo16.html'
            },
            {
                tag: '计算表达式',
                url: '../views/demo17.html'
            },
            {
                tag: '当前时间',
                url: '../views/demo18.html'
            },
            {
                tag: '注册',
                url: '../views/demo19.html'
            }
    ];

        $scope.getRandomBgColor = function () {
            var btnColors = ['btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger'];
            var random = Math.floor(Math.random() * (btnColors.length)) + 0;
            return btnColors[random];
        };

}])