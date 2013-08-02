/*global angular*/
(function () {
    'use strict';

    angular.module('ProsCons').controller('AppCtrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {

        function createBoilerplateData () {
            $scope.lists = [
                {
                    title: 'To Be',
                    items: [
                        {
                            title: 'Can travel',
                            type: 1
                        },
                        {
                            title: 'Can date girls',
                            type: 1
                        },
                        {
                            title: 'Need to work',
                            type: 2
                        }
                    ],
                    newItem: {
                        title: '',
                        type: 1
                    }
                },
                {
                    title: 'Not To Be',
                    items: [
                        {
                            title: 'No need to work',
                            type: 1
                        },
                        {
                            title: 'Can fly on wings (probably)',
                            type: 1
                        }
                    ],
                    newItem: {
                        title: '',
                        type: 1
                    }
                }
            ];
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
    }]);
}());
