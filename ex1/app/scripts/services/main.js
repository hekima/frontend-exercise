'use strict';

angular.module('frontend')
.service('mainService',
['$resource',function ($resource) {
  var result = {};

  /**
   * Loads json data from some static file of ours.
   * If url is undefined, this function sets $scope.data as 'undefined'.
   * If the url is an invalid address, this function sets $scope.data as 'error'.
   * If the url is a valid address (the only valid address is '/views/test.html'), this function sets $scope.data awith the data in this file
   */
  result.loadJsonData = function($scope, url) {
    if(!url) {
      $scope.data.message = 'undefined';
      return;
    }

    var resource = $resource(url);
    resource.get({},
      function(data){
        $scope.data.message = data.message;
      },
      function(){
        $scope.data.message = 'error';
      });
  };

  return result;
}]);
