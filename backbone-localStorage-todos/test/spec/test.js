/*global describe it */
'use strict';
(function () {
	describe('Give a URL', function() {
		it('should have a URL for Google Shortener API', function() {
			var model = new backbone.Models.UrlModel();
			expect(model.url).to.eql("https://www.googleapis.com/urlshortener/v1/url");
		});
	});

})();
