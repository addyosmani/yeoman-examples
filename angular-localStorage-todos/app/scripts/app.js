'use strict';

angular.module('mytodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.sortable',
  'LocalStorageModule'
])
  .config(['localStorageServiceProvider', '$routeProvider', function(localStorageServiceProvider, $routeProvider){
    localStorageServiceProvider.setPrefix('ls');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
