'use strict';

describe('Service: mainService', function () {

  // load the controller's module
  beforeEach(module('frontend'));

  var mainService,
    scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $injector) {
    scope = $rootScope.$new();
    scope.data = {};
    mainService = $injector.get('mainService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  describe('Function: loadJsonData', function(){
  });
});
