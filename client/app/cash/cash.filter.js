'use strict';

angular.module('awesomebankApp')
  .filter('cash', function () {
    return function (input) {
      var txt = input.slice(-2);
      var amt = input.substring(0, input.length - 3);
      return amt;
    };
  });
