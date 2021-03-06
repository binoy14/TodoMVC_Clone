/*global Backbone */
var app = app || {};

(function (){
  'use strict';

  // Todo Model
  // ----------

  // Our basic **Todo** model has 'title', 'order', and 'completed' attributes.
  app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the 'completed' state of this todo item.
  toggle: function(){
      this.save({
        completed: !this.get('completed')
      });
    }
  });
})();
