'use strict';

angular.module('frontend', ['ngRoute', 'ngResource', 'angular-growl'])
  .config(['$routeProvider', 'growlProvider', function ($routeProvider, growlProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });

    growlProvider.globalTimeToLive(5000);

  }]);
