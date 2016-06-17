console.log("models.js loaded");
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
  // getModelId: function(){
  //   return this.get("modelId");
  // },
  setTask: function(newTask){
    this.set({task: newTask});
  },

  remove: function(){
    this.destroy();
  },
});

