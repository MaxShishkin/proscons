/*global angular*/
(function () {
    'use strict';

    angular.module('ProsCons').controller('ListCtrl', ['$scope', function ($scope) {
        $scope.items = $scope.$parent.list.items || [];

        $scope.newItem = {
            title: '',
            type: 1
        };

        $scope.add = function () {
            $scope.items.push({
                title: $scope.newItem.title,
                type: $scope.newItem.type
            });
            $scope.newItem.title = '';
        };

        $scope.remove = function (item) {
            var index;

            index = $scope.items.indexOf(item);

            if (index >= 0) {
                $scope.items.splice(index, 1);
            }
        };

        $scope.strType = function (type) {
            return type === 1 ? 'pros' : 'cons';
        };
    }]);
}());
