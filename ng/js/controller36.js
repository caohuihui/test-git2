angular.module('myApp')
    .controller('myCon', ['$scope', function ($scope) {
        $scope.validFormList = [
            {
                name: '$valid',
                class: 'ng-valid',
                ngClass: 'success',
                desc: '通过当前验证设置的验证规则'
            },
            {
                name: '$invalid',
                class: 'ng-invalid',
                ngClass: 'danger',
                desc: '无法通过当前验证设置的验证规则'
            },
            {
                name: '$pristine',
                class: 'ng-pristine',
                ngClass: 'active',
                desc: '当前表单/输入区未修改过'
            },
            {
                name: '$dirty',
                class: 'ng-dirty',
                ngClass: 'warning',
                desc: '当前表单/输入区修改过'
            },
            {
                name: '$touched',
                class: 'ng-touched',
                ngClass: 'warning',
                desc: '是否点击过输入区(Angular 1.3+)'
            }
    ];

        $scope.registerSuccess = false;
        $scope.submitForm = function () {
            $scope.registerSuccess = true;
            console.log($scope.user);
        };

    }])