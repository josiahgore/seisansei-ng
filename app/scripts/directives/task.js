'use strict';

angular.module('seisanseiApp')

  .directive('task', function ($log) {
    return {
      restrict: 'EA',
      templateUrl: 'views/tpls/task.html',
      scope: {
        task: '='
      },
      link: function(scope, element, attrs) {
        $log.debug('linking Task', scope, element, attrs);
      }
    };
  });