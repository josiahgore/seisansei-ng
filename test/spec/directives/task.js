'use strict';

describe('Directive: task', function () {

  var element;
  var $scope;

  // load the module
  beforeEach(module('seisanseiApp'));

  beforeEach(module('views/tpls/task.html'));

  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    $scope.testTask = {
      name: 'do this thing'
    };
    element = angular.element('<div task="testTask"></div>');
    $compile(element)($rootScope);
    $scope.$digest();
  }));

  it('compiles successfully', function () {
    expect(element.html().length > 0);
  });

  it('contains task components', function () {
    expect(element.html()).toContain($scope.testTask.name);
  });

});

