/*global backboneApp, Backbone*/

backboneApp.Collections.TodosCollection = Backbone.Collection.extend({

    localStorage: new Backbone.LocalStorage('backbone-generator-todos'),

    initialize: function () {
        this.model = backboneApp.Models.TodoModel;
    }

});
