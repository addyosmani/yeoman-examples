'use strict';

angular.module('angularLocalStorageUrlShortenerApp')
  .controller('MainCtrl', function ($scope, UrlResource, $localStorage) {
    var storage = $localStorage.$default({
      urls: []
    });
    $scope.urls = storage.urls;

    $scope.submit = function submit() {
      UrlResource.save({
        longUrl: $scope.long
      }).$promise.then(function (data) {
        $scope.urls.unshift({
          long: data.longUrl,
          short: data.id
        });
      });
    };
  });
