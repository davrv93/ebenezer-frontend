var app = angular.module('app', ['ui.router', 'ngResource', "oc.lazyLoad", 'pascalprecht.translate']);

app.config(function ($httpProvider, $resourceProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.useXDomain = true;
    $resourceProvider.defaults.stripTrailingSlashes = false;

})


app.config(function ($httpProvider) {
    $httpProvider.useApplyAsync(true);
})