angular.module('app').controller('LoginCtrl', function ($scope, $state, $http) {


    $scope.login = function () {

        $state.go('root.dash')
    }

    console.log('test')

});