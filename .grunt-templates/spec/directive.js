'use strict';

describe('Directive: <%= file.name %>', function () {

  var element;
  var $scope;

  // load the module
  beforeEach(module('seisanseiApp'));

  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element('<div <%= file.name %>></div>');
    $compile(element)($rootScope);
    $scope.$digest();
  }));

  it('compiles successfully', function () {
    expect(element.html().length).toBeGreaterThan(0);
    expect(element.find('div').length).toBe(1);
  });

});

