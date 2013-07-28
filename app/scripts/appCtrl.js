/*global angular*/
(function () {
    'use strict';

    angular.module('ProsCons').controller('AppCtrl', ['$scope', function ($scope) {
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
                ]
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
                ]
            }
        ];
    }]);
}());
