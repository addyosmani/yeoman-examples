/*global backboneUrlShortener, $*/

(function(){
	'use strict';
	window.backboneUrlShortener = {
	    Models: {},
	    Collections: {},
	    Views: {},
	    Routers: {},
	    init: function () {
	        var url = new backboneUrlShortener.Collections.UrlCollection();

	        new backboneUrlShortener.Views.UrlView({
	            el: '#urls',
	            collection: url
	        }).render();

	        Backbone.history.start();
	    }
	};

	/* Order and include as you please. */
	require('.tmp/scripts/templates');
	require('app/scripts/views/*');
	require('app/scripts/models/*');
	require('app/scripts/collections/*');
	require('app/scripts/routes/*');

	$(document).ready(function () {
	    backboneUrlShortener.init();
	});
	
})();