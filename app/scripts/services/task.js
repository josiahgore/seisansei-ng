'use strict';

angular.module('seisanseiApp')

  .factory('Task', function ($rootScope, LocalStorage, $firebase, Firebase, FIREBASE_URL) {
    var taskRef = new Firebase(FIREBASE_URL + '/task');
    return $firebase(taskRef);
  });

