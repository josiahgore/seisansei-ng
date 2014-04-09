'use strict';

angular.module('seisanseiApp')

  .factory('LocalStorage', function ($log, $window) {

    var api = $window.localStorage;
    if (api) {
      // attempt to use actual local disk storage
      while(true) {
        var testKey = '__test_key_ ' + Math.floor(Math.random() * 1000);
        if (api.getItem(testKey) === null) {
          try {
            api.setItem(testKey, (new Date()).getTime());
            api.removeItem(testKey);
            $log.debug('Storage: localStorage is available');
          } catch(error) {
            $log.debug('Storage: localStorage is unavailable (private browsing mode)');
            api = undefined;
          }
          break;
        }
      }
    }
    if (!api) {
      // if we can't use local storage, use in-memory storage
      api = (function() {
        var dataStore = {};
        return {
          setItem: function(key, value) {
            dataStore[key] = value;
          },
          getItem: function(key) {
            return dataStore[key];
          },
          removeItem: function(key) {
            delete dataStore[key];
          }
        };
      })();
    }

    return api;
  });

