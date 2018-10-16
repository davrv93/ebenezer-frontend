angular.module('app').controller('DiagnosticTagIndexCtrl', function ($scope, $state, $http, API, $sce) {

    $scope.page = 1;

    $scope.list = function (page) {
        var data = {};

        if (page) {
            data.page = page;
            $scope.page = page;
        }

        API.DiagnosticTag.list(data).$promise.then(function (r) {
            $scope.data = r;
        })

    }

    $scope.create = function () {
        $state.go('root.diagnostic_tag_f',

            {
                notify: true,
                reload: true

            });

    }

    $scope.edit = function (id) {
        $state.go('root.diagnostic_tag_f', {
            id: id
        }, {
            notify: true,
            reload: true

        });
    }

    $scope.delete = function (id) {
        API.DiagnosticTag.delete({
            id: id
        }).$promise.then(function (r) {
            console.log('r', r)
            $scope.list($scope.page);
        })
    }

    $scope.list();
    $scope.login = function () {

        $state.go('root.dash')
    }

    console.log('test 2')

});