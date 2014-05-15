/*global backboneApp, $*/

(function(){
	
	'use strict';
	
	window.backboneApp = {
	    Models: {},
	    Collections: {},
	    Views: {},
	    Routers: {},
	    init: function () {
	        new this.Views.TodosView({
	            collection: new this.Collections.TodosCollection()
	        });
	    }
	};

	$(document).ready(function () {
	    backboneApp.init();
	});

})();