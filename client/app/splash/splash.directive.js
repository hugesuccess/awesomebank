'use strict';

angular.module('awesomebankApp')
  .directive('splash', function ($http) {
    return {
      templateUrl: 'app/splash/splash.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        $http.get('/api/carousels')
            .success(function(items) {
                console.log(items);
                scope.items = items;
            })
        scope.test = "Hello World";
      }
    };
  });
