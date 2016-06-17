console.log("views.js loaded");

CardView = Backbone.View.extend({
  tagName: 'li',
  
  
  
  initialize: function(){
    var that = this;
    this.render();
  },

  render: function(){
    var that = this;
    var id = this.collection.id;

    for (var i = 0; i < this.collection.length; i++ ){
      var tempCard = this.collection.at(i);
      $('#'+id).append(
        tempCard.getTask() + "<br>"
      );
    }
  },
});
