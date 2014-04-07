'use strict';

describe('Service: Task', function () {

  // load the module
  beforeEach(module('seisanseiApp'));

  it('should pass', inject(function (Task) {
    expect(typeof(Task) === 'object');
  }));

});

