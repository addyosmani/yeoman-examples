'use strict';

describe('Service: UrlResource', function () {

  // load the service's module
  beforeEach(module('angularLocalStorageUrlShortenerApp'));

  // instantiate service
  var UrlResource;
  beforeEach(inject(function (_UrlResource_) {
    UrlResource = _UrlResource_;
  }));

  it('should do something', function () {
    expect(!!UrlResource).toBe(true);
  });

});
