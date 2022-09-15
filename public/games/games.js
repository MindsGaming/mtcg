function theStock() {
  var game = document.getElementById("build-stock");
  var title = document.getElementById("stock-title");
  var info = document.getElementById("stock-info");
  var button = document.getElementById("stock-btn");

  if (game.title == "closed") {
    title.className = "white";
    info.className = "white";
    game.title = "OPEN";
    button.className = "float-right";
    game.className = "splash";
  } else {
    if (game.title == "OPEN") {
      title.className = "white";
      info.className = "white";
      game.title = "closed";
      button.className = "hide";
      game.className = "hide";
    }
  }

  if (game.title == "build") {
    title.className = "hide";
    info.className = "hide";
    game.title = "OPEN";
    button.className = "float-right";
    game.className = "splash";
    var createHUB = document.createElement("iframe");
    createHUB.src = "/games/the-stock";
    createHUB.className = "wrap";
    var CREATEHUB = document
      .getElementById("build-stock")
      .appendChild(createHUB);
  }
}

function RPS() {
  var game = document.getElementById("rps-build");
  var title = document.getElementById("rps-title");
  var info = document.getElementById("rps-info");
  var button = document.getElementById("rps-btn");

  if (game.title == "closed") {
    title.className = "white";
    info.className = "white";
    game.title = "OPEN";
    button.className = "float-right";
    game.className = "splash";
  } else {
    if (game.title == "OPEN") {
      title.className = "white";
      info.className = "white";
      game.title = "closed";
      button.className = "hide";
      game.className = "hide";
    }
  }

  if (game.title == "build") {
    title.className = "hide";
    info.className = "hide";
    game.title = "OPEN";
    button.className = "float-right";
    game.className = "splash";
    var createHUB = document.createElement("iframe");
    createHUB.src = "/games/rpsbot";
    createHUB.className = "wrap";
    var CREATEHUB = document.getElementById("rps-build").appendChild(createHUB);
  }
}
