'use strict';

angular.module('seisanseiApp')

  .directive('<%= meta.className.charAt(0).toLowerCase() + meta.className.slice(1) %>', function ($log) {
    return {
      restrict: 'EA',
      template: "<div></div>",
      link: function(scope, element, attrs) {
        $log.debug('linking <%= meta.className.charAt(0).toLowerCase() + meta.className.slice(1) %>', scope, element, attrs);
      }
    };
  });