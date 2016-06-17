console.log("app.js loaded"); //test
globalCounter = 0;


  console.log("ready firing");
  var columnArray = [];
  var column = new Column();
  var card = new Card();
  column.add(card);
  // column.fetch();

  var view = new CardView({
    collection: column,
    // el: $('.column')[0]
  });

  // view.render();
