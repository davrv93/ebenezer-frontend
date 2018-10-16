angular.module('app').controller('DiagnosticTagFormCtrl', function ($scope, $state, $stateParams, $http, API, $sce) {


    $scope.items = {}

    $scope.get = function () {

        var id = $stateParams.id;

        if (id) {
            API.DiagnosticTag.get({
                id: id
            }).$promise.then(function (r) {
                console.log(r, 'YESSS')
                $scope.items = r;
            })
        }




    }

    $scope.get();

    $scope.update = function (back) {
        console.log($scope.items)
        API.DiagnosticTag.update($scope.items).$promise.then(function (r) {
            console.log(r, 'r')

            $(".alert").alert();
            $scope.success = true;
            if (back == true) {
                $state.go('root.diagnostic_tag', {
                    notify: true,
                    reload: true

                })
            }
        })
    }



    $scope.save = function (back) {

        API.DiagnosticTag.post($scope.items).$promise.then(function (r) {
            console.log(r, 'r')
            $scope.success = true;
            $(".alert").alert();
            if (back == true) {
                $state.go('root.diagnostic_tag', {
                    notify: true,
                    reload: true

                })
            }
        })

    }


});

/*
pruebas:
sonar - software

pruebas de código

pruebas de seguridad:
lowask

pruebas de estress
gmitter
para el 21

*/