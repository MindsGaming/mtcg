function theStock() {
  var game = document.getElementById("thestock");
  var title = document.getElementById("stock-title");
  var info = document.getElementById("stock-info");

  if (game.title == "preview") {
    title.className = "hide";
    info.className = "hide";
    game.title = "OPEN";
  }
}
