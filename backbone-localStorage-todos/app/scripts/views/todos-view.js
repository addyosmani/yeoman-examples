/*global backboneApp, Backbone, JST*/

(function(){
	
	'use strict';
	
	backboneApp.Views.TodosView = Backbone.View.extend({

	    el: '#todo-app',

	    template: JST['app/scripts/templates/todos.ejs'],

	    events: {
	        'submit': 'createTodo'
	    },

	    initialize: function () {
	        this.render();

	        this.listenTo(this.collection, 'add', this.addTodoItem);
	        this.listenTo(this.collection, 'reset', this.addAllTodoItems);

	        this.collection.fetch();
	    },

	    render: function () {
	        this.$el.html(this.template());

	        return this;
	    },

	    createTodo: function (event) {
	        event.preventDefault();

	        var title = this.$('#new-todo').val().trim();

	        if (title) {
	            this.collection.create(new backboneApp.Models.TodoModel({
	                title: title
	            }));

	            $('#new-todo').val('');
	        }
	    },

	    addTodoItem: function (todo) {
	        var view = new backboneApp.Views.TodoView({ model: todo });
	        this.$('ul').append(view.render().el);
	    },

	    addAllTodoItems: function () {
	        this.collection.each(this.addTodoItem, this);
	    }

	});

})();