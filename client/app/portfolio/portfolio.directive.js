'use strict';

angular.module('awesomebankApp')
  .directive('portfolio', function () {
    return {
      templateUrl: 'app/portfolio/portfolio.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });