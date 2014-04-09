'use strict';

describe('Service: <%= meta.className %>', function () {

  // load the module
  beforeEach(module('seisanseiApp'));

  it('injects successfully', inject(function (<%= meta.className %>) {
    expect(typeof(<%= meta.className %>) === 'object');
  }));

});

