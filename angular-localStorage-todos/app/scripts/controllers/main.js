'use strict';

angular.module('testApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  /*
    Swap out the Static line for this block to persist todos
    =====================================================

    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    $scope.$watch(function () {
      localStorageService.add('todos', $scope.todos.join('\n'));
    });*/


    // Static
    $scope.todos = ['Item1', 'Item2', 'Item3'];

    $scope.addTodo = function(){
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    }

    $scope.removeTodo = function(index){
    	$scope.todos.splice(index, 1);
    }

  });
