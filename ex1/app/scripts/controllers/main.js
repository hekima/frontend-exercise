'use strict';

angular.module('frontend')
.controller('MainController',
['$scope','mainService',function ($scope, mainService) {
  $scope.frontend = {};
  $scope.frontend.name = 'Frontend';
  $scope.data = {};
  mainService.loadJsonData($scope, 'views/test.html');
}]);
