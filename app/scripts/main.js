/*global require*/

require.config({
    paths: {
        angular: '../components/angular/angular',
        localStorageModule: 'vendor/localStorageModule',
        jquery: '../components/jquery/jquery'
    },
    shim: {
        angular: {
            exports: 'angular'
        },

        localStorageModule: {
            deps: ['angular'],
            exports: 'angular'
        }
    }
});

require([
    'angular',
    'app',
    'controllers/appCtrl',
    'controllers/listCtrl',
    'directives/prosConsCustomSelect',
    'extras/shim'
], function (angular) {
    'use strict';

    angular.bootstrap(document, ['ProsCons']);
});
