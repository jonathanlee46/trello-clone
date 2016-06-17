console.log("models.js loaded");
globalCard = 0;

Card = Backbone.Model.extend({
  // idAttribute:"_id", //id# accessor
  initialize: function(){
    this.id = globalCard;
    globalCard++;
  },

  defaults:{
    task: 'Go shopping',
  },

  getTask: function(){
    return this.get("task");
  },
  getId: function(){
    return this.id;
  },
  setTask: function(newTask){
    this.set({task: newTask});
  },

  remove: function(){
    this.destroy();
  },
});

