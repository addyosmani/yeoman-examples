'use strict';

angular.module('angularLocalStorageUrlShortenerApp')
  .factory('UrlResource', function UrlResource($resource) {
    return $resource('https://www.googleapis.com/urlshortener/v1/url');
  });
