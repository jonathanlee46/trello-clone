console.log("models.js loaded");
Card = Backbone.Model.extend({
  idAttribute:"_id", //id# accessor

  defaults:{
    task: 'Go shopping',
  },

  getTask: function(){
    return this.get("task");
  },
  getModelId: function(){
    return this.get("modelId");
  },
});

