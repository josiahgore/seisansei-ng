'use strict';

angular.module('seisanseiApp')

  .factory('Task', function ($rootScope, LocalStorage) {
    var service = $rootScope.$new();

    service.storageKey = 'seisansei.tasks';
    service._load = function () {
      var storedTasks = LocalStorage.getItem(service.storageKey);
      if (storedTasks) {
        service.tasks = JSON.parse(storedTasks);
      } else {
        service.tasks = [];
      }
    };
    service._load();

    service.all = function () {
      return service.tasks;
    };

    service.$on('$destroy', function () {
      // flush tasks to disk
    });

    return service;
  });

