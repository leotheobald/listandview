'use strict';

/**
 * @ngdoc function
 * @name listandviewApp.controller:NodeViewCtrl
 * @description
 * # NodeViewCtrl
 * Controller of the listandviewApp
 */
 angular.module('listandviewApp')
   .controller('NodeViewCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

     var nid = $routeParams.nid;
     //console.log('nid', nid);

     $http.get('http://drupal8.dev/node/' + nid + '?_format=json').then(function(response) {
      console.log('NodeViewCtrl GET response', response);
      var data = response.data;

      $scope.type = data.type[0].target_id;
      $scope.title = data.title[0].value;
      $scope.summary = data.body[0].summary;
      $scope.body = data.body[0].value;
      $scope.alt = data.field_image[0].alt;
      $scope.height = data.field_image[0].height;
      $scope.width = data.field_image[0].width;
      $scope.url = data.field_image[0].url;

      $scope.vidUrl = data.field_html5_video[0].url;
      console.log('NodeViewCtrl GET $scope', $scope.vidUrl);
    });

   }]);
