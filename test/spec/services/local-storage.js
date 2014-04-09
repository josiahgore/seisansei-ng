'use strict';

describe('Service: LocalStorage', function () {

  // load the module
  beforeEach(function () {
    module('seisanseiApp');
  });

  it('injects successfully', inject(function (LocalStorage) {
    expect(typeof(LocalStorage) === 'object');
  }));

  it('should successfully store and retrieve data', inject(function (LocalStorage) {
    var key = 'my key';
    expect(LocalStorage.getItem(key)).toBe(null);

    LocalStorage.setItem(key, 'my value');
    expect(LocalStorage.getItem(key)).toBe('my value');

    LocalStorage.setItem('second key', 'another value');
    expect(LocalStorage.getItem(key)).toBe('my value');
    expect(LocalStorage.getItem('second key')).toBe('another value');

    LocalStorage.removeItem(key);
    expect(LocalStorage.getItem(key)).toBe(null);
    expect(LocalStorage.getItem('second key')).toBe('another value');
  }));

});

