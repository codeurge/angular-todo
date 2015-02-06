/**
 * @ngdoc function
 * @name todoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAngularApp
 */
window.app = angular.module('todoAngularApp');
app.controller('MainCtrl', function ($scope, todos) {
  $scope.todos = todos;
});
app.service('todos', function() {
  var todos = [];
  return { /* return an object of functions */
    get: function() {
      return todos;
    },
    add: function(todo) {
      todos.push(_.clone(todo)); /* clones js object so reference doesnt match other todos */
    },
    remove: function(todo) {
      _.remove(todos, todo)
    }
  }
});
