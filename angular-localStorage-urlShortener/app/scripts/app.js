'use strict';

angular.module('angularLocalStorageUrlShortenerApp', ['ngResource', 'ngRoute',
               'ngStorage', 'ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
