'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoAngularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no todos to start', function() {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function() {
    scope.todo = 'Todo 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should add then remove a todo from the list', function() {
    scope.todo = 'Removable Todo';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
    scope.removeTodo();
    expect(scope.todos.length).toBe(0);
  });
});
