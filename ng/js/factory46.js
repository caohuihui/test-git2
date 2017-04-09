app.factory('MovieService', ['$q', '$http', function ($q, $http) {
    var factory = {};

    factory.getJson = function (url, data) {
        var deferred = $q.defer();
        $http({
                method: 'GET',
                url: url,
                params: data
            })
            .success(function (data) {
                deferred.resolve(data);
            }).error(function (reason) {
                deferred.reject(url + data + '获取数据失败' + reason);
            });
        return deferred.promise;
    };
    return factory;
}]);