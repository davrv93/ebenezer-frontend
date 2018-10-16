angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "apps/core/template/login.html",
            controller: 'LoginCtrl',
            resolve: {
                // translatePartialLoader: function loadPartialLoader($translate, $translatePartialLoader) {
                //     $translatePartialLoader.addPart('menu');
                //     $translate.use()
                //     return $translate.refresh();
                // },
                MenuCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        "../apps/core/controllers/login.js"

                    );
                }]
            }
        })

        .state('root', {
            url: "/root",
            abstract: true,
            templateUrl: "apps/core/template/menu.html",
            controller: 'LoginCtrl',
            resolve: {
                // translatePartialLoader: function loadPartialLoader($translate, $translatePartialLoader) {
                //     $translatePartialLoader.addPart('menu');
                //     $translate.use()
                //     return $translate.refresh();
                // },
                MenuCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        "../apps/core/css/style.css",
                        "../apps/core/controllers/login.js"

                    );
                }]
            }
        }).state('root.dash', {
            url: '/dash',
            views: {
                'content': {
                    templateUrl: '../apps/core/template/dash.html',
                    controller: 'LoginCtrl'
                }
            },
            resolve: {
                MenuCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        "../apps/core/controllers/login.js"
                    );
                }]
            }
        }).state('root.settings', {
            url: '/settings',
            views: {
                'content': {
                    templateUrl: '../apps/settings/templates/index.html',
                    controller: 'LoginCtrl'
                }
            },
            resolve: {
                MenuCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        "../apps/core/controllers/login.js"
                    );
                }]
            }
        }).state('root.results', {
            url: '/results',
            views: {
                'content': {
                    templateUrl: '../apps/results/templates/index.html',
                    controller: 'LoginCtrl'
                }
            },
            resolve: {
                MenuCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        "../apps/core/controllers/login.js"
                    );
                }]
            }
        })
        .state('root.diagnostic_tag', {
            url: '/diagnostic_tag',
            views: {
                'content': {
                    templateUrl: '../apps/diagnostic_tag/templates/index.html',
                    controller: 'DiagnosticTagIndexCtrl'
                }
            },
            resolve: {
                MenuCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        "../apps/diagnostic_tag/controllers/index.js"
                    );
                }]
            }
        })




        .state('root.diagnostic_tag_f', {
            url: '/diagnostic_tag_f/:id/',
            params: {
                id: null
            },
            views: {
                'content': {
                    templateUrl: '../apps/diagnostic_tag/templates/form.html',
                    controller: 'DiagnosticTagFormCtrl'
                }
            },
            resolve: {
                MenuCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        "../apps/diagnostic_tag/controllers/form.js"
                    );
                }]
            }
        })


        .state('app.login', {
            url: '/login',
            views: {
                'content': {
                    templateUrl: '../apps/core/template/login.html',
                    controller: 'LoginCtrl'
                }
            },
            resolve: {
                MenuCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        "../apps/core/controllers/login.js"
                    );
                }]
            }
        })

    $urlRouterProvider.otherwise('/app/login');
});