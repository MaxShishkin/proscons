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
            $scope.sortItems();
        };

        $scope.remove = function (item) {
            var index;

            index = $scope.list.items.indexOf(item);

            if (index >= 0) {
                $scope.list.items.splice(index, 1);
            }
        };

        $scope.sortItems = function () {
            $scope.list.items.sort(function (item1, item2) {
                return item1.type - item2.type;
            });
        };

        $scope.sortItems();
        $scope.$watch('list.items', $scope.sortItems, true);
    }]);
}());
