'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function () {
      scope.todo = 'Test 1';
      scope.addTodo();
      expect(scope.todos.length).toBe(1);
    });

  it('should add items to the list', function () {
      scope.todo = 'Test 1';
      scope.addTodo();
      scope.removeTodo(0);
      expect(scope.todos.length).toBe(0);
    });

});
