'use strict';

angular.module('seisanseiApp')

  .controller('TaskListCtrl', function ($scope, Task) {
    $scope.tasks = Task.all();
  });
