/*global angular*/
(function () {
    'use strict';

    if(!Array.isArray) {
        Array.isArray = function (vArg) {
            return Object.prototype.toString.call(vArg) === '[object Array]';
        };
    }

    angular.module('ProsCons', ['LocalStorageModule']);
}());
