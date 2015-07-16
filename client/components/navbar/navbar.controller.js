'use strict';

angular.module('awesomebankApp')
  .controller('NavbarCtrl', function ($scope, $location, $http) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];
    $scope.application = {
        name: "AwesomeBank"
    };
    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
