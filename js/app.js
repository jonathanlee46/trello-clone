console.log("app.js loaded"); //test
globalColumn = 0;
// globalCard = 0;

$( document ).ready(function() {
    console.log( "document ready!");
    addColumnButton();
});

var addColumnButton = function(){
  $('.newColumn').click(function(e){
    e.preventDefault();
    var column = new Column();
    columnArray.push(column);

    var view = new CardView({
      collection: column,
      el: $('#' + globalColumn),
    });
    viewArray.push(view);

    globalColumn++;
  })
}

console.log("ready firing");
var columnArray = [];
var viewArray = [];


// var card = new Card();
// column.add(card);


// view.render();

//test auto-render on add
// var card2 = new Card()
// card2.getId();
// card2.setTask("hello");
// column.add(card2);