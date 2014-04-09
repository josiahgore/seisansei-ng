'use strict';

angular.module('seisanseiApp')

  .controller('TaskListCtrl', function ($scope, Task) {
    $scope.tasks = Task;

    $scope.addTask = function (task) {
      $scope.tasks.$add(task);
    };

  });
