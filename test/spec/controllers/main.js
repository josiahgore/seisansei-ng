/* global _ */
'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('seisanseiApp'));

  beforeEach(function() {
    this.addMatchers({

      toHaveProperties: function(expected) {
        var self = this;
        _.each(_.pairs(expected), function(key, value) {
          if (!(_.has(self.actual, key) && self.actual[key] === value)) {
            return false;
          }
        });
        return true;
      }
    });
  });

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should define navigation items', function () {
    expect(scope.menuItems.length).toBe(2);
    expect(scope.menuItems).toHaveProperties({name: 'My Tasks'});
    expect(scope.menuItems).toHaveProperties({name: 'Settings'});
  });

});
