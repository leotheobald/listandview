'use strict';

/**
 * @ngdoc function
 * @name listandviewApp.controller:NodeListCtrl
 * @description
 * # NodeListCtrl
 * Controller of the listandviewApp list
 */

angular.module('listandviewApp')
 .controller('NodeListCtrl', ['$scope', '$http', function($scope, $http) {
   //$http.get('/nodes.json').then(function(response) {
   $http.get('http://drupal8.dev/rest/views/articles').then(function(response) {
     console.log('NodeListCtrl GET response', response);
     $scope.nodeList = response.data;
     //console.log('NodeListCtrl GET $scope', $scope);
   });
}]);
