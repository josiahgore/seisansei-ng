'use strict';

describe('Controller: <%= meta.className %>Ctrl', function () {

  // load the controller's module
  beforeEach(module('seisanseiApp'));

  var <%= meta.className %>Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    <%= meta.className %>Ctrl = $controller('<%= meta.className %>Ctrl', {
      $scope: scope
    });
  }));

  it('should pass', function () {
    expect(true);
  });
});

