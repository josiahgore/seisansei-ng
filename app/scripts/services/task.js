'use strict';

angular.module('seisanseiApp')

  .factory('Task', function ($rootScope, LocalStorage) {
    var service = $rootScope.$new();
    var storageKey = 'seisansei.tasks';

    var storedTasks = LocalStorage.getItem(storageKey);
    if (storedTasks) {
      service.tasks = JSON.parse(storedTasks);
    } else {
      service.tasks = [];
    }

    service.all = function () {
      return service.tasks;
    };

    return service;
  });

