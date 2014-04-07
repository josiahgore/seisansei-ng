'use strict';

describe('Service: <%= meta.className %>', function () {

  // load the module
  beforeEach(module('seisanseiApp'));

  it('should pass', inject(function (<%= meta.className %>) {
    expect(typeof(<%= meta.className %>) === 'object');
  }));

});

