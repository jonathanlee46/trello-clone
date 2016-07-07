console.log("collections.js loaded");

Column = Backbone.Collection.extend({
  model: Card,
  
  initialize: function(){
    $('.board').append(
      "<div class=column id=" + globalColumn + "><button class=newCard>Add Card</button></div>"
    );
    this.label = "new column label";
    this.id = globalColumn;
  },

  getLabel: function(){
    return this.label;
  },

  setLabel: function(input){
    return this.label = input;
  },
})