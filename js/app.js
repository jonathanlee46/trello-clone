console.log("app.js loaded"); //test
globalCounter = 0;

$( document ).ready(function() {

  var columnArray = [];
  var column = new Column();
  var card = new Card();
  column.add(card);
  // column.fetch();

  var view = new CardCollectionView({
    collection: column,
    el: $('.column')[0]
  });

  view.render();
});