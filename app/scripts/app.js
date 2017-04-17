'use strict';

/**
 * @ngdoc overview
 * @name listandviewApp
 * @description
 * # listandviewApp
 *
 * Main module of the application.
 */
angular
  .module('listandviewApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $httpProvider.defaults.headers.common.Accept = 'application/hal+json';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/node/:nid', {
        templateUrl: 'views/node.html',
        controller: 'NodeViewCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'NodeListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);
