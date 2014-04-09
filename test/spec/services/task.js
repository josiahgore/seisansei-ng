'use strict';

describe('Service: Task', function () {

  // load the module
  beforeEach(function () {
    module('seisanseiApp');
  });

  it('injects successfully', inject(function (Task) {
    expect(typeof(Task) === 'object');
  }));

  it('pulls tasks from local storage', inject(function (Task, LocalStorage) {
    var tasks = Task.all();
    expect(tasks.length).toBe(0);
    LocalStorage.setItem(Task.storageKey, JSON.stringify([{
      name: 'test task',
      description: 'it is a test, ok?'
    }]));
    Task._load();
    tasks = Task.all();
    expect(tasks.length).toBe(1);
    expect(tasks[0].name).toBe('test task');
  }));

});

