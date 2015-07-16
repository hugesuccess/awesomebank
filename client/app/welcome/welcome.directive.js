'use strict';

angular.module('awesomebankApp')
  .directive('welcome', function () {
    return {
      templateUrl: 'app/welcome/welcome.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });