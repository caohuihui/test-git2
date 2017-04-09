app.controller('MainCtrl', ['$scope', '$filter', 'MovieService', function ($scope, $filter, MovieService) {

    $scope.searchInfo = {
        movieType: '',
        movieTypeList: ['喜剧', '爱情', '动作', '动画', '科幻', '魔幻', '纪实', '灾难', '战争'],
        movieBoxOffice: '',
        movieBoxOfficeList: [
            {
                name: '单日票房',
                type: 'day',
                box: '单日票房',
                url: "javascript:;;"
                    },
            {
                name: '单周票房',
                type: 'week',
                box: '单周票房',
                url: "javascript:;;"
                    },
            {
                name: '周末票房',
                type: 'weekend',
                box: '周末票房',
                url: "javascript:;;"
                    },
            {
                name: '单月票房',
                type: 'month',
                box: '单月票房',
                url: "javascript:;;"
                    },
            {
                name: '全球票房',
                type: 'world',
                box: '周末票房',
                url: "javascript:;;"
                    },
            {
                name: '历史票房',
                type: 'history',
                box: '历史票房',
                url: "javascript:;;",
                pageIndex: 1
                    },
            {
                name: '影院票房',
                type: 'cinema',
                box: '单日票房',
                url: "javascript:;;",
                pageIndex: 1
                    }
    ],
        movieBoxOfficeType: ''
    };
    MovieService.getJson("../data/data46.json").then(function (data) {
        $scope.list = data.data1;
    })


}]);