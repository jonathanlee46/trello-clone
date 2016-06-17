CardCollectionView = Backbone.View.extend({
  initialize: function(){
    var that = this;
    // this._cardViews = [];

    // this.collection.each(function(card){
    //   that._cardViews.push(new UpdatingCardView({
    //     model: card,
    //     tagName: 'li'
    //   }));
    // })
  },

  render: function(){
    var that = this;

    $('.board').empty();

    _(this._cardViews).each(function(cv) {
      $(that.el).append(cv.render().el);
    });
  }
});




// var BoardView = Backbone.View.extend({

// })