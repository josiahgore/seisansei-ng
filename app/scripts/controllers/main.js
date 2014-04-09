'use strict';

angular.module('seisanseiApp')

  .controller('MainCtrl', function ($scope) {

    $scope.menuItems = [
      {
        name: 'My Tasks',
        sref: 'tasks'
      },
      {
        name: 'Settings',
        sref: 'settings'
      }
    ];

    $scope.nav = {
      toggle: function () {
        angular.element('body').toggleClass('off-canvas-left-open');
      }
    };

  });
