'use strict';

angular
  .module('seisanseiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',

    'ui.router'
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

;
