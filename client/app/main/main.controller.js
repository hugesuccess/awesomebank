'use strict';

angular.module('awesomebankApp')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get('/api/links').success(function(links) {
      angular.forEach(links, function(link) {
        var tmp = link.value.toString().slice(-2);
            link.cents = tmp;
            return link;
        });
        $scope.links = links;
    });

    $http.get('/api/portfolios').success(function(items) {
        $scope.portfolios = items;
    });

    $http.get('/api/users/55a7432258cc2a2b45db8129').success(function(user) {
        $scope.user = user;
    })

  });
