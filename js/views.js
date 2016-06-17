console.log("views.js loaded");

CardView = Backbone.View.extend({
  tagName: 'ul',
  
  initialize: function(){
    var that = this;

    _(this).bindAll('add', 'remove');
    this.collection.bind('add', this.add);
    this.collection.bind('remove', this.remove);
  },

  render: function(){
    var that = this;
    var id = this.collection.id;

    $(this.el).empty();

    for (var i = 0; i < this.collection.length; i++ ){
      var tempCard = this.collection.at(i);
      $(this.el).append("<ul>" +
        tempCard.getTask() + "<br></ul>"
      );
    }
  },

  add: function(cardModel){
    //adding to DOM
    var task = cardModel.getTask();

    $(this.el).append("<ul>" +
        task + "<br></ul>");
  },

  remove: function(){
    //removal from DOM
    $(this.el).children("ul").last().remove();
  },

});
