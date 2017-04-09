angular.module('myApp')
    .controller('myCon', [function () {
        this.name = 'Joe';
        var nickname = 'Happy Joe';
        this.nickname = nickname;
    }])