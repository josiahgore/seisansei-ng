'use strict';

angular.module('seisanseiApp')

  .factory('Task', function ($rootScope, LocalStorage, $firebase, Firebase, PERSISTENCE_MODE, FIREBASE_URL) {
    var service = $rootScope.$new();

    service.storageKey = 'seisansei.tasks';
    service._load = function () {
      if (PERSISTENCE_MODE === 'firebase') {
        var taskRef = new Firebase(FIREBASE_URL + '/task');
        service.tasks = $firebase(taskRef);
      } else {
        var storedTasks = LocalStorage.getItem(service.storageKey);
        if (storedTasks) {
          service.tasks = JSON.parse(storedTasks);
        } else {
          service.tasks = [];
        }
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

