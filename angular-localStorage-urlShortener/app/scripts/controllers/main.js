'use strict';

angular.module('angularLocalStorageUrlShortenerApp')
  .controller('MainCtrl', function ($scope, UrlResource) {
    $scope.urls = [];

    $scope.submit = function submit() {
      UrlResource.save({
        longUrl: $scope.long
      }).$promise.then(function (data) {
        $scope.urls.push({
          long: data.longUrl,
          short: data.id
        });
      });
    };
  });
