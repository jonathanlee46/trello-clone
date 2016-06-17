console.log("collections.js loaded");

Column = Backbone.Collection.extend({
  model: Card,
  initialize: function(){
    $('.board').append("<div class=column id=" + globalCounter + "> </div>");
    this.label = "new column label";
    this.id = globalCounter;
    globalCounter++;
  },

  getLabel: function(){
    return this.label;
  },

  setLabel: function(input){
    return this.label = input;
  },

  printLabel: function(){

    
  }
})