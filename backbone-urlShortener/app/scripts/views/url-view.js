/*global backbone, Backbone, JST*/

backbone.Views.UrlView = Backbone.View.extend({

    template: JST['app/scripts/templates/url.ejs'],

	events: {
		"click button": "create",
	},
	create: function(e) {
		e.preventDefault();
		var input = this.$el.find('input');
		var value = input.val();
		if (value) {
			this.collection.create({
				longUrl: value
			});
			input.val("");
			input.focus();
		}
	},

	initialize: function() {
		this.collection.on('change', this.render, this);
	},
	render: function() {
		var list = this.$el.find('.items');
		list.html('');
		_.each(this.collection.models, function(model) {
			list.append(this.template({
				model: model.toJSON()
			}));
		}, this);
		return this;
	},
});
