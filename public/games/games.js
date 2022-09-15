function theStock() {
  var game = document.getElementById("thestock");
  var title = document.getElementById("stock-title");
  var info = document.getElementById("stock-info");
  var button = document.getElementById("stock-btn");

  if (game.title == "preview") {
    title.className = "hide";
    info.className = "hide";
    game.title = "OPEN";
    button.className = "float-right";
    game.className = "Splash";
    var createHUB = document.createElement("iframe");
    createHUB.src = "/games/the-stock";
    createHUB.className = "wrap";
    createHUB.allow = "microphone; camera; vr; speaker;";
    var CREATEHUB = document.getElementById("thestock").appendChild(createHUB);
  } else {
    if (game.title == "OPEN") {
      title.className = "white";
      info.className = "white";
      game.title = "preview";
      button.className = "hide";
      game
    }
  }
}
