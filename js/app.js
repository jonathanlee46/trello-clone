console.log("app.js loaded"); //test
globalColumn = 0;
globalCard = 0;


console.log("ready firing");
var columnArray = [];
var column = new Column();
var card = new Card();
column.add(card);

var viewArray = [];
var view = new CardView({
  collection: column,
  el: $('#0'),
});
view.render(); //initial render

//view auto-render on add test
var card2 = new Card()
card2.setTask("hello");
column.add(card2);