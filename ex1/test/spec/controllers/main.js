'use strict';

describe('Controller: MainCtroller', function () {

  // load the controller's module
  beforeEach(module('frontend'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainController', {
      $scope: scope
    });
  }));

  it('should set the name to Frontend', function () {
    expect(scope.frontend).toBeDefined();
    expect(scope.frontend.name).toBe('Frontend');
  });
});
