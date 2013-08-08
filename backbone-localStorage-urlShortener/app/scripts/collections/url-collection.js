/*global backboneUrlShortener, Backbone*/

backboneUrlShortener.Collections.UrlCollection = Backbone.Collection.extend({

    cache: new Backbone.LocalStorage('urls'),

    model: backboneUrlShortener.Models.UrlModel,

    initialize: function () {
        this.on('change', this.cacheUrl, this);
        this.add(this.cache.findAll());
    },

    cacheUrl: function (model) {
        this.cache.create(model);
    }

});
