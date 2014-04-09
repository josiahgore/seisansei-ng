'use strict';

angular
  .module('firebase', [])

  .value('Firebase', function (url) {
    return {
      url: url
    };
  })

  .factory('firebaseMock', function() {
    return {
      items: [],

      get: function () {
        return this.items;
      },

      add: function(item) {
        this.items.push(item);
      }
    }
  })

  .factory('$firebase', function ($log, firebaseMock) {
    return function (ref) {
      $log.debug('Created $firebase with ref', ref);
      return firebaseMock.get();
    };
  });
