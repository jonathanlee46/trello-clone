console.log("collections loaded");

Column = Backbone.Collection.extend({
  model: Card,
  initialize: function(){
    this.label = "new column label";
  },

  getLabel: function(){
    return this.label;
  },

  setLabel: function(input){
    return this.label = input;
  },
})