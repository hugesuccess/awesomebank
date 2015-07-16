'use strict';

angular.module('awesomebankApp')
  .directive('navbox', function () {
    return {
      templateUrl: 'app/navbox/navbox.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });