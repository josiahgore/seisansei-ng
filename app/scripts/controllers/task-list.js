'use strict';

angular.module('seisanseiApp')

  .controller('TaskListCtrl', function ($scope, $log, Task) {
    $log.debug('instantiating TaskListCtrl', $scope);

    $scope.tasks = Task;

    $scope.headerText = 'Today';

    $scope.addTask = function (task) {
      $scope.tasks.$add(task);
    };

    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  });
