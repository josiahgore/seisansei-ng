'use strict';

describe('Controller: TaskListCtrl', function () {

  // load the controller's module
  beforeEach(module('seisanseiApp'));

  var TaskListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskListCtrl = $controller('TaskListCtrl', {
      $scope: scope
    });
  }));

  it('should pass', function () {
    expect(true);
  });
});

