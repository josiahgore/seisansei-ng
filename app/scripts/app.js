/* global _ */
'use strict';

angular
  .module('seisanseiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',

    'ui.router',
    'firebase',

    'seisanseiApp.config'
  ])

  .config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('tasks', {
        url: '/',
        templateUrl: 'views/tasks.html'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'views/settings.html'
      });
  })

  .run(function($rootScope, $window) {
    var win = angular.element($window);
    var updateDimensions = function() {
      $rootScope.viewport = $rootScope.viewport || {};
      if (typeof(win.innerWidth) !== 'undefined' && typeof(win.innerHeight) !== 'undefined') {
        $rootScope.viewport.width = win.innerWidth();
        $rootScope.viewport.height = win.innerHeight();
      }
      $rootScope.viewset = 'mobile';
      if ($rootScope.viewport.width >= 768) {
        $rootScope.viewset = 'desktop';
      }
    };
    win.on('resize', _.throttle(function() {
      $rootScope.$apply(updateDimensions);
    }, 50));
    updateDimensions();
  })
;
