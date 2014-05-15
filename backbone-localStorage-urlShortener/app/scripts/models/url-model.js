/*global backboneUrlShortener, Backbone*/

(function(){
	'use strict';

	backboneUrlShortener.Models.UrlModel = Backbone.Model.extend({

	    defaults: {},

	    url: 'https://www.googleapis.com/urlshortener/v1/url'

	});

})();

