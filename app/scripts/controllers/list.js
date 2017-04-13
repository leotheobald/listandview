'use strict';

/**
 * @ngdoc function
 * @name d8clientApp.controller:NodeListCtrl
 * @description
 * # NodeListCtrl
 * Controller of the d8clientApp list
 */

angular.module('d8clientApp')
 .controller('NodeListCtrl', ['$scope', '$http', function($scope, $http) {
   $scope.greeting = 'Hello!';
   //$http.get('/nodes.json').then(function(response) {
   $http.get('http://www.drupal8.dev/rest/views/articles').then(function(response) {
     console.log('NodeListCtrl GET response', response);
     $scope.nodeList = response.data;
     //console.log('NodeListCtrl GET $scope', $scope);
   });
}]);
