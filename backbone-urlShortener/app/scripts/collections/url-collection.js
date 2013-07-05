/*global backbone, Backbone*/

backbone.Collections.UrlCollection = Backbone.Collection.extend({
	cache: new Backbone.LocalStorage("urls"),
	model: backbone.Models.UrlModel,
	initialize: function() {
		this.on('change', this.cacheUrl, this);
		this.add(this.cache.findAll());
	},
	cacheUrl: function(model) {
		this.cache.create(model);
	}
});