angular.module('app').factory('API', function ($resource) {

    var url = "http://localhost:9800/api/atencion/";

    return {
        DiagnosticTag: $resource(url + 'diagnostic_tags/:id/:micro/', {
            'id': '@id',
            'micro': '@micro'
        }, {
            'list': {
                method: 'GET',
                isArray: false
            },
            "update": {
                method: 'PUT'
            },
            'get': {
                method: 'GET',
                isArray: false
            },
            'post': {
                method: 'POST'
            },
            'destroy': {
                method: 'DELETE'
            }
        }),
        Verse: $resource(url + 'verses/:id/:micro/', {
            'id': '@id',
            'micro': '@micro'
        }, {
            'get': {
                method: 'GET'
            },

        }),
    };
});