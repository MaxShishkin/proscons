/*global define*/

define([
    'app',
    'extras/boilerplateData'
], function (app, bpData) {
    'use strict';

    app.controller('AppCtrl', ['$scope', 'localStorageService',
        function ($scope, localStorageService) {

            function createBoilerplateData() {
                $scope.lists = bpData;
            }

            if (localStorageService.isSupported()) {
                $scope.lists = localStorageService.get('proscons_lists');

                if (!$scope.lists || !Array.isArray($scope.lists)) {
                    createBoilerplateData();
                }

                $scope.$watch('lists', function () {
                    localStorageService.add('proscons_lists', $scope.lists);
                }, true);
            } else {
                createBoilerplateData();
            }

            $scope.typeStrings = [, 'pros', 'cons'];
        }
    ]);
});
