/*global angular*/
(function () {
    'use strict';

    angular.module('ProsCons').controller('ListCtrl', ['$scope', function ($scope) {
        $scope.add = function () {
            $scope.list.items.push({
                title: $scope.list.newItem.title,
                type: $scope.list.newItem.type
            });
            $scope.list.newItem.title = '';
        };

        $scope.remove = function (item) {
            var index;

            index = $scope.list.items.indexOf(item);

            if (index >= 0) {
                $scope.list.items.splice(index, 1);
            }
        };
    }]);
}());
