'use strict';

/**
 * @ngdoc function
 * @name todoAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoAngularApp
 */
angular.module('todoAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
