angular.module('myApp')
    .controller('test', ['$scope', function ($scope) {
        $scope.article = {    
            title: '英国上演<b>“鸟人”</b>飞行大赛 选手奇装异服吸睛',
                content: '<img src="http://file.ynet.com/2/1508/17/10311502-500.jpg" border="0" alt="希克斯驾驶他的“天空之战”主题战机参赛。"><p>国际在线专稿：据英国《每日邮报》8月16日报道，上周末，一年一度的沃辛国际鸟人大赛在英国苏塞克斯的一个海边小镇举行。“鸟人”选手们不仅带来造型奇特的飞行装置，还身着搞笑服装以吸引观众注意，无数次将气氛推上高潮。</p><p>图为参赛者乔尔·希克斯驾驶他的“天空之战”主题战机参赛。</p>'    
        };
}])
    .filter('beSafeHtml', ['$sce', function ($sce) {    
        return function (html) {        
            return $sce.trustAsHtml(html);    
        };
}])
    .filter('trustHtml', ['$sceDelegate', '$sce', function ($sceDelegate, $sce) {    
        return function (html) {        
            return $sceDelegate.trustAs($sce.HTML, html);    
        };
}]);