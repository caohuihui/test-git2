angular.module('myApp')
    .controller('myCon', ['$scope', function ($scope) {
        $scope.people = [
            {
                id: 0,
                name: '乔乐',
                interest: [
        '爬山',
        '游泳',
        '旅游',
        '美食'
      ]
    },
            {
                id: 1,
                name: 'Chris',
                interest: [
        '音乐',
        '美食',
        'Coffee',
        '看书'
      ]
    },
            {
                id: 2,
                name: '魏瑞',
                interest: [
        '音乐',
        '电影',
        '中国好声音',
        '爸爸去哪了',
        '非常静距离'
      ]
    },
            {
                id: 3,
                name: '小飞子',
                interest: [
        '游泳',
        '游戏',
        '宅家里'
      ]
    }
  ];
        $scope.selectedYourPeople = $scope.people[0].name;
    }])