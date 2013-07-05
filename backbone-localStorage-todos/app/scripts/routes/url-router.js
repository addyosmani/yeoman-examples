/*global backbone, Backbone*/

backbone.Routers.UrlRouter = Backbone.Router.extend({
	routes: {
		"": "onAppLoad"
	},
	onAppLoad: function(path) {
		var url = new backbone.Collections.UrlCollection();
		var view = new backbone.Views.UrlView({
			el: '#urls',
			collection: url
		});
	}
});